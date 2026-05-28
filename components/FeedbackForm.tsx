"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export function FeedbackForm() {
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
        <h3 className="h3 mt-6">Feedback received</h3>
        <p className="lede mt-4 text-pretty max-w-md mx-auto">
          Thank you for taking the time to share. We acknowledge feedback within 2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-500 hover:underline"
        >
          Submit more feedback
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8 lg:p-10">
      <input type="hidden" name="_subject" value="New Feedback — Anchor NDSS" />
      <input type="hidden" name="_form" value="Feedback form" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <div className="mt-5">
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mt-5">
        <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
          Type of feedback
        </label>
        <select
          name="type"
          className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 focus:outline-none focus:border-brand-500 focus:bg-white transition text-sm"
          defaultValue="General"
        >
          <option>Compliment</option>
          <option>Suggestion</option>
          <option>Complaint</option>
          <option>General</option>
        </select>
      </div>
      <div className="mt-5">
        <Field
          label="Subject"
          name="subject"
          placeholder="Briefly describe your feedback"
        />
      </div>
      <div className="mt-5">
        <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:bg-white transition resize-none text-sm"
          placeholder="Tell us what happened, what worked well, or what we can do better…"
        />
      </div>
      <div className="mt-5 flex items-center gap-2">
        <input
          id="anon"
          type="checkbox"
          name="anonymous"
          value="Yes"
          className="h-4 w-4 rounded border-ink-200 text-brand-500 focus:ring-brand-400"
        />
        <label htmlFor="anon" className="text-sm text-ink-700">
          Submit this feedback anonymously
        </label>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-500 sm:max-w-xs leading-relaxed">
          We acknowledge feedback within 2 business days and respond with next steps where appropriate.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send Feedback"}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </form>
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
