"use client";

import { useEffect, useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    registerScrollTrigger();

    const section = sectionRef.current;
    if (!section) return;

    const rows = section.querySelectorAll(".word-row");

    // Create timeline with scroll scrub
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      },
    });

    // Staggered reveal animation
    rows.forEach((row, index) => {
      tl.fromTo(
        row,
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        index * 0.2
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center bg-white py-16 md:py-24"
    >
      <Container>
        <div className="space-y-16 md:space-y-24">
          {words.map((item) => (
            <div
              key={item.id}
              className="word-row flex flex-col items-center gap-4 md:flex-row md:gap-8"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#F7F7F7] text-4xl md:h-24 md:w-24 md:text-5xl">
                {item.icon}
              </div>
              <h2 className="text-5xl font-display tracking-tight md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-display)" }}>
                {item.word}
              </h2>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
