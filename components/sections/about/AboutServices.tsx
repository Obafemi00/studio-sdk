"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";

const services = [
  {
    title: "Hero Product Launch Film + Stills",
    body: "Make your product feel premium and launch-worthy.\nA single hero piece that boosts perceived value, anchors your campaign, and sets a consistent visual standard across all platforms.\nGet consistent product imagery without scheduling any shoots.\nWe give you a bank of clean, elevated images for your website, storefronts, thumbnails, and campaign graphics, ready whenever you need them.",
  },
  {
    title: "CGI + Live Footage (VFX Integration)",
    body: "Get realism and fantasy in the same shot.\nPerfect when you want the human touch of live-action but still need the product to look flawless and larger than life.",
  },
  {
    title: "Monthly Imagery Pipeline (Retainer)",
    body: "Never scramble for premium content again.\nA predictable monthly system that keeps your brand looking high-end, reduces production stress, and compounds a never-ending content library for your social and branding teams.",
  },
];

export default function AboutServices() {
  const staggerRef = useStaggerReveal<HTMLDivElement>(0.1);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2
            className="mb-12 text-4xl font-display tracking-tight md:mb-16 md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services
          </h2>
          <div ref={staggerRef} className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#E6E6E6] bg-white p-6 transition-all hover:border-[#2B2B2B] hover:opacity-90 md:p-8"
              >
                <h3 className="mb-4 text-xl font-medium text-[#2B2B2B] md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                  {service.body.split("\n").map((line, i, arr) => (
                    <span key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center md:mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#2B2B2B] px-8 py-3 text-sm font-medium text-[#2B2B2B] transition-colors hover:bg-[#2B2B2B] hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
