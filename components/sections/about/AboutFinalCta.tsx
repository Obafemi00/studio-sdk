"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export default function AboutFinalCta() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="bg-white pb-28 pt-16 md:pb-40 md:pt-24 lg:pb-44 lg:pt-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-6 text-4xl font-display tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your product deserves better visuals.
          </h2>
          <p className="mb-10 text-lg text-[#4A4A4A] md:text-xl">
            Let&apos;s make something impossible to ignore.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[4px] border border-[#2B2B2B] bg-transparent px-[32px] py-[14px] text-[14px] font-medium uppercase tracking-[0.05em] text-[#2B2B2B] transition-colors hover:bg-[#2B2B2B] hover:text-white"
            style={{ fontFamily: "var(--sdk-font-body)" }}
          >
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
