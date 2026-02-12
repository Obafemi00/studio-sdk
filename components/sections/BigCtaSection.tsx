"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import Button from "../ui/Button";
import { registerScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion";

export default function BigCtaSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    registerScrollTrigger();

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      if (!headlineRef.current || !subtextRef.current || !buttonRef.current) return;

      // Set initial hidden state
      gsap.set([headlineRef.current, subtextRef.current, buttonRef.current], {
        autoAlpha: 0,
        y: 16,
      });

      // Create timeline with staggered reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(headlineRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      })
        .to(
          subtextRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          buttonRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen items-center justify-center bg-white py-24 md:py-32 lg:py-40"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2
            ref={headlineRef}
            className="mb-6 text-5xl font-display tracking-tight md:text-7xl lg:text-8xl xl:text-9xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A studio built for the next level.
          </h2>
          <p
            ref={subtextRef}
            className="mb-12 text-lg text-[#4A4A4A] md:text-xl"
          >
            It only takes a few seconds to start a project.
          </p>
          <div ref={buttonRef}>
            <Link href="/contact">
              <Button variant="primary" className="text-lg px-8 py-4">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
