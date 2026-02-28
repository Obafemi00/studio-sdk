"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion";

function CtaContent({
  variant,
}: {
  variant: "dark" | "light";
}) {
  const isDark = variant === "dark";

  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center text-center px-6">
      <h2
        className="font-display text-[clamp(56px,9vw,120px)] leading-[0.92] tracking-tight"
        style={{
          fontFamily: "var(--font-display)",
          color: isDark ? "#2B2B2B" : "#FFFFFF",
        }}
      >
        <span className="block">1 million users,</span>
        <span className="block">plus you.</span>
      </h2>

      <p
        className="mt-8 text-base md:text-lg"
        style={{ color: isDark ? "#4A4A4A" : "rgba(255,255,255,0.88)" }}
      >
        It only takes a few seconds to get started.
      </p>

      <a
        href="/contact"
        className="mt-10 inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm font-medium transition-colors"
        style={{
          borderColor: isDark ? "#2B2B2B" : "#FFFFFF",
          color: isDark ? "#2B2B2B" : "#FFFFFF",
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) => {
          if (isDark) {
            e.currentTarget.style.backgroundColor = "#2B2B2B";
            e.currentTarget.style.color = "#FFFFFF";
          } else {
            e.currentTarget.style.backgroundColor = "#FFFFFF";
            e.currentTarget.style.color = "#2B2B2B";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = isDark ? "#2B2B2B" : "#FFFFFF";
        }}
      >
        Contact
      </a>
    </div>
  );
}

export default function MillionUsersCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    if (!sectionRef.current) return;

    registerScrollTrigger();
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;

    const ctx = gsap.context(() => {
      // CSS variable drives both overlay + inverted text reveal.
      // 100% = nothing revealed (overlay sits below)
      // 0% = fully revealed (overlay covers entire section)
      gsap.set(el, { "--revealTop": "100%" } as any);

      gsap.to(el, {
        "--revealTop": "0%",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={
        {
          minHeight: "100vh",
          // used by clip-path below
          "--revealTop": prefersReducedMotion ? "0%" : "100%",
        } as React.CSSProperties
      }
    >
      {/* Base CTA (dark on white) */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <CtaContent variant="dark" />
      </div>

      {/* Dark overlay panel (grows upward from bottom via clip-path) */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            backgroundColor: "#2B2B2B",
            clipPath: "inset(var(--revealTop) 0 0 0)",
            willChange: "clip-path",
          }}
        />
      )}

      {/* Inverted CTA (white) revealed ONLY where overlay exists */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-30 flex min-h-screen items-center justify-center"
          style={{
            clipPath: "inset(var(--revealTop) 0 0 0)",
            willChange: "clip-path",
          }}
        >
          <CtaContent variant="light" />
        </div>
      )}
    </section>
  );
}