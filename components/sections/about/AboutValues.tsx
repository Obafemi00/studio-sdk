"use client";

import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";

const values = [
  {
    number: "01",
    title: "Clarity",
    description: "Every visual communicates your brand's premium positioning with precision and purpose.",
  },
  {
    number: "02",
    title: "Craft",
    description: "Technical excellence meets creative vision in every frame we deliver.",
  },
  {
    number: "03",
    title: "Consistency",
    description: "Reliable quality that keeps your content pipeline flowing without compromise.",
  },
];

export default function AboutValues() {
  const staggerRef = useStaggerReveal<HTMLDivElement>(0.12);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-sm uppercase tracking-wider text-[#4A4A4A] md:mb-12">Values</p>
          <div ref={staggerRef} className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div key={index}>
                <div className="mb-4 text-3xl font-display text-[#E6E6E6] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                  {value.number}
                </div>
                <h3 className="mb-3 text-2xl font-medium text-[#2B2B2B] md:text-3xl">
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
