import { needOptions } from "@/data/services";
import { site } from "@/data/site";
import type { ContactFormErrors, ContactFormValues } from "@/types";

export const emptyContactValues: ContactFormValues = {
  name: "",
  businessName: "",
  email: "",
  country: "",
  website: "",
  need: "",
  budget: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;

export function validateContact(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!values.businessName.trim()) errors.businessName = "Please enter your business name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.country.trim()) errors.country = "Please enter your country.";
  if (values.website.trim() && !URL_RE.test(values.website.trim()))
    errors.website = "Please enter a valid website address, e.g. example.com.";
  if (!values.need) errors.need = "Please choose what you need.";
  if (values.message.trim().length < 20)
    errors.message = "Please add a few more details (at least 20 characters).";
  else if (values.message.length > 3000) errors.message = "Please keep your message under 3000 characters.";
  return errors;
}

export type SubmitResult =
  | { status: "success" }
  | { status: "not-configured" }
  | { status: "error"; message: string };

export const isContactConfigured = Boolean(import.meta.env.VITE_CONTACT_ENDPOINT);

function needLabel(need: ContactFormValues["need"]) {
  return needOptions.find((o) => o.value === need)?.label ?? need;
}

/**
 * Integration point for the contact form.
 * Set VITE_CONTACT_ENDPOINT (Formspree, Web3Forms, Getform, or your own API route) to enable real delivery.
 * Until then this returns "not-configured" and the UI tells the visitor honestly, offering email instead.
 */
export async function submitContactRequest(values: ContactFormValues): Promise<SubmitResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 500));
    return { status: "not-configured" };
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...values,
        needLabel: needLabel(values.need),
        subject: `New project request from ${values.name} (${values.businessName})`,
        source: window.location.href,
        ...(import.meta.env.VITE_CONTACT_ACCESS_KEY ? { access_key: import.meta.env.VITE_CONTACT_ACCESS_KEY } : {}),
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      return { status: "error", message: `The server responded with an error (${res.status}). Please try again or email me directly.` };
    }
    return { status: "success" };
  } catch (err) {
    const aborted = err instanceof DOMException && err.name === "AbortError";
    return {
      status: "error",
      message: aborted
        ? "The request timed out. Please check your connection and try again."
        : "Couldn't send your request. Please check your connection or email me directly.",
    };
  } finally {
    window.clearTimeout(timeout);
  }
}

/** Builds a pre-filled mailto: link so the visitor can send the same details from their own email app. */
export function buildMailtoLink(values: ContactFormValues) {
  const details: [string, string][] = [
    ["Name", values.name],
    ["Business", values.businessName],
    ["Email", values.email],
    ["Country", values.country],
    ["Website", values.website],
    ["Need", values.need ? needLabel(values.need) : ""],
    ["Budget", values.budget],
  ];
  const lines = [...details.filter(([, v]) => v.trim()).map(([k, v]) => `${k}: ${v}`), "", values.message];
  const subject = `Project request — ${values.businessName || values.name || "New enquiry"}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
