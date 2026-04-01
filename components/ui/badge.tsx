import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[rgba(200,241,53,0.18)] bg-[rgba(200,241,53,0.08)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(200,241,53,0.82)]",
        className,
      )}
      {...props}
    />
  );
}
