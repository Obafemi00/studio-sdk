"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion";

export default function BigCtaScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const supportRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !pinRef.current) return;

    registerScrollTrigger();

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      if (
        !overlayRef.current ||
        !headlineRef.current ||
        !supportRef.current ||
        !ctaRef.current
      )
        return;

      // Initial state
      gsap.set(overlayRef.current, {
        yPercent: 0,
      });
      gsap.set(headlineRef.current, {
        color: "#FFFFFF",
      });
      gsap.set([supportRef.current, ctaRef.current], {
        opacity: 0,
        y: 10,
      });

      // Create timeline with scroll scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=140%",
          scrub: true,
          pin: pinRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // A) Overlay wipes UP (most of the scroll)
      tl.to(overlayRef.current, {
        yPercent: -100,
        ease: "none",
        duration: 1,
      })
        // B) Headline color transitions to #2B2B2B near the end (~70% progress)
        .to(
          headlineRef.current,
          {
            color: "#2B2B2B",
            ease: "none",
            duration: 0.3,
          },
          "-=0.3"
        )
        // C) Support fades in near end
        .to(
          supportRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "none",
            duration: 0.2,
          },
          "-=0.2"
        )
        // D) CTA fades in last (staggered after support)
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "none",
            duration: 0.2,
          },
          "-=0.1"
        );

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={{
        minHeight: prefersReducedMotion ? "auto" : "240vh",
      }}
    >
      {!prefersReducedMotion && (
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#2B2B2B] will-change-transform"
        />
      )}
      <div
        ref={pinRef}
        className="relative z-10 flex min-h-screen items-center justify-center"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center px-6">
          <h2
            ref={headlineRef}
            className="font-display text-[clamp(56px,9vw,120px)] leading-[0.92] tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: prefersReducedMotion ? "#2B2B2B" : undefined,
            }}
          >
            <span className="block">1 million users,</span>
            <span className="block">plus you.</span>
          </h2>
          <p
            ref={supportRef}
            className="mt-8 text-base md:text-lg opacity-0 translate-y-2"
            style={{
              opacity: prefersReducedMotion ? 1 : undefined,
              transform: prefersReducedMotion ? "translateY(0)" : undefined,
            }}
          >
            It only takes a few seconds to get started.
          </p>
          <a
            ref={ctaRef}
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-[#2B2B2B] px-8 py-3 text-sm font-medium opacity-0 translate-y-2 transition-colors hover:bg-[#2B2B2B] hover:text-white"
            style={{
              opacity: prefersReducedMotion ? 1 : undefined,
              transform: prefersReducedMotion ? "translateY(0)" : undefined,
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
