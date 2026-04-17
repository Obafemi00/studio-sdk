"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export default function AboutSplit() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="bg-white pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-24 lg:pb-32">
      <Container>
        <div className="grid items-start gap-14">
          <div className="md:max-w-xl md:pt-1">
            <h2
              className="mb-8 text-4xl font-display tracking-tight md:mb-10 md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crafting premium visuals
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
              <p>
                Every frame is designed to elevate your product&apos;s perceived value and drive performance.
              </p>
              <p>
                We combine technical precision with creative vision to deliver imagery that stands out in crowded markets.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
