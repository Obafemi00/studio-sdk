"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const prefersReducedMotion = useReducedMotion();
  const [debugProgress, setDebugProgress] = useState(0);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    if (!sectionRef.current || !pinRef.current) return;

    registerScrollTrigger();
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = rowRefs.current.filter(Boolean);
      if (rows.length !== 3) return;

      // QuickSetters for performance/stability
      const opacitySetters = rows.map((row) => gsap.quickSetter(row, "opacity"));
      const ySetters = rows.map((row) => gsap.quickSetter(row, "y"));

      // Helper
      const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

      // Kill any previous trigger for this section
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "top top",
        end: "+=240%",
        scrub: true,
        pin: pinRef.current!,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress; // 0..1
          setDebugProgress(p);

          // 3 equal segments
          const r1 = clamp01(p / 0.3333);
          const r2 = clamp01((p - 0.3333) / 0.3333);
          const r3 = clamp01((p - 0.6666) / 0.3334);

          const vals = [r1, r2, r3];

          vals.forEach((v, i) => {
            opacitySetters[i](v);
            ySetters[i]((1 - v) * 56); // from below into place
          });
        },
      });

      triggerRef.current = trigger;
    }, sectionRef);

    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Pinned viewport */}
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
                    : { opacity: 0, transform: "translateY(56px)" }
                }
              >
                {/* Transparent icon container: no background tile */}
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
      {/* Debug overlay for ScrollTrigger progress */}
      <div className="fixed bottom-4 left-4 z-[9999] rounded bg-black/70 px-2 py-1 text-xs text-white">
        ThreeWords p={debugProgress.toFixed(3)}
      </div>
    </section>
  );
}