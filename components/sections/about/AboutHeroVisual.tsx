"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

export default function AboutHeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const element = ref.current;
    element.style.opacity = "0";
    element.style.transform = "translateY(12px)";
    element.style.transition = "opacity 1.1s ease-out, transform 1.1s ease-out";

    // Trigger animation after a slight delay
    const timer = setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 100);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <div ref={ref} className="relative flex h-full items-center justify-center">
      <div className="flex gap-3 md:gap-4">
        {/* Three vertical rounded bars */}
        <div className="h-[280px] w-12 rounded-full bg-gradient-to-b from-[#F5F5F5] to-[#E8E8E8] shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:h-[360px] md:w-16 lg:h-[420px] lg:w-20" />
        <div className="h-[320px] w-12 rounded-full bg-gradient-to-b from-[#F0F0F0] to-[#E0E0E0] shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:h-[400px] md:w-16 lg:h-[460px] lg:w-20" />
        <div className="h-[280px] w-12 rounded-full bg-gradient-to-b from-[#F5F5F5] to-[#E8E8E8] shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:h-[360px] md:w-16 lg:h-[420px] lg:w-20" />
      </div>
    </div>
  );
}
