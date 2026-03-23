"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export default function AboutFinalCta() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="bg-white pb-24 pt-16 md:pb-32 md:pt-24 lg:pb-40 lg:pt-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-6 text-4xl font-display tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to elevate your product?
          </h2>
          <p className="mb-10 text-lg text-[#4A4A4A] md:text-xl">
            Let's build cinematic product visuals that perform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#2B2B2B] px-8 py-3 text-sm font-medium text-[#2B2B2B] transition-colors hover:bg-[#2B2B2B] hover:text-white"
          >
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
