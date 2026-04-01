import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition",
        "placeholder:text-[var(--muted-foreground)] hover:border-[rgba(240,237,232,0.16)] focus:border-[rgba(200,241,53,0.4)] focus:bg-[rgba(200,241,53,0.03)] focus:ring-4 focus:ring-[rgba(200,241,53,0.07)]",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";

export { Input };
