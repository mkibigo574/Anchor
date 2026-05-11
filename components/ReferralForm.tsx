"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2
} from "lucide-react";
import { company } from "@/lib/content";

const ACCESS_KEY = "f210c396-a269-471a-b254-4728a994fda6";

const SUPPORT_OPTIONS = [
  "Assist Personal Activities",
  "Group / Centre Activities",
  "Accommodation",
  "Household Tasks",
  "Innovative Community Participation",
  "Participate Community",
  "Plan Management",
  "Allied Health",
  "Community Nursing Care"
];

const STATES = ["ACT", "NT", "NSW", "QLD", "SA", "TAS", "VIC", "WA"];

const FREQUENCY = [
  "1–5 hours",
  "6–10 hours",
  "11–15 hours",
  "More than 16 hours",
  "Unsure at this stage"
];

const FUNDS = ["NDIA Managed", "Self Managed", "Plan Managed"];

const ROLES = ["Support Coordinator", "Parent or Guardian", "Other"];

const GENDERS = ["Male", "Female", "Prefer not to say"];

const STEP_LABELS = ["Participant", "NDIS Plan", "Referrer"];

type FormState = {
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  dob: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  ndisNumber: string;
  disability: string;
  frequency: string;
  planStart: string;
  planEnd: string;
  budget: string;
  fundsMgmt: string;
  supports: string[];
  notes: string;
  contactName: string;
  contactRole: string;
  contactNumber: string;
  contactEmail: string;
  bestTime: string;
  consent: boolean;
};

const initial: FormState = {
  fullName: "",
  gender: "",
  phone: "",
  email: "",
  dob: "",
  street: "",
  suburb: "",
  state: "",
  postcode: "",
  ndisNumber: "",
  disability: "",
  frequency: "",
  planStart: "",
  planEnd: "",
  budget: "",
  fundsMgmt: "",
  supports: [],
  notes: "",
  contactName: "",
  contactRole: "",
  contactNumber: "",
  contactEmail: "",
  bestTime: "",
  consent: false
};

export function ReferralForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleSupport = (s: string) =>
    setData((d) => ({
      ...d,
      supports: d.supports.includes(s)
        ? d.supports.filter((x) => x !== s)
        : [...d.supports, s]
    }));

  const canAdvance = () => {
    if (step === 1) {
      return Boolean(
        data.fullName.trim() &&
          data.gender &&
          data.phone.trim() &&
          data.email.trim() &&
          data.dob &&
          data.street.trim() &&
          data.suburb.trim() &&
          data.state &&
          data.postcode.trim()
      );
    }
    if (step === 2) {
      return Boolean(
        data.ndisNumber.trim() &&
          data.frequency &&
          data.planStart &&
          data.planEnd &&
          data.fundsMgmt
      );
    }
    return Boolean(
      data.contactName.trim() &&
        data.contactRole &&
        data.contactNumber.trim() &&
        data.contactEmail.trim() &&
        data.consent
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    const summary = [
      "PARTICIPANT DETAILS",
      `Full Name: ${data.fullName}`,
      `Gender: ${data.gender}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Date of Birth: ${data.dob}`,
      `Address: ${data.street}, ${data.suburb} ${data.state} ${data.postcode}`,
      "",
      "NDIS PLAN",
      `NDIS Number: ${data.ndisNumber}`,
      `Disability: ${data.disability || "Not specified"}`,
      `Frequency of Support: ${data.frequency}`,
      `Plan Dates: ${data.planStart} to ${data.planEnd}`,
      `Total Budget: ${data.budget || "Not specified"}`,
      `Funds Management: ${data.fundsMgmt}`,
      `Supports Needed: ${data.supports.join(", ") || "Not specified"}`,
      `Additional Notes: ${data.notes || "—"}`,
      "",
      "REFERRER",
      `Name: ${data.contactName}`,
      `Role: ${data.contactRole}`,
      `Phone: ${data.contactNumber}`,
      `Email: ${data.contactEmail}`,
      `Best Time to Contact: ${data.bestTime || "Anytime"}`
    ].join("\n");

    const payload = {
      access_key: ACCESS_KEY,
      subject: `Participant Referral – ${data.fullName}`,
      from_name: "Anchor NDSS Referral Form",
      name: data.contactName,
      email: data.contactEmail,
      phone: data.contactNumber,
      participant_name: data.fullName,
      participant_phone: data.phone,
      participant_email: data.email,
      participant_gender: data.gender,
      participant_dob: data.dob,
      participant_address: `${data.street}, ${data.suburb} ${data.state} ${data.postcode}`,
      ndis_number: data.ndisNumber,
      disability: data.disability,
      frequency: data.frequency,
      plan_start: data.planStart,
      plan_end: data.planEnd,
      budget: data.budget,
      funds_management: data.fundsMgmt,
      supports_needed: data.supports.join(", "),
      additional_notes: data.notes,
      referrer_role: data.contactRole,
      best_time_to_contact: data.bestTime,
      message: summary
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card p-8 sm:p-10 lg:p-12 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 text-white shadow-soft">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="h3 mt-6">Referral sent</h3>
        <p className="lede mt-4 text-pretty max-w-md mx-auto">
          Thank you for the referral. Our intake team will respond within one
          business day.
        </p>
        <p className="mt-6 text-sm text-ink-500">
          To share a copy of the NDIS plan, please send it separately to{" "}
          <a
            className="font-semibold text-brand-500 hover:underline"
            href={`mailto:${company.email}`}
          >
            {company.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8 lg:p-10">
      <Steps current={step} />

      {step === 1 && (
        <div className="mt-8 space-y-5">
          <Field
            label="Full Name"
            required
            value={data.fullName}
            onChange={(v) => set("fullName", v)}
          />
          <Radio
            label="Gender"
            required
            options={GENDERS}
            value={data.gender}
            onChange={(v) => set("gender", v)}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Phone Number"
              required
              type="tel"
              value={data.phone}
              onChange={(v) => set("phone", v)}
            />
            <Field
              label="Email"
              required
              type="email"
              value={data.email}
              onChange={(v) => set("email", v)}
            />
          </div>
          <Field
            label="Date of Birth"
            required
            type="date"
            value={data.dob}
            onChange={(v) => set("dob", v)}
          />
          <Field
            label="Street Address"
            required
            value={data.street}
            onChange={(v) => set("street", v)}
          />
          <div className="grid gap-5 sm:grid-cols-3">
            <Field
              label="Suburb"
              required
              value={data.suburb}
              onChange={(v) => set("suburb", v)}
            />
            <Select
              label="State"
              required
              options={STATES}
              value={data.state}
              onChange={(v) => set("state", v)}
            />
            <Field
              label="Postcode"
              required
              value={data.postcode}
              onChange={(v) => set("postcode", v)}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-8 space-y-5">
          <Field
            label="NDIS Number"
            required
            value={data.ndisNumber}
            onChange={(v) => set("ndisNumber", v)}
          />
          <Field
            label="Disability"
            placeholder="If any"
            value={data.disability}
            onChange={(v) => set("disability", v)}
          />
          <Select
            label="Frequency of Support per Week"
            required
            options={FREQUENCY}
            value={data.frequency}
            onChange={(v) => set("frequency", v)}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Plan Start Date"
              required
              type="date"
              value={data.planStart}
              onChange={(v) => set("planStart", v)}
            />
            <Field
              label="Plan End Date"
              required
              type="date"
              value={data.planEnd}
              onChange={(v) => set("planEnd", v)}
            />
          </div>
          <Field
            label="Total NDIS Budget"
            placeholder="Optional"
            value={data.budget}
            onChange={(v) => set("budget", v)}
          />
          <Select
            label="Funds Management"
            required
            options={FUNDS}
            value={data.fundsMgmt}
            onChange={(v) => set("fundsMgmt", v)}
          />
          <CheckboxGroup
            label="Support Needed"
            options={SUPPORT_OPTIONS}
            values={data.supports}
            onToggle={toggleSupport}
          />
          <Textarea
            label="Additional Information"
            placeholder="Anything else we should know about the participant or the plan…"
            value={data.notes}
            onChange={(v) => set("notes", v)}
          />
          <p className="text-xs text-ink-500 leading-relaxed">
            To share a copy of the NDIS plan, please attach it to the email
            that opens after submitting, or send it separately to{" "}
            <a
              className="font-semibold text-brand-500 hover:underline"
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>
            .
          </p>
        </div>
      )}

      {step === 3 && (
        <div className="mt-8 space-y-5">
          <Field
            label="Contact Name"
            required
            value={data.contactName}
            onChange={(v) => set("contactName", v)}
          />
          <Radio
            label="Contact Role"
            required
            options={ROLES}
            value={data.contactRole}
            onChange={(v) => set("contactRole", v)}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Contact Number"
              required
              type="tel"
              value={data.contactNumber}
              onChange={(v) => set("contactNumber", v)}
            />
            <Field
              label="Email Address"
              required
              type="email"
              value={data.contactEmail}
              onChange={(v) => set("contactEmail", v)}
            />
          </div>
          <Field
            label="Best Time to Contact"
            placeholder="Optional"
            value={data.bestTime}
            onChange={(v) => set("bestTime", v)}
          />
          <label className="flex items-start gap-3 mt-2">
            <input
              type="checkbox"
              checked={data.consent}
              onChange={(e) => set("consent", e.target.checked)}
              className="h-4 w-4 mt-0.5 rounded border-ink-200 text-brand-500 focus:ring-brand-400"
            />
            <span className="text-sm text-ink-700">
              I confirm I have the participant&rsquo;s permission to share
              these details and agree to Anchor&rsquo;s privacy practices.
            </span>
          </label>
        </div>
      )}

      {errorMessage && (
        <div className="mt-6 flex items-start gap-2 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm font-semibold text-ink-700 hover:bg-cream-100 transition w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}

        {step < 3 ? (
          <button
            type="button"
            disabled={!canAdvance()}
            onClick={() => setStep((s) => s + 1)}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canAdvance() || submitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          >
            {submitting ? "Sending..." : "Send Referral"}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}

function Steps({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-3">
      {STEP_LABELS.map((label, i) => {
        const num = i + 1;
        const active = num === current;
        const done = num < current;
        return (
          <div key={label} className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-3 min-w-0">
              <span
                className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold flex-shrink-0 transition ${
                  done
                    ? "bg-brand-500 text-white"
                    : active
                    ? "bg-brand-500 text-white shadow-soft"
                    : "bg-cream-100 text-ink-500 ring-1 ring-ink-100"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : num}
              </span>
              <span
                className={`hidden sm:inline text-xs uppercase tracking-[0.16em] font-bold truncate ${
                  active ? "text-ink-900" : "text-ink-500"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <span
                className={`h-0.5 flex-1 rounded-full transition ${
                  done ? "bg-brand-500" : "bg-ink-100"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Label({
  children,
  required = false
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block text-xs uppercase tracking-[0.16em] text-ink-500 font-bold mb-2">
      {children}
      {required && <span className="text-brand-500 ml-1">*</span>}
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:bg-white transition text-sm"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  required = false
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <select
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 focus:outline-none focus:border-brand-500 focus:bg-white transition text-sm"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Radio({
  label,
  options,
  value,
  onChange,
  required = false
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition border ${
                active
                  ? "bg-brand-500 text-white border-brand-500 shadow-soft"
                  : "bg-cream-100 text-ink-700 border-ink-100 hover:border-brand-200"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CheckboxGroup({
  label,
  options,
  values,
  onToggle
}: {
  label: string;
  options: string[];
  values: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const checked = values.includes(o);
          return (
            <button
              key={o}
              type="button"
              onClick={() => onToggle(o)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition border ${
                checked
                  ? "bg-brand-50 border-brand-500 text-ink-900"
                  : "bg-cream-100 border-ink-100 text-ink-700 hover:border-brand-200"
              }`}
            >
              <span
                className={`grid h-4 w-4 place-items-center rounded border flex-shrink-0 transition ${
                  checked
                    ? "bg-brand-500 border-brand-500 text-white"
                    : "bg-white border-ink-200"
                }`}
              >
                {checked && <Check className="h-3 w-3" />}
              </span>
              <span className="leading-tight">{o}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl bg-cream-100 border border-ink-100 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:outline-none focus:border-brand-500 focus:bg-white transition resize-none text-sm"
      />
    </div>
  );
}
