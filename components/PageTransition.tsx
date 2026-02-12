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
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    registerScrollTrigger();
  }, []);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const container = containerRef.current;

    // Animate in
    gsap.fromTo(
      container,
      {
        opacity: 0,
        y: 8,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    return () => {
      // Animate out on route change
      if (container) {
        gsap.to(container, {
          opacity: 0,
          y: -8,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };
  }, [pathname, prefersReducedMotion]);

  return (
    <div ref={containerRef} style={{ opacity: prefersReducedMotion ? 1 : 0 }}>
      {children}
    </div>
  );
}
