import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "ghost" | "outline";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_18px_40px_rgba(200,241,53,0.18)] hover:bg-[#d6ff45]",
  secondary:
    "bg-[rgba(200,241,53,0.08)] text-[var(--foreground)] ring-1 ring-[rgba(200,241,53,0.18)] hover:bg-[rgba(200,241,53,0.14)]",
  ghost:
    "bg-transparent text-[var(--muted-foreground)] hover:bg-white/6 hover:text-[var(--foreground)]",
  outline:
    "bg-[rgba(255,255,255,0.02)] text-[var(--foreground)] ring-1 ring-[var(--border)] hover:bg-white/6 hover:ring-[rgba(240,237,232,0.2)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-6 text-[15px]",
  icon: "size-10",
};

export function buttonStyles({
  className,
  variant = "default",
  size = "default",
}: {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 disabled:pointer-events-none disabled:opacity-60",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(200,241,53,0.35)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", type = "button", ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonStyles({ className, variant, size })}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
