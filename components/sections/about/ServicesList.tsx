"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

const services = [
  "Brand Identity",
  "Digital Design",
  "Creative Direction",
  "Art Direction",
  "Visual Strategy",
  "Content Creation",
];

export default function ServicesList() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px] bg-[#F7F7F7]">
      <Container>
        <h2 className="text-h2 mb-16 tracking-tight">Services</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="text-h4">
              {service}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
