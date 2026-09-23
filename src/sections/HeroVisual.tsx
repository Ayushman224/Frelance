import { useContactIntent } from "@/lib/contactIntent";
import { navigate } from "@/lib/router";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Icon, type IconName } from "@/components/ui/Icon";

const leads: { service: string; detail: string; icon: IconName; fresh?: boolean }[] = [
  { service: "Quote request", detail: "Roof inspection · via website form", icon: "file", fresh: true },
  { service: "Booking request", detail: "Thursday morning · via AI assistant", icon: "calendar" },
  { service: "Question answered", detail: "Service area · handled automatically", icon: "chat" },
];

export function HeroVisual() {
  const { requestContact } = useContactIntent();

  const assistantOptions: { label: string; icon: IconName; action: () => void }[] = [
    { label: "Get a quote", icon: "file", action: () => requestContact({ need: "new-website" }) },
    { label: "Ask a question", icon: "message", action: () => navigate("/#faq") },
    { label: "Book a call", icon: "calendar", action: () => requestContact({ message: "I'd like to book a call to discuss my project." }) },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand-600/20 blur-3xl" aria-hidden="true" />

      <figure aria-label="Illustration of a modern business website with an enquiry dashboard">
        <BrowserFrame url="yourbusiness.com" tone="dark">
          <div className="grid gap-4 p-4 sm:grid-cols-[1.35fr_1fr] sm:p-5" aria-hidden="true">
            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-brand-50 p-4 text-slate-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="size-4 rounded bg-brand-600" />
                  <span className="text-[10px] font-bold">Your Business</span>
                </div>
                <div className="flex gap-2 text-[8px] text-slate-500">
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>
              <p className="mt-5 font-display text-[15px] leading-tight font-bold">
                Trusted local service,
                <br />
                booked in minutes.
              </p>
              <p className="mt-2 text-[9px] leading-snug text-slate-500">Clear services, quick quotes and easy contact on any device.</p>
              <div className="mt-3 flex gap-1.5">
                <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[8px] font-semibold text-white">Request a Quote</span>
                <span className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[8px] font-semibold">Call Now</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-1.5">
                {["Installation", "Repairs", "Maintenance"].map((s) => (
                  <div key={s} className="rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-200/70">
                    <span className="mb-1.5 block size-3 rounded bg-brand-100" />
                    <span className="block text-[8px] font-semibold">{s}</span>
                    <span className="mt-1 block h-1 w-3/4 rounded bg-slate-200" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-300">Enquiries</span>
                  <span className="flex items-center gap-1 text-[9px] text-emerald-400">
                    <span className="size-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>
                <div className="mt-3 flex h-14 items-end gap-1">
                  {[40, 65, 50, 80, 60, 90, 72].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 origin-bottom animate-bar rounded-sm bg-gradient-to-t from-brand-600 to-brand-400"
                      style={{ height: `${h}%`, animationDelay: `${i * 180}ms` }}
                    />
                  ))}
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {leads.map((l) => (
                  <li key={l.service} className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-brand-500/15 text-brand-300">
                      <Icon name={l.icon} className="size-3.5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-200">
                        {l.service}
                        {l.fresh && <span className="rounded bg-emerald-500/15 px-1 text-[8px] text-emerald-300">New</span>}
                      </span>
                      <span className="block truncate text-[9px] text-slate-500">{l.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </BrowserFrame>
      </figure>

      <div className="absolute -top-4 right-4 hidden animate-float items-center gap-2 rounded-full border border-white/10 bg-ink-800/95 px-3 py-1.5 text-[11px] font-medium text-slate-200 shadow-lift backdrop-blur sm:flex" aria-hidden="true">
        <Icon name="sheet" className="size-3.5 text-emerald-400" />
        Lead saved to Google Sheets
        <Icon name="check" className="size-3.5 text-emerald-400" />
      </div>

      <aside
        aria-label="Website assistant preview"
        className="relative mx-auto -mt-8 w-[min(100%,18rem)] rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 shadow-lift sm:absolute sm:-bottom-10 sm:-left-8 sm:mt-0 lg:-left-10"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-brand-600 text-white">
            <Icon name="bot" className="size-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Website assistant</p>
            <p className="text-[11px] text-slate-500">Preview</p>
          </div>
        </div>
        <p className="mt-3 rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2 text-sm">Hi! How can I help you today?</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {assistantOptions.map((o) => (
            <button
              key={o.label}
              type="button"
              onClick={o.action}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-100"
            >
              <Icon name={o.icon} className="size-3.5" />
              {o.label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
