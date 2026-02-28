"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export default function AboutSplit() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
            <div>
              <h2
                className="mb-6 text-4xl font-display tracking-tight md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Crafting premium visuals
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
                <p>
                  Every frame is designed to elevate your product's perceived value and drive performance.
                </p>
                <p>
                  We combine technical precision with creative vision to deliver imagery that stands out in crowded markets.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#F3F3F3] shadow-sm">
                {/* Image placeholder */}
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#F3F3F3] shadow-sm">
                {/* Image placeholder */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
