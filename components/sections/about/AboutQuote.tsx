"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export default function AboutQuote() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <blockquote className="text-center">
            <p
              className="mb-6 text-3xl font-display leading-tight text-[#2B2B2B] md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Premium isn't a look. It's consistency at scale."
            </p>
            <footer className="text-base text-[#4A4A4A] md:text-lg">
              Sav — Creative Director
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
