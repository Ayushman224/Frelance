import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { needOptions } from "@/data/services";
import { site, mailtoUrl, whatsappUrl } from "@/data/site";
import type { ContactFormErrors, ContactFormValues } from "@/types";
import { buildMailtoLink, emptyContactValues, submitContactRequest, validateContact } from "@/lib/contact";
import { useContactIntent, type BudgetCurrency } from "@/lib/contactIntent";
import { Link } from "@/lib/router";
import { Button } from "@/components/ui/Button";
import { SelectField, TextareaField, TextField } from "@/components/ui/FormField";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Spinner } from "@/components/ui/Spinner";
import { Container, Section } from "@/components/ui/Section";

const countries = ["United States", "Canada", "United Kingdom", "Australia", "United Arab Emirates", "New Zealand", "Ireland", "Singapore", "India"];
const budgetPlaceholders: Record<BudgetCurrency, string> = {
  USD: "e.g. around $800, or “not sure yet”",
  INR: "e.g. around ₹25,000, or “not sure yet”",
};
const fieldOrder: (keyof ContactFormValues)[] = ["name", "businessName", "email", "country", "website", "need", "budget", "message"];

const nextSteps = [
  "I read your request and reply personally",
  "We have a short call to understand your goals",
  "You receive a clear proposal, timeline and quote",
];

type Status = "idle" | "submitting" | "success" | "not-configured" | "error";

export function Contact() {
  const { prefill, nonce } = useContactIntent();
  const [values, setValues] = useState<ContactFormValues>(emptyContactValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const lastPrefillMessage = useRef("");
  const [currency, setCurrency] = useState<BudgetCurrency>("USD");

  useEffect(() => {
    if (!nonce || !prefill) return;
    const nextCurrency = prefill.currency;
    if (nextCurrency) setCurrency(nextCurrency);
    setValues((v) => {
      const canReplaceMessage = !v.message.trim() || v.message === lastPrefillMessage.current;
      const next = { ...v };
      if (prefill.need) next.need = prefill.need;
      if (prefill.budget && !v.budget.trim()) next.budget = prefill.budget;
      if (prefill.country && !v.country.trim()) next.country = prefill.country;
      if (prefill.message && canReplaceMessage) {
        next.message = prefill.message;
        lastPrefillMessage.current = prefill.message;
      }
      return next;
    });
    setStatus((s) => (s === "submitting" ? s : "idle"));
  }, [nonce, prefill]);

  const update = (field: keyof ContactFormValues) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) setErrors((prev) => ({ ...prev, [field]: validateContact(next)[field] }));
  };

  const blur = (field: keyof ContactFormValues) => () => {
    // Empty required fields are reported on submit, not while the visitor is still moving through the form.
    if (!values[field].trim() && !touched[field]) return;
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateContact(values)[field] }));
  };

  const fieldProps = (field: keyof ContactFormValues) => ({
    id: field,
    value: values[field],
    onChange: update(field),
    onBlur: blur(field),
    error: errors[field],
    disabled: status === "submitting",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    const found = validateContact(values);
    setErrors(found);
    setTouched(Object.fromEntries(fieldOrder.map((f) => [f, true])));
    const firstInvalid = fieldOrder.find((f) => found[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setServerError("");
    const result = await submitContactRequest(values);
    setStatus(result.status);
    if (result.status === "error") setServerError(result.message);
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const reset = () => {
    setValues(emptyContactValues);
    setErrors({});
    setTouched({});
    setStatus("idle");
    lastPrefillMessage.current = "";
  };

  return (
    <Section id="contact" tone="muted" labelledBy="contact-title">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lift lg:grid lg:grid-cols-[0.9fr_1.3fr]">
          <Reveal className="relative overflow-hidden bg-ink-950 p-8 text-slate-400 sm:p-10 lg:p-12">
            <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
            <div className="relative">
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-brand-300 uppercase">
                <span className="h-px w-6 bg-brand-300/60" aria-hidden="true" />
                Free consultation
              </p>
              <h2 id="contact-title" className="text-3xl font-bold text-balance text-white sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-4 text-lg leading-relaxed">Tell me what you're trying to build, improve or automate.</p>

              <h3 className="mt-10 font-sans text-sm font-semibold text-white">What happens next</h3>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-sm">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-white/15 font-mono text-[11px] text-slate-300">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm font-semibold text-white">Or email me directly</p>
                <a href={mailtoUrl} className="mt-2 inline-flex items-center gap-2 text-base font-medium text-brand-300 hover:text-brand-200">
                  <Icon name="mail" className="size-4" />
                  {site.email}
                </a>
                <div className="mt-6">
                  <Button href={whatsappUrl} external variant="dark-outline" iconLeft="whatsapp" aria-label="Chat on WhatsApp (opens in a new tab)">
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="p-6 sm:p-10 lg:p-12">
            {status === "success" ? (
              <div ref={statusRef} tabIndex={-1} role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
                  <Icon name="check" className="size-7" strokeWidth={2.5} />
                </span>
                <h3 className="mt-6 text-2xl font-bold">Thanks — your request has been sent.</h3>
                <p className="mt-3 max-w-md text-slate-600">
                  I'll review the details and reply to <strong className="text-slate-900">{values.email || "your email"}</strong>, usually
                  within one business day.
                </p>
                <Button variant="outline" className="mt-8" onClick={reset}>
                  Send another request
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-note" className="grid gap-x-5 gap-y-2 sm:grid-cols-2">
                <TextField {...fieldProps("name")} label="Name" autoComplete="name" placeholder="Jane Cooper" />
                <TextField {...fieldProps("businessName")} label="Business Name" autoComplete="organization" placeholder="Cooper Plumbing" />
                <TextField {...fieldProps("email")} label="Email" type="email" autoComplete="email" inputMode="email" placeholder="jane@business.com" />
                <TextField {...fieldProps("country")} label="Country" autoComplete="country-name" list="country-options" placeholder="United States" />
                <datalist id="country-options">
                  {countries.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
                <TextField {...fieldProps("website")} label="Website" optional type="text" inputMode="url" autoComplete="url" placeholder="yourbusiness.com" />
                <SelectField {...fieldProps("need")} label="What do you need?">
                  <option value="" disabled>
                    Select an option
                  </option>
                  {needOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </SelectField>
                <TextField
                  {...fieldProps("budget")}
                  label="Budget"
                  optional
                  wrapperClassName="sm:col-span-2"
                  placeholder={budgetPlaceholders[currency]}
                  autoComplete="off"
                  maxLength={80}
                />
                <TextareaField
                  {...fieldProps("message")}
                  label="Message"
                  wrapperClassName="sm:col-span-2"
                  placeholder="Tell me about your business, what you'd like to build or improve, and any deadlines."
                  maxLength={3000}
                />

                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="company_url">Leave this field empty</label>
                  <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>

                {(status === "not-configured" || status === "error") && (
                  <div
                    ref={statusRef}
                    tabIndex={-1}
                    role="alert"
                    className={`mb-2 rounded-2xl border p-5 text-sm sm:col-span-2 ${
                      status === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-amber-200 bg-amber-50 text-amber-900"
                    }`}
                  >
                    <p className="flex items-start gap-2 font-semibold">
                      <Icon name="alert" className="mt-0.5 size-4 shrink-0" />
                      {status === "error" ? "Your request couldn't be sent." : "Online form delivery isn't connected yet — your message has not been sent."}
                    </p>
                    <p className="mt-1.5 pl-6 leading-relaxed">
                      {status === "error"
                        ? serverError
                        : "Please send the same details from your own email app with one click, or message me on WhatsApp."}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 pl-6">
                      <Button href={buildMailtoLink(values)} size="sm" iconLeft="mail">
                        Send via email
                      </Button>
                      <Button href={whatsappUrl} external size="sm" variant="outline" iconLeft="whatsapp">
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                )}

                <div className="mt-2 flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p id="form-note" className="text-xs leading-relaxed text-slate-500">
                    No obligation. Your details are only used to reply to your enquiry. See the{" "}
                    <Link to="/privacy" className="underline underline-offset-2 hover:text-slate-800">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <Button type="submit" size="lg" disabled={status === "submitting"} icon={status === "submitting" ? undefined : "send"}>
                    {status === "submitting" ? (
                      <>
                        <Spinner />
                        Sending…
                      </>
                    ) : (
                      "Send Project Request"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
