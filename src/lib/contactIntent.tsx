import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { navigate } from "@/lib/router";
import type { ServiceNeed } from "@/types";

export type BudgetCurrency = "USD" | "INR";

export interface ContactPrefill {
  need?: ServiceNeed;
  message?: string;
  /** Switches the budget dropdown to this currency's ranges. */
  currency?: BudgetCurrency;
  /** Must match one of the budget options for the chosen currency. */
  budget?: string;
  /** Applied only if the visitor hasn't typed a country yet. */
  country?: string;
}

interface ContactIntentValue {
  prefill: ContactPrefill | null;
  /** Changes on every request so the form can re-apply the same prefill twice. */
  nonce: number;
  requestContact: (prefill?: ContactPrefill) => void;
}

const ContactIntentContext = createContext<ContactIntentValue | null>(null);

export function ContactIntentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ prefill: ContactPrefill | null; nonce: number }>({ prefill: null, nonce: 0 });

  const requestContact = useCallback((prefill?: ContactPrefill) => {
    setState((s) => ({ prefill: prefill ?? null, nonce: s.nonce + 1 }));
    navigate("/#contact");
  }, []);

  const value = useMemo(() => ({ ...state, requestContact }), [state, requestContact]);
  return <ContactIntentContext.Provider value={value}>{children}</ContactIntentContext.Provider>;
}

export function useContactIntent() {
  const ctx = useContext(ContactIntentContext);
  if (!ctx) throw new Error("useContactIntent must be used within ContactIntentProvider");
  return ctx;
}
