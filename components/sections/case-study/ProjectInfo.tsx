"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion";

interface ProjectInfoProps {
  title: string;
  metadata?: string;
}

export default function ProjectInfo({ title, metadata }: ProjectInfoProps) {
  const revealRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !revealRef.current) return;

    registerScrollTrigger();
    const element = revealRef.current;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, revealRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={revealRef} className="bg-white py-16 md:py-24">
      <Container className="max-w-[1280px]">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-[36px] leading-tight tracking-[0.02em] font-display text-[#2B2B2B] md:text-[64px]">
            {title}
          </h1>
          <p className="mt-4 text-[12px] uppercase tracking-[0.32em] font-sans text-[#4A4A4A]">
            {metadata ?? "CLIENT · YEAR · CATEGORY"}
          </p>
        </div>
      </Container>
    </section>
  );
}
