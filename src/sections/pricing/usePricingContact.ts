import { useCallback } from "react";
import { useContactIntent, type ContactPrefill } from "@/lib/contactIntent";

/** Sends visitors from the INR pricing page to the contact form with rupee budgets and India pre-filled. */
export function usePricingContact() {
  const { requestContact } = useContactIntent();
  return useCallback(
    (prefill: ContactPrefill = {}) => requestContact({ currency: "INR", country: "India", ...prefill }),
    [requestContact],
  );
}
