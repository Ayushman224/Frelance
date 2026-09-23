import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

const controlBase =
  "block w-full rounded-xl border bg-white px-4 text-[0.95rem] text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 focus:outline-none disabled:bg-slate-50";

interface FieldShellProps {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}

function FieldShell({ id, label, optional, error, hint, className, children }: FieldShellProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-slate-800">
        {label}
        {optional && <span className="text-xs font-normal text-slate-400">Optional</span>}
      </label>
      {children}
      {/* Fixed-height slot so showing an error never shifts the layout (e.g. moving the submit button mid-click). */}
      <div className="mt-1 min-h-5">
        {error ? (
          <p id={`${id}-error`} className="flex items-center gap-1.5 text-[13px] leading-5 text-red-600">
            <Icon name="alert" className="size-3.5 shrink-0" />
            {error}
          </p>
        ) : hint ? (
          <p id={`${id}-hint`} className="text-xs leading-5 text-slate-500">
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function describedBy(id: string, error?: string, hint?: string) {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}

type Common = { id: string; label: string; optional?: boolean; error?: string; hint?: string; wrapperClassName?: string };

export function TextField({ id, label, optional, error, hint, wrapperClassName, className, ...rest }: Common & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell id={id} label={label} optional={optional} error={error} hint={hint} className={wrapperClassName}>
      <input
        id={id}
        name={id}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy(id, error, hint)}
        required={!optional}
        className={cn(controlBase, "h-12", error ? "border-red-400" : "border-slate-300", className)}
        {...rest}
      />
    </FieldShell>
  );
}

export function SelectField({
  id,
  label,
  optional,
  error,
  hint,
  wrapperClassName,
  className,
  children,
  ...rest
}: Common & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldShell id={id} label={label} optional={optional} error={error} hint={hint} className={wrapperClassName}>
      <div className="relative">
        <select
          id={id}
          name={id}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy(id, error, hint)}
          required={!optional}
          className={cn(controlBase, "h-12 appearance-none pr-10", error ? "border-red-400" : "border-slate-300", className)}
          {...rest}
        >
          {children}
        </select>
        <Icon name="chevron-down" className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-slate-400" />
      </div>
    </FieldShell>
  );
}

export function TextareaField({
  id,
  label,
  optional,
  error,
  hint,
  wrapperClassName,
  className,
  ...rest
}: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell id={id} label={label} optional={optional} error={error} hint={hint} className={wrapperClassName}>
      <textarea
        id={id}
        name={id}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy(id, error, hint)}
        required={!optional}
        className={cn(controlBase, "min-h-36 resize-y py-3", error ? "border-red-400" : "border-slate-300", className)}
        {...rest}
      />
    </FieldShell>
  );
}
