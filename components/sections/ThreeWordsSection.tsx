"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import { registerScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion";

const words = [
  { id: 1, word: "Launch", icon: "🚀" },
  { id: 2, word: "Elevate", icon: "⬆️" },
  { id: 3, word: "Scale", icon: "📈" },
];

export default function ThreeWordsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;
    
    registerScrollTrigger();

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const rows = gsap.utils.toArray<HTMLElement>("[data-threeword-row]");
      
      if (rows.length === 0) return;

      // Set initial hidden state
      gsap.set(rows, { autoAlpha: 0, y: 16 });

      // Create timeline with scroll scrub - sequential reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "+=140%",
          pin: true,
          pinSpacing: true,
          scrub: 0.3,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Sequential staggered reveal: row1 -> row2 -> row3
      tl.to(rows[0], {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      })
        .to(
          rows[1],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          ">0.15"
        )
        .to(
          rows[2],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          ">0.15"
        );
    }, containerRef);

    return () => {
      ctx.revert(); // Safely removes pins, triggers, and inline styles
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center bg-white py-8 md:py-12"
    >
      <Container>
        <div className="space-y-16 md:space-y-24">
          <div
            data-threeword-row
            className="word-row flex flex-col items-center gap-4 md:flex-row md:gap-8"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-[#E6E6E6] bg-transparent text-4xl md:h-24 md:w-24 md:text-5xl">
              {words[0].icon}
            </div>
            <h2 className="text-5xl font-display tracking-tight md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
              {words[0].word}
            </h2>
          </div>
          <div
            data-threeword-row
            className="word-row flex flex-col items-center gap-4 md:flex-row md:gap-8"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-[#E6E6E6] bg-transparent text-4xl md:h-24 md:w-24 md:text-5xl">
              {words[1].icon}
            </div>
            <h2 className="text-5xl font-display tracking-tight md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
              {words[1].word}
            </h2>
          </div>
          <div
            data-threeword-row
            className="word-row flex flex-col items-center gap-4 md:flex-row md:gap-8"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-[#E6E6E6] bg-transparent text-4xl md:h-24 md:w-24 md:text-5xl">
              {words[2].icon}
            </div>
            <h2 className="text-5xl font-display tracking-tight md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
              {words[2].word}
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
