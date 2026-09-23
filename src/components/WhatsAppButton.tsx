import { whatsappUrl } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

/** Floating WhatsApp shortcut. Sits below the mobile menu (z-40) and appears once the visitor starts scrolling. */
export function WhatsAppButton() {
  const visible = useScrolled(400);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp (opens in a new tab)"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "group fixed right-4 bottom-4 z-30 flex items-center gap-2.5 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_10px_30px_-8px_rgb(37_211_102/0.7)] transition-all duration-300 hover:bg-[#1ebe5b] sm:right-6 sm:bottom-6 sm:py-3 sm:pr-5 sm:pl-4",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 [animation-duration:2.5s] group-hover:hidden" aria-hidden="true" />
      <Icon name="whatsapp" className="relative size-6" />
      <span className="relative hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
