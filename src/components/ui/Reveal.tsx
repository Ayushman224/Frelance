import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  delay?: number;
  children: ReactNode;
}

/** Subtle fade-up on first scroll into view. Disabled automatically for reduced-motion users via CSS. */
export function Reveal({ as: Tag = "div", delay = 0, className, style, children, ...rest }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={delay ? ({ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties) : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
