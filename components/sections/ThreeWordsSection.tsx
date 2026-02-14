"use client";

import { useEffect, useRef, useState } from "react";
import { Rocket, ArrowUp, TrendingUp } from "lucide-react";
import { useReducedMotion } from "@/lib/motion";

const words = [
  { id: 1, word: "Launch", Icon: Rocket },
  { id: 2, word: "Elevate", Icon: ArrowUp },
  { id: 3, word: "Scale", Icon: TrendingUp },
];

export default function ThreeWordsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const totalScrollable = sectionHeight - viewportHeight;
      const current = Math.min(
        Math.max(-rect.top, 0),
        totalScrollable
      );

      const p = totalScrollable > 0 ? current / totalScrollable : 0;
      setProgress(p);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [prefersReducedMotion]);

  // Each row locks into position progressively
  const getRowProgress = (index: number) => {
    const phase = 1 / 3;
    const start = index * phase;
    const end = start + phase;

    if (progress >= end) return 1;
    if (progress <= start) return 0;

    return (progress - start) / phase;
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{
        height: prefersReducedMotion ? "auto" : "180vh", // reduced height (less dead space)
      }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-14 md:gap-20">
          {words.map((item, index) => {
            const rowProgress = prefersReducedMotion
              ? 1
              : getRowProgress(index);

            const opacity = rowProgress;
            const translateY = (1 - rowProgress) * 60;

            return (
              <div
                key={item.id}
                className="flex items-center gap-6 md:gap-10"
                style={{
                  opacity,
                  transform: `translateY(${translateY}px)`,
                }}
              >
                <item.Icon className="h-10 w-10 text-[#2B2B2B] md:h-14 md:w-14" />

                <h2 className="text-6xl font-display tracking-tight md:text-8xl lg:text-9xl">
                  {item.word}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
