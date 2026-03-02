"use client";

import { useLayoutEffect, useRef } from "react";
import { Rocket, ArrowUp, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import { registerScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion";

const rowsData = [
  { id: "launch", label: "Launch", Icon: Rocket },
  { id: "elevate", label: "Elevate", Icon: ArrowUp },
  { id: "scale", label: "Scale", Icon: TrendingUp },
] as const;

export default function ThreeWordsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    if (!sectionRef.current || !pinRef.current || !spacerRef.current) return;

    registerScrollTrigger();
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = rowRefs.current.filter(Boolean);
      if (rows.length !== 3) return;

      // IMPORTANT: force a known initial state
      gsap.set(rows, { autoAlpha: 0, y: 60 });

      // Create a step-based timeline: each row gets its own segment and never animates out
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top top",
          // End when spacer finishes passing viewport bottom
          endTrigger: spacerRef.current!,
          end: "bottom top",
          pin: pinRef.current!,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 3 segments: 0-1, 1-2, 2-3
      tl.to(rows[0], { autoAlpha: 1, y: 0, duration: 1 }, 0);
      tl.to(rows[1], { autoAlpha: 1, y: 0, duration: 1 }, 1);
      tl.to(rows[2], { autoAlpha: 1, y: 0, duration: 1 }, 2);

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Pinned viewport (exactly 100vh) */}
      <div ref={pinRef} className="flex h-screen items-center justify-center">
        <Container>
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 md:gap-14 lg:gap-16">
            {rowsData.map(({ id, label, Icon }, i) => (
              <div
                key={id}
                ref={(el) => {
                  if (el) rowRefs.current[i] = el;
                }}
                className="threeword-row flex w-full items-center justify-center gap-6 md:gap-10"
                style={
                  prefersReducedMotion
                    ? { opacity: 1, transform: "translateY(0)" }
                    : undefined
                }
              >
                <div className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
                  <Icon className="h-10 w-10 text-[#2B2B2B] md:h-12 md:w-12" />
                </div>

                <h2
                  className="text-center text-5xl font-display tracking-tight md:text-7xl lg:text-8xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {label}
                </h2>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Explicit scroll distance (THIS controls the scrub length) */}
      <div ref={spacerRef} aria-hidden className="h-[220vh]" />
    </section>
  );
}
