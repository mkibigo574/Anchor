import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO = "hello@anchornds.com.au";
const FROM = "Anchor NDSS <hello@anchornds.com.au>";
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// Meta fields control how the email is built; they are not rendered as content rows.
const META_FIELDS = new Set(["_subject", "_form", "botcheck", "message"]);

type Attachment = { filename: string; content: string };

function prettifyLabel(key: string): string {
  return key
    .replace(/_/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  const contentType = req.headers.get("content-type") || "";
  const fields: Record<string, string> = {};
  let attachment: Attachment | null = null;

  try {
    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      for (const [key, value] of form.entries()) {
        if (value instanceof File) {
          if (value.size === 0) continue;
          if (value.size > MAX_FILE_SIZE) {
            return NextResponse.json(
              { success: false, message: "Attachment is larger than 10MB. Please attach a smaller file." },
              { status: 400 }
            );
          }
          const buffer = Buffer.from(await value.arrayBuffer());
          attachment = { filename: value.name, content: buffer.toString("base64") };
        } else {
          fields[key] = String(value);
        }
      }
    } else {
      const body = (await req.json()) as Record<string, unknown>;
      for (const [key, value] of Object.entries(body)) {
        fields[key] = value == null ? "" : String(value);
      }
    }
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without sending.
  if (fields.botcheck) {
    return NextResponse.json({ success: true });
  }

  const formName = fields._form?.trim() || "Website";
  const subject = fields._subject?.trim() || `New website enquiry — Anchor NDSS`;
  const replyTo = fields.email?.trim();
  const messageBody = fields.message?.trim() || "";

  const rows = Object.entries(fields).filter(
    ([key, value]) => !META_FIELDS.has(key) && value.trim() !== ""
  );

  const text =
    rows.map(([key, value]) => `${prettifyLabel(key)}: ${value}`).join("\n") +
    (messageBody ? `\n\nMessage:\n${messageBody}` : "");

  const htmlRows = rows
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#6b6b6b;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(
          prettifyLabel(key)
        )}</td><td style="padding:6px 0;color:#1a1a1a">${escapeHtml(value)}</td></tr>`
    )
    .join("");

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;max-width:600px;margin:0 auto">
    <h2 style="margin:0 0 4px;font-size:18px">${escapeHtml(subject)}</h2>
    <p style="margin:0 0 16px;color:#6b6b6b;font-size:13px">Submitted via the ${escapeHtml(formName)}</p>
    ${htmlRows ? `<table style="border-collapse:collapse;font-size:14px;width:100%">${htmlRows}</table>` : ""}
    ${
      messageBody
        ? `<div style="margin-top:16px"><p style="margin:0 0 4px;color:#6b6b6b;font-weight:600;font-size:13px">Message</p><p style="margin:0;white-space:pre-wrap;font-size:14px;line-height:1.5">${escapeHtml(
            messageBody
          )}</p></div>`
        : ""
    }
  </div>`;

  const payload: Record<string, unknown> = {
    from: FROM,
    to: [TO],
    subject,
    html,
    text
  };
  if (replyTo) payload.reply_to = replyTo;
  if (attachment) payload.attachments = [attachment];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      let message = "Failed to send your message. Please try again.";
      try {
        const err = (await res.json()) as { message?: string };
        if (err?.message) message = err.message;
      } catch {
        // ignore parse errors
      }
      return NextResponse.json({ success: false, message }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Network error sending your message. Please try again." },
      { status: 502 }
    );
  }
}
