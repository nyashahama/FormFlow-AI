import Link from "next/link";
import { cn } from "@/lib/utils";

function LogoGlyph() {
  return (
    <div className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-[var(--primary)] shadow-[0_12px_32px_rgba(200,241,53,0.18)]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.34),transparent_62%)]" />
      <svg
        width="16"
        height="16"
        viewBox="0 0 14 14"
        fill="none"
        className="relative z-10"
      >
        <rect x="1" y="1" width="5.5" height="5.5" rx="1.5" fill="#050507" />
        <rect
          x="7.5"
          y="1"
          width="5.5"
          height="5.5"
          rx="1.5"
          fill="#050507"
          opacity="0.5"
        />
        <rect
          x="1"
          y="7.5"
          width="5.5"
          height="5.5"
          rx="1.5"
          fill="#050507"
          opacity="0.5"
        />
        <rect
          x="7.5"
          y="7.5"
          width="5.5"
          height="5.5"
          rx="1.5"
          fill="#050507"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}

export function BrandLogo({
  href = "/",
  className,
  labelClassName,
}: {
  href?: string;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-3 text-sm font-medium tracking-[-0.02em] text-[var(--foreground)]",
        className,
      )}
    >
      <LogoGlyph />
      <span className={cn("text-[15px]", labelClassName)}>FormFlow AI</span>
    </Link>
  );
}
