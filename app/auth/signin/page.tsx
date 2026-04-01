"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,241,53,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute bottom-[-10rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(0,229,200,0.12),transparent_70%)]" />

      <div className="relative z-10 grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_0.72fr] lg:items-center">
        <section className="hidden lg:block">
          <div className="max-w-xl space-y-6">
            <Badge>Secure access</Badge>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.05em]">
              Review filings, not your UI debt.
            </h1>
            <p className="text-lg leading-8 text-[var(--muted-foreground)]">
              The auth flow now uses the same visual language as the product itself,
              backed by reusable Tailwind primitives instead of page-specific styling hooks.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["SSO-ready patterns", "Shared components make the next auth iteration predictable."],
                ["Consistent tokens", "Inputs, cards, and actions pull from the same theme scale."],
              ].map(([title, body]) => (
                <Card key={title} className="bg-[rgba(255,255,255,0.02)]">
                  <CardContent className="p-5">
                    <div className="text-lg font-medium tracking-[-0.03em]">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center gap-6">
          <BrandLogo />
          <Card className="w-full max-w-[440px]">
            <CardHeader className="gap-3 p-8 pb-6">
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>Sign in to your FormFlow account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-8 pt-0">
              <div className="grid gap-3">
                <Button variant="outline" className="w-full justify-center rounded-2xl">
                  <GoogleIcon />
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full justify-center rounded-2xl">
                  <GitHubIcon />
                  Continue with GitHub
                </Button>
              </div>

              <div className="flex items-center gap-3">
                <Separator />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  or
                </span>
                <Separator />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {error ? (
                  <div className="rounded-2xl border border-[rgba(255,77,77,0.18)] bg-[rgba(255,77,77,0.08)] px-4 py-3 font-mono text-[12px] text-[#ff9c9c]">
                    {error}
                  </div>
                ) : null}

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <label
                      htmlFor="password"
                      className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-xs text-[var(--muted-foreground)] transition hover:text-[var(--primary)]"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>

                <Button type="submit" className="w-full rounded-2xl" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                  {!loading ? <ArrowRightIcon /> : null}
                </Button>
              </form>

              <p className="text-center text-sm text-[var(--muted-foreground)]">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-[var(--foreground)] underline underline-offset-4">
                  Create one free
                </Link>
              </p>
            </CardContent>
          </Card>

          <p className="max-w-md text-center text-xs leading-6 text-[var(--muted-foreground)]">
            By continuing you agree to our <a href="#" className="underline underline-offset-4">Terms</a> and{" "}
            <a href="#" className="underline underline-offset-4">Privacy Policy</a>.
          </p>
        </div>
      </div>
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

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M15.68 8.18c0-.57-.05-1.12-.14-1.64H8v3.1h4.31a3.68 3.68 0 0 1-1.6 2.42v2h2.59c1.52-1.4 2.38-3.46 2.38-5.88z"
        fill="#4285F4"
      />
      <path
        d="M8 16c2.16 0 3.97-.72 5.3-1.94l-2.59-2a4.8 4.8 0 0 1-7.15-2.52H.96v2.07A8 8 0 0 0 8 16z"
        fill="#34A853"
      />
      <path
        d="M3.56 9.54A4.83 4.83 0 0 1 3.3 8c0-.54.09-1.06.25-1.54V4.39H.96A8 8 0 0 0 0 8c0 1.29.31 2.51.96 3.61l2.6-2.07z"
        fill="#FBBC05"
      />
      <path
        d="M8 3.18c1.22 0 2.31.42 3.17 1.24l2.37-2.37A7.94 7.94 0 0 0 8 0 8 8 0 0 0 .96 4.39l2.6 2.07A4.77 4.77 0 0 1 8 3.18z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
