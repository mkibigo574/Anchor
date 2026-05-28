"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="card p-8 sm:p-10 lg:p-12 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 text-white shadow-soft">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="h3 mt-6">Message sent</h3>
        <p className="lede mt-4 text-pretty max-w-md mx-auto">
          Thanks for reaching out. Our team will respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-500 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8 lg:p-10">
      <h3 className="font-display text-2xl font-bold tracking-tightlx text-ink-900">
        Send us a message
      </h3>
      <p className="mt-2 text-ink-600 text-sm">
        Tell us about your needs and we&rsquo;ll be in touch shortly.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <input type="hidden" name="_subject" value="New Contact Enquiry — Anchor NDSS" />
        <input type="hidden" name="_form" value="Contact form" />
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" required />
          <Field label="Phone" name="phone" type="tel" required />
        </div>
        <Field label="Email" name="email" type="email" required />
        <Field
          label="I am enquiring as"
          name="role"
          placeholder="Participant / family member / coordinator"
        />
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
            Your message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:bg-white transition resize-none text-sm"
            placeholder="Tell us about your support needs or NDIS plan..."
          />
        </div>

        {status === "error" && (
          <div className="flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-ink-500 sm:max-w-xs leading-relaxed">
            By submitting, you consent to Anchor contacting you about your enquiry.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send enquiry"}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:bg-white transition text-sm"
      />
    </div>
  );
}
