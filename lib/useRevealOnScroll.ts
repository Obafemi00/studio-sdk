"use client";

import { useLayoutEffect, useRef, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerScrollTrigger } from "./gsap";
import { useReducedMotion } from "./motion";

export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  enabled: boolean = true
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (!enabled || prefersReducedMotion || !ref.current) return;
    
    registerScrollTrigger();

    const element = ref.current;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y: 12,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, ref);

    return () => {
      ctx.revert(); // Safely removes triggers and inline styles
    };
  }, [enabled, prefersReducedMotion]);

  return ref;
}
