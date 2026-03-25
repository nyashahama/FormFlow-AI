"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 20) {
          navRef.current.classList.add("scrolled");
        } else {
          navRef.current.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} id="nav">
      <Link href="/" className="nav-logo">
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

      <ul className="nav-links">
        <li>
          <a href="#how">How it works</a>
        </li>
        <li>
          <a href="#integrations">Integrations</a>
        </li>
        <li>
          <a href="#audit">Compliance</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
      </ul>

      <div className="nav-right">
        <a href="#" className="btn-nav-ghost">
          Sign in
        </a>
        <a href="#" className="btn-nav-cta">
          Start free
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6h7M6.5 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
