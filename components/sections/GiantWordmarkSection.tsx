"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import { registerScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion";

export default function GiantWordmarkSection() {
  const containerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    registerScrollTrigger();

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      if (!wordmarkRef.current) return;

      // Set initial hidden state
      gsap.set(wordmarkRef.current, {
        autoAlpha: 0,
        y: 12,
        scale: 0.98,
      });

      // Create reveal animation
      gsap.to(wordmarkRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="flex min-h-[60vh] items-center justify-center bg-white py-24 md:py-32"
    >
      <Container>
        <div ref={wordmarkRef} className="text-center">
          <h1
            className="text-6xl font-display tracking-tight md:text-8xl lg:text-9xl xl:text-[12rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Studio SDK
          </h1>
        </div>
      </Container>
    </section>
  );
}
