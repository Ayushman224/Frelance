import { useCallback, useEffect, useRef, useState } from "react";
import { chatScript, leadFieldLabels, type ChatReply, type LeadField } from "@/data/aiDemo";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

interface Message {
  id: number;
  from: "bot" | "visitor";
  text: string;
}

const TYPING_MS = 850;

export function useAgentDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(-1);
  const [typing, setTyping] = useState(false);
  const [lead, setLead] = useState<Partial<Record<LeadField, string>>>({});
  const timers = useRef<number[]>([]);
  const idRef = useRef(0);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const botSay = useCallback((index: number) => {
    setTyping(true);
    timers.current.push(
      window.setTimeout(() => {
        setTyping(false);
        setMessages((m) => [...m, { id: ++idRef.current, from: "bot", text: chatScript[index].bot }]);
        setStep(index);
      }, TYPING_MS),
    );
  }, []);

  const start = useCallback(() => {
    clearTimers();
    setMessages([]);
    setLead({});
    setStep(-1);
    botSay(0);
  }, [botSay]);

  const choose = (reply: ChatReply) => {
    if (typing || step < 0 || step >= chatScript.length - 1) return;
    setMessages((m) => [...m, { id: ++idRef.current, from: "visitor", text: reply.label }]);
    if (reply.captures) setLead((l) => ({ ...l, ...reply.captures }));
    botSay(step + 1);
  };

  useEffect(() => clearTimers, []);

  const current = step >= 0 ? chatScript[step] : null;
  const complete = step === chatScript.length - 1;
  return { messages, typing, lead, replies: typing ? [] : (current?.replies ?? []), complete, started: step >= 0 || typing, start, choose };
}

type DemoState = ReturnType<typeof useAgentDemo>;

export function AgentChat({ demo }: { demo: DemoState }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const logRef = useRef<HTMLDivElement>(null);
  const { messages, typing, replies, complete, started, start, choose } = demo;

  useEffect(() => {
    if (inView && !started) start();
  }, [inView, started, start]);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages.length, typing]);

  return (
    <div ref={ref} className="flex h-[34rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-2xl">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="relative flex size-10 items-center justify-center rounded-full bg-emerald-600 text-white">
            <Icon name="leaf" className="size-5" />
            <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-ink-900 bg-emerald-400" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Austin GreenScape Assistant</p>
            <p className="text-xs text-slate-400">Fictional business · demo</p>
          </div>
        </div>
        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-amber-300 uppercase">
          Demo
        </span>
      </div>

      <div ref={logRef} role="log" aria-live="polite" aria-label="Demo conversation" className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
        {messages.map((m) => (
          <div key={m.id} className={cn("flex", m.from === "visitor" ? "justify-end" : "justify-start")}>
            <p
              className={cn(
                "max-w-[85%] px-4 py-2.5 text-sm leading-relaxed",
                m.from === "visitor"
                  ? "rounded-2xl rounded-br-md bg-brand-600 text-white"
                  : "rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] text-slate-200",
              )}
            >
              <span className="sr-only">{m.from === "visitor" ? "Visitor: " : "Assistant: "}</span>
              {m.text}
            </p>
          </div>
        ))}
        {typing && (
          <div className="flex" aria-label="Assistant is typing">
            <span className="flex gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="size-1.5 animate-bounce rounded-full bg-slate-400" style={{ animationDelay: `${i * 140}ms` }} />
              ))}
            </span>
          </div>
        )}
      </div>

      <div className="border-t border-white/10 bg-white/[0.02] px-5 py-4">
        {replies.length > 0 ? (
          <div className="flex flex-wrap justify-end gap-2" role="group" aria-label="Choose a reply">
            {replies.map((r) => (
              <button
                key={r.label}
                type="button"
                onClick={() => choose(r)}
                className="rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-200 transition-colors hover:border-brand-300 hover:bg-brand-500/20 hover:text-white"
              >
                {r.label}
              </button>
            ))}
          </div>
        ) : complete ? (
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-400">Conversation complete.</p>
            <button
              type="button"
              onClick={start}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <Icon name="refresh" className="size-4" />
              Replay demo
            </button>
          </div>
        ) : !started ? (
          <button
            type="button"
            onClick={start}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-500"
          >
            <Icon name="play" className="size-4" />
            Start demo
          </button>
        ) : (
          <p className="h-9 text-sm leading-9 text-slate-500">Assistant is replying…</p>
        )}
        <p className="mt-3 text-center text-[11px] text-slate-500">
          Scripted demo with preset replies — not connected to a live AI.
        </p>
      </div>
    </div>
  );
}

const destinations: { icon: IconName; label: string }[] = [
  { icon: "mail", label: "Email alert" },
  { icon: "sheet", label: "Google Sheets" },
  { icon: "database", label: "CRM" },
];

export function LeadSummary({ demo }: { demo: DemoState }) {
  const { lead, complete } = demo;
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6" aria-live="polite">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-emerald-300 uppercase">
          <span className={cn("size-2 rounded-full", complete ? "bg-emerald-400" : "animate-pulse-soft bg-amber-400")} />
          New lead
        </p>
        <span className="text-xs text-slate-500">{complete ? "Sent to business owner" : "Collecting details…"}</span>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
        {leadFieldLabels.map((f) => (
          <div key={f.key} className={f.key === "phone" ? "col-span-2 sm:col-span-1" : undefined}>
            <dt className="text-xs text-slate-500">{f.label}</dt>
            <dd
              className={cn(
                "mt-1 text-sm font-semibold transition-colors duration-500",
                lead[f.key] ? "text-white" : "text-slate-600",
              )}
            >
              {lead[f.key] ?? "—"}
            </dd>
          </div>
        ))}
      </dl>
      <div className={cn("mt-6 flex flex-wrap gap-2 transition-opacity duration-500", complete ? "opacity-100" : "opacity-40")}>
        {destinations.map((c) => (
          <span key={c.label} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300 ring-1 ring-white/10">
            <Icon name={c.icon} className="size-3.5 text-brand-300" />
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
}
