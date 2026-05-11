"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

const ACCESS_KEY = "11ec50db-9a43-4274-bb89-2564be51cf36";
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB Web3Forms limit

export function JobApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const resume = formData.get("resume");
    if (resume instanceof File && resume.size > 0 && resume.size > MAX_FILE_SIZE) {
      setStatus("error");
      setErrorMessage("Resume file is larger than 10MB. Please attach a smaller file.");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
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
        <h3 className="h3 mt-6">Application submitted</h3>
        <p className="lede mt-4 text-pretty max-w-md mx-auto">
          Thanks for applying. We&rsquo;ll review your application and be in touch within a few business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-500 hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8 lg:p-10">
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="from_name" value="Anchor NDSS Careers" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="mt-5">
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mt-5">
        <Field
          label="Subject"
          name="subject"
          placeholder="e.g. Support Worker — Darwin"
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
          placeholder="Tell us about your experience, qualifications, and availability…"
        />
      </div>
      <div className="mt-5">
        <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
          Resume (PDF or DOCX, max 10MB)
        </label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="block w-full text-sm text-ink-700 file:mr-4 file:rounded-full file:border-0 file:bg-brand-500 file:text-white file:px-5 file:py-2.5 file:text-sm file:font-semibold file:hover:bg-brand-600 file:cursor-pointer cursor-pointer"
        />
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-ink-500 sm:max-w-xs leading-relaxed">
          By submitting, you consent to Anchor contacting you about your application.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Submitting..." : "Apply"}
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
