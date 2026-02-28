"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import AboutHeroVisual from "./AboutHeroVisual";
import { useReducedMotion } from "@/lib/motion";

export default function AboutHero() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      // Show everything immediately
      if (headlineRef.current) {
        headlineRef.current.style.opacity = "1";
        headlineRef.current.style.transform = "translateY(0)";
      }
      if (rightContentRef.current) {
        rightContentRef.current.style.opacity = "1";
        rightContentRef.current.style.transform = "translateY(0)";
      }
      return;
    }

    // Animate headline
    if (headlineRef.current) {
      headlineRef.current.style.opacity = "0";
      headlineRef.current.style.transform = "translateY(16px)";
      headlineRef.current.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
      
      setTimeout(() => {
        if (headlineRef.current) {
          headlineRef.current.style.opacity = "1";
          headlineRef.current.style.transform = "translateY(0)";
        }
      }, 50);
    }

    // Animate right content (slightly delayed)
    if (rightContentRef.current) {
      rightContentRef.current.style.opacity = "0";
      rightContentRef.current.style.transform = "translateY(16px)";
      rightContentRef.current.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
      
      setTimeout(() => {
        if (rightContentRef.current) {
          rightContentRef.current.style.opacity = "1";
          rightContentRef.current.style.transform = "translateY(0)";
        }
      }, 150);
    }
  }, [prefersReducedMotion]);

  return (
    <section 
      className="relative flex min-h-screen items-center overflow-hidden pb-24"
      style={{
        background: "radial-gradient(ellipse at center, #FAFAFA 0%, #F5F5F5 100%)",
      }}
    >
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12">
          {/* Left: Headline (col-span 6 on desktop, full on mobile/tablet) */}
          <div ref={headlineRef} className="col-span-12 flex flex-col justify-center md:col-span-6 lg:col-span-6">
            <h1
              className="mb-4 font-display tracking-tight leading-[0.9] text-[#2B2B2B]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(56px, 7vw, 120px)",
              }}
            >
              Studio SDK
            </h1>
            <h2
              className="font-display tracking-tight text-[#4A4A4A]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 64px)",
              }}
            >
              Premium CGI for products.
            </h2>
          </div>

          {/* Center: Visual (col-span 3 on desktop, col-span-6 on tablet, full on mobile) */}
          <div className="col-span-12 flex items-center justify-center md:col-span-6 md:col-start-7 lg:col-span-3 lg:col-start-7">
            <AboutHeroVisual />
          </div>

          {/* Right: Supporting text + CTA (col-span 3 on desktop, full on tablet/mobile) */}
          <div ref={rightContentRef} className="col-span-12 flex flex-col justify-center md:col-span-12 lg:col-span-3 lg:col-start-10">
            <p className="mb-8 max-w-[22rem] text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
              We create cinematic CGI product films and stills that elevate perception, improve ad performance, and keep your content pipeline consistent.
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#2B2B2B] bg-white px-8 py-3 text-sm font-medium text-[#2B2B2B] transition-colors hover:bg-[#2B2B2B] hover:text-white"
            >
              Let's connect
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
