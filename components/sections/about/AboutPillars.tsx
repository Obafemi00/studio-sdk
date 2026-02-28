"use client";

import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";

const pillars = [
  {
    title: "Launch-ready visuals",
    description: "Premium product imagery that's ready to ship, no delays.",
  },
  {
    title: "Always-on content pipeline",
    description: "Consistent delivery that keeps your brand looking high-end.",
  },
  {
    title: "No shoot limitations",
    description: "CGI removes location, weather, and scheduling constraints.",
  },
];

export default function AboutPillars() {
  const staggerRef = useStaggerReveal<HTMLDivElement>(0.12);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div ref={staggerRef} className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {pillars.map((pillar, index) => (
              <div key={index}>
                <h3 className="mb-3 text-2xl font-medium text-[#2B2B2B] md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
