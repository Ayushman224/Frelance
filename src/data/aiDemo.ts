/**
 * Scripted conversation for the AI agent demo. This is NOT connected to an AI backend.
 * Each step shows a bot message, then offers preset visitor replies that advance the script.
 */
export type LeadField = "name" | "service" | "property" | "zip" | "phone";

export interface ChatReply {
  label: string;
  /** Lead fields captured when this reply is chosen */
  captures?: Partial<Record<LeadField, string>>;
}

export interface ChatStep {
  bot: string;
  replies: ChatReply[];
}

export const chatScript: ChatStep[] = [
  {
    bot: "Hi! I'm the Austin GreenScape assistant. How can I help you today?",
    replies: [{ label: "Do you provide lawn mowing?", captures: { service: "Lawn mowing" } }],
  },
  {
    bot: "Yes. We provide residential lawn mowing throughout Austin. Would you like to request an estimate?",
    replies: [{ label: "Yes." }],
  },
  {
    bot: "Great. What type of property do you have?",
    replies: [
      { label: "Residential", captures: { property: "Residential" } },
      { label: "Commercial", captures: { property: "Commercial" } },
    ],
  },
  {
    bot: "What ZIP code should we service?",
    replies: [{ label: "78704", captures: { zip: "78704" } }],
  },
  {
    bot: "Thanks! What's your name and the best number to reach you?",
    replies: [{ label: "John Smith, +1 XXX XXX XXXX", captures: { name: "John Smith", phone: "+1 XXX XXX XXXX" } }],
  },
  {
    bot: "Perfect, John. Your estimate request has been sent to the team — they'll be in touch shortly.",
    replies: [],
  },
];

export const leadFieldLabels: { key: LeadField; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "service", label: "Service" },
  { key: "property", label: "Property" },
  { key: "zip", label: "ZIP" },
  { key: "phone", label: "Phone" },
];
