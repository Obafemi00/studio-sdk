"use client";

import { useEffect, useRef, RefObject } from "react";
import { useReducedMotion } from "./motion";

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  staggerDelay: number = 0.1
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const children = Array.from(element.children) as HTMLElement[];

    if (children.length === 0) return;

    if (prefersReducedMotion) {
      // Show all children immediately with no animation
      children.forEach((child) => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
        child.style.transition = "none";
      });
      return;
    }

    // Set initial state
    children.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(16px)";
      child.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
              }, index * staggerDelay * 1000);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [staggerDelay, prefersReducedMotion]);

  return ref;
}
