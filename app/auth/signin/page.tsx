"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    // TODO: replace with real auth call
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="auth-shell">
      {/* Ambient orbs — reuse hero orb styles */}
      <div className="auth-orb auth-orb-1" />
      <div className="auth-orb auth-orb-2" />

      {/* Logo */}
      <Link href="/" className="auth-logo">
        <div className="logo-mark">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect
              x="1"
              y="1"
              width="5.5"
              height="5.5"
              rx="1.5"
              fill="#050507"
            />
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
        FormFlow AI
      </Link>

      <div className="auth-card">
        {/* Header */}
        <div className="auth-card-head">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-sub">Sign in to your FormFlow account</p>
        </div>

        {/* OAuth buttons */}
        <div className="auth-oauth">
          <button className="btn-oauth">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
            Continue with Google
          </button>
          <button className="btn-oauth">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Continue with GitHub
          </button>
        </div>

        <div className="auth-divider">
          <span>or</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="auth-error">{error}</div>}

          <div className="auth-field">
            <label className="auth-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="auth-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <div className="auth-label-row">
              <label className="auth-label" htmlFor="password">
                Password
              </label>
              <a href="#" className="auth-forgot">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              className="auth-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn-auth-submit" disabled={loading}>
            {loading ? (
              <span className="auth-spinner" />
            ) : (
              <>
                Sign in
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
        </form>

        <p className="auth-switch">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="auth-switch-link">
            Create one free
          </Link>
        </p>
      </div>

      <p className="auth-legal">
        By continuing you agree to our <a href="#">Terms</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </p>
    </div>
  );
}
