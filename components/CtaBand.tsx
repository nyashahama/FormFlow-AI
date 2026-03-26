import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-bg-orb"></div>
      <div className="cta-bg-ring"></div>
      <div className="cta-bg-ring-2"></div>
      <div className="cta-content reveal">
        <h2 className="cta-h">
          Stop filling forms.
          <br />
          <em>Start using them.</em>
        </h2>
        <p className="cta-sub">
          Join 14,000+ individuals, accountants, and agencies who've made
          government paperwork a one-click task.
        </p>
        <div className="cta-actions">
          <Link href="/auth/signup" className="btn-hero">
            Get started free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M8 4l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/auth/signin" className="btn-hero-ghost">
            Talk to sales
          </Link>
        </div>
        <p className="cta-fine">
          No credit card · 14-day Pro trial · SOC 2 certified
        </p>
      </div>
    </section>
  );
}
