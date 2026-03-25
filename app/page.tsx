"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsRow from "@/components/StatsRow";
import HowItWorks from "@/components/HowItWorks";
//import InteractiveDemo from "@/components/InteractiveDemo";
import Integrations from "@/components/Integrations";
import AuditTrail from "@/components/AuditTrail";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" },
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <StatsRow />
      <HowItWorks />
      {/* <InteractiveDemo /> */}
      <Integrations />
      <AuditTrail />
      <Pricing />
      <Testimonials />
      <CtaBand />
      <Footer />
    </>
  );
}
