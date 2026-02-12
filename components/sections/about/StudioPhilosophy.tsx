"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export default function StudioPhilosophy() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px] bg-[#F7F7F7]">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-h2 mb-8 tracking-tight">Philosophy</h2>
          <p className="text-body text-[#4A4A4A]">
            Less is more. We believe in the power of simplicity, the beauty of restraint, and the impact of thoughtful design.
          </p>
        </div>
      </Container>
    </section>
  );
}
