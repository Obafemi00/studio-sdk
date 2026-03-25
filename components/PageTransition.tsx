"use client";

import { useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useReducedMotion } from "@/lib/motion";
import { registerScrollTrigger } from "@/lib/gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    registerScrollTrigger();
  }, []);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const container = containerRef.current;
    const overlay = overlayRef.current;

    gsap.killTweensOf(container);
    if (overlay) gsap.killTweensOf(overlay);

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (overlay) {
      tl.set(overlay, { opacity: 0 })
        .to(overlay, { opacity: 0.12, duration: 0.22 })
        .to(overlay, { opacity: 0, duration: 0.34 }, ">-0.02");
    }

    tl.fromTo(
      container,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.78, ease: "power3.out" },
      0
    );

    return () => {
      gsap.to(container, { opacity: 0, duration: 0.36, ease: "power2.out" });
    };
  }, [pathname, prefersReducedMotion]);

  return (
    <div className="relative">
      <div
        ref={overlayRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 bg-[#2B2B2B]"
        style={{ opacity: 0 }}
      />
      <div ref={containerRef} style={{ opacity: prefersReducedMotion ? 1 : 0 }}>
        {children}
      </div>
    </div>
  );
}
