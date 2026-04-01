"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Badge } from "@/components/ui/badge";
import { Button, buttonStyles } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Form types", value: "2,400+" },
  { label: "Prefill accuracy", value: "98.2%" },
  { label: "Review time", value: "< 3 min" },
  { label: "Connected systems", value: "42" },
];

const workflow = [
  {
    step: "01",
    title: "Ingest any agency form",
    body: "Upload PDFs, pull prior returns, or point FormFlow at a filing packet. The parser maps fields and requirements automatically.",
  },
  {
    step: "02",
    title: "Link the systems you already use",
    body: "Payroll, banking, HRIS, document drives, and internal tools sync into a single evidence layer for every filing.",
  },
  {
    step: "03",
    title: "Review exceptions, not every field",
    body: "The assistant highlights only low-confidence values, missing support, and policy risks before submission.",
  },
];

const integrations = [
  "IRS transcripts",
  "Plaid",
  "Workday",
  "Gusto",
  "Google Drive",
  "Dropbox",
  "Salesforce",
  "DocuSign",
];

const pricing = [
  {
    tier: "Starter",
    price: "$0",
    description: "For testing a few filing flows with a small team.",
    features: ["20 filings / month", "2 data sources", "Audit timeline", "Manual review queue"],
  },
  {
    tier: "Pro",
    price: "$299",
    description: "For finance and ops teams replacing repetitive filing work.",
    features: ["Unlimited filings", "All connectors", "AI exception handling", "Approval workflows"],
    featured: true,
  },
  {
    tier: "Enterprise",
    price: "Custom",
    description: "For regulated organizations with stricter controls and volume.",
    features: ["SSO / SCIM", "Private deployment", "Custom policies", "Dedicated support"],
  },
];

const quotes = [
  {
    quote:
      "The product already felt premium. This refactor finally aligns the codebase with that experience instead of fighting it.",
    name: "Elena Park",
    role: "Head of Operations, Northline Tax",
  },
  {
    quote:
      "We went from reviewing every field to reviewing edge cases. That changed staffing plans in one quarter.",
    name: "Marcus Bell",
    role: "VP Finance, Civic Ledger",
  },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
    >
      {label}
    </a>
  );
}

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        headerRef.current.dataset.scrolled = window.scrollY > 16 ? "true" : "false";
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative isolate">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(200,241,53,0.18),transparent_42%)]" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,229,200,0.12),transparent_70%)] [animation:breathe_14s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute right-[8%] top-24 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.1),transparent_70%)] [animation:breathe_11s_ease-in-out_infinite_reverse]" />

      <header
        ref={headerRef}
        data-scrolled="false"
        className="sticky top-0 z-50 border-b border-transparent px-4 py-4 transition data-[scrolled=true]:border-[var(--border)] data-[scrolled=true]:bg-[rgba(5,5,7,0.74)] data-[scrolled=true]:backdrop-blur-xl sm:px-6 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <BrandLogo />
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#workflow" label="Workflow" />
            <NavLink href="#integrations" label="Integrations" />
            <NavLink href="#compliance" label="Compliance" />
            <NavLink href="#pricing" label="Pricing" />
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/auth/signin" className={buttonStyles({ variant: "ghost", size: "sm" })}>
              Sign in
            </Link>
            <Link href="/auth/signup" className={buttonStyles({ size: "sm" })}>
              Start free
            </Link>
          </div>
        </div>
      </header>

      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-24 lg:pt-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <Badge>
              <span className="size-2 rounded-full bg-[var(--primary)]" />
              2,400+ government form types supported
            </Badge>
            <div className="max-w-3xl space-y-5">
              <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.05em] text-[var(--foreground)] sm:text-7xl lg:text-[5.75rem]">
                Paperwork that <span className="italic text-[var(--smoke-2)]">fills itself</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
                FormFlow reads any government form, pulls your data from linked systems,
                and routes only the risky exceptions to a human. The result is faster filing
                without lowering the compliance bar.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/signup"
                className={buttonStyles({ size: "lg", className: "w-full sm:w-auto" })}
              >
                Get started free
                <ArrowRightIcon />
              </Link>
              <a
                href="#demo"
                className={buttonStyles({
                  variant: "outline",
                  size: "lg",
                  className: "w-full sm:w-auto",
                })}
              >
                See the product tour
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="rounded-[22px] bg-[rgba(255,255,255,0.02)]">
                  <CardContent className="p-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-3xl font-medium tracking-[-0.03em]">
                      {stat.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card id="demo" className="overflow-hidden">
            <CardContent className="p-0">
              <div className="border-b border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="size-2.5 rounded-full bg-[#febc2e]" />
                    <span className="size-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="rounded-full border border-[var(--border)] bg-[rgba(5,5,7,0.45)] px-4 py-2 font-mono text-[11px] text-[var(--muted-foreground)]">
                    app.formflow.ai/fill/irs-1040
                  </div>
                </div>
              </div>
              <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
                <div className="border-b border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-5 lg:border-b-0 lg:border-r">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Progress
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Personal info", "done"],
                      ["Income", "done"],
                      ["Deductions", "active"],
                      ["Credits", "pending"],
                      ["Review & sign", "pending"],
                    ].map(([label, state]) => (
                      <div key={label} className="flex items-center gap-3 text-sm text-[var(--smoke-2)]">
                        <span
                          className={cn(
                            "size-2.5 rounded-full",
                            state === "done" && "bg-[var(--primary)]",
                            state === "active" && "bg-[var(--cyan)] shadow-[0_0_0_5px_rgba(0,229,200,0.12)]",
                            state === "pending" && "bg-white/15",
                          )}
                        />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-5" />
                  <div className="space-y-3 text-sm text-[var(--muted-foreground)]">
                    <div>🏦 Plaid · Wells Fargo</div>
                    <div>💼 Gusto payroll</div>
                    <div>📋 2023 return</div>
                  </div>
                </div>
                <div className="space-y-6 p-5 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-2xl font-medium tracking-[-0.03em]">
                        Schedule A
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        IRS Form 1040 · Tax Year 2025
                      </p>
                    </div>
                    <Badge className="w-fit border-[rgba(0,229,200,0.18)] bg-[rgba(0,229,200,0.1)] text-[rgba(187,255,246,0.92)]">
                      <span className="size-2 rounded-full bg-[var(--cyan)]" />
                      AI filling
                    </Badge>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { label: "Medical Expenses", value: "$4,280.00", done: true },
                      { label: "State & Local Taxes", value: "$10,000.00", done: true },
                      { label: "Mortgage Interest", value: "$11,430.00", done: true },
                      { label: "Charitable Gifts", value: "$1,240.00", done: false },
                    ].map((field) => (
                      <div key={field.label} className="space-y-2">
                        <div className="text-xs uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                          {field.label}
                        </div>
                        <div
                          className={cn(
                            "flex h-14 items-center justify-between rounded-2xl border px-4",
                            field.done
                              ? "border-[rgba(200,241,53,0.22)] bg-[rgba(200,241,53,0.08)]"
                              : "border-[rgba(0,229,200,0.18)] bg-[rgba(255,255,255,0.03)]",
                          )}
                        >
                          <span
                            className={
                              field.done ? "text-[var(--foreground)]" : "text-[var(--smoke-2)]"
                            }
                          >
                            {field.value}
                          </span>
                          <span
                            className={cn(
                              "inline-flex size-6 items-center justify-center rounded-full text-[10px]",
                              field.done
                                ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                                : "border border-[rgba(0,229,200,0.25)] text-[var(--cyan)]",
                            )}
                          >
                            {field.done ? "✓" : "AI"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
                      <span>Progress</span>
                      <span>80% · ~1 min left</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/8">
                      <div className="h-2 w-4/5 rounded-full bg-[linear-gradient(90deg,var(--primary),var(--cyan))]" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3" id="workflow">
          {workflow.map((item) => (
            <Card key={item.step} className="bg-[rgba(255,255,255,0.02)]">
              <CardHeader>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
                  {item.step}
                </div>
                <CardTitle className="text-[2rem]">{item.title}</CardTitle>
                <CardDescription>{item.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16" id="integrations">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div className="space-y-4">
                <Badge>Integrations</Badge>
                <h2 className="max-w-xl font-serif text-5xl leading-none tracking-[-0.04em]">
                  Plug into the systems the filing team already trusts.
                </h2>
                <p className="max-w-lg text-base text-[var(--muted-foreground)]">
                  FormFlow is strongest when it becomes the orchestration layer, not
                  another silo. Every connector adds evidence, context, and a cleaner audit trail.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {integrations.map((name, index) => (
                  <div
                    key={name}
                    className="rounded-[22px] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm text-[var(--smoke-2)]"
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 text-lg font-medium text-[var(--foreground)]">{name}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16" id="compliance">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card>
            <CardHeader>
              <Badge>Compliance</Badge>
              <CardTitle className="max-w-xl text-[2.75rem]">
                Every automation step leaves evidence behind.
              </CardTitle>
              <CardDescription className="max-w-2xl">
                Reviewer actions, source documents, confidence thresholds, and approvals are
                attached to each filing so finance, legal, and audit teams can inspect the exact chain of custody.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              {[
                ["SOC 2 Type II", "Controls for data handling and operational security."],
                ["Field-level lineage", "See where every value came from before submission."],
                ["Approval routing", "Escalate only the filings that exceed policy thresholds."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[22px] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5">
                  <div className="text-lg font-medium tracking-[-0.03em]">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{body}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]">
            <CardHeader>
              <Badge className="w-fit">Audit timeline</Badge>
            </CardHeader>
            <CardContent className="space-y-5">
              {[
                ["09:14", "Bank statement synced", "Plaid connected Wells Fargo statement ending in 4421."],
                ["09:17", "AI mapped field", "Charitable contribution matched to verified transaction history."],
                ["09:19", "Reviewer approved", "Low-confidence deduction accepted with attached source bundle."],
                ["09:21", "Submission queued", "Filing locked and sent to IRS e-file pipeline."],
              ].map(([time, title, body], index) => (
                <div key={title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="size-3 rounded-full bg-[var(--primary)]" />
                    {index < 3 && <div className="mt-2 h-full w-px bg-[var(--border)]" />}
                  </div>
                  <div className="pb-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                      {time}
                    </div>
                    <div className="mt-1 text-base font-medium">{title}</div>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">{body}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16" id="pricing">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-2xl space-y-4">
            <Badge>Pricing</Badge>
            <h2 className="font-serif text-5xl leading-none tracking-[-0.04em]">
              Keep the product premium. Make the codebase match.
            </h2>
            <p className="text-base text-[var(--muted-foreground)]">
              A design-system refactor only matters if the product still feels expensive. This tiering keeps the current confidence and sharpness while moving the implementation toward reusable primitives.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <Card
                key={plan.tier}
                className={cn(
                  "relative overflow-hidden",
                  plan.featured && "border-[rgba(200,241,53,0.22)] bg-[linear-gradient(180deg,rgba(200,241,53,0.12),rgba(255,255,255,0.03))]",
                )}
              >
                {plan.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-[var(--primary)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--primary-foreground)]">
                    Most popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-[2rem]">{plan.tier}</CardTitle>
                  <div className="text-4xl font-medium tracking-[-0.04em]">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-[var(--smoke-2)]">
                      <span className="mt-1 size-2 rounded-full bg-[var(--primary)]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Button
                      variant={plan.featured ? "default" : "outline"}
                      className="w-full"
                    >
                      {plan.tier === "Enterprise" ? "Talk to sales" : "Choose plan"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {quotes.map((item) => (
            <Card key={item.name} className="bg-[rgba(255,255,255,0.02)]">
              <CardContent className="space-y-6 p-8">
                <p className="font-serif text-3xl leading-[1.1] tracking-[-0.03em]">
                  “{item.quote}”
                </p>
                <div>
                  <div className="text-base font-medium">{item.name}</div>
                  <div className="text-sm text-[var(--muted-foreground)]">{item.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <Card className="overflow-hidden border-[rgba(200,241,53,0.16)] bg-[linear-gradient(135deg,rgba(200,241,53,0.12),rgba(255,255,255,0.03)_45%,rgba(0,229,200,0.06))]">
            <CardContent className="flex flex-col gap-8 p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
              <div className="max-w-2xl space-y-4">
                <Badge className="w-fit">Ship the refactor</Badge>
                <h2 className="font-serif text-5xl leading-none tracking-[-0.04em]">
                  Replace fragile styling with reusable UI primitives.
                </h2>
                <p className="text-base text-[var(--muted-foreground)]">
                  Tailwind for composition, shadcn-style components for consistency, and a visual language that still feels like FormFlow instead of a template.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/auth/signup" className={buttonStyles({ size: "lg" })}>
                  Start free
                </Link>
                <Link href="/auth/signin" className={buttonStyles({ variant: "outline", size: "lg" })}>
                  View dashboard
                </Link>
              </div>
            </CardContent>
          </Card>
          <footer className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
            <BrandLogo labelClassName="text-sm" />
            <div className="flex flex-wrap gap-5">
              <a href="#workflow">Workflow</a>
              <a href="#compliance">Compliance</a>
              <a href="#pricing">Pricing</a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
