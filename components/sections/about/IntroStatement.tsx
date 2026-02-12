"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export default function IntroStatement() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-h1 mb-8 tracking-tight">About Studio SDK</h1>
          <p className="text-body text-[#4A4A4A]">
            We are a creative studio dedicated to crafting minimal, powerful experiences that resonate with audiences and drive meaningful results.
          </p>
        </div>
      </Container>
    </section>
  );
}
