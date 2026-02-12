"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

const processSteps = [
  "Discover",
  "Design",
  "Develop",
  "Deliver",
];

export default function ProcessSection() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
      <Container>
        <h2 className="text-h2 mb-16 tracking-tight">Process</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 text-6xl font-display text-[#E6E6E6]" style={{ fontFamily: "var(--font-display)" }}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-h4">{step}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
