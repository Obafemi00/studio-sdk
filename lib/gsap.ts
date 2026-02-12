"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motion";

let scrollTriggerRegistered = false;

/**
 * Register ScrollTrigger plugin (client-side only, safe for Next.js)
 */
export function registerScrollTrigger() {
  if (typeof window === "undefined") return;
  if (scrollTriggerRegistered) return;

  try {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerRegistered = true;
  } catch (e) {
    // Already registered or error
    scrollTriggerRegistered = true;
  }
}

/**
 * Initialize GSAP with ScrollTrigger
 */
export function useGSAP() {
  useEffect(() => {
    registerScrollTrigger();

    return () => {
      // Cleanup ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}

/**
 * Get GSAP animation defaults respecting reduced motion
 */
export function getAnimationDefaults() {
  return {
    duration: prefersReducedMotion() ? 0 : 0.6,
    ease: "power2.out" as const,
  };
}
