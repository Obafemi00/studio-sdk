"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

const services = [
  { title: "Brand Identity", description: "Visual storytelling" },
  { title: "Digital Design", description: "User experiences" },
  { title: "Creative Direction", description: "Strategic vision" },
  { title: "Art Direction", description: "Visual excellence" },
];

export default function ServicesSection() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px] bg-[#F7F7F7]">
      <Container>
        <h2 className="text-h2 mb-16 tracking-tight">Services</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-h3 mb-2">{service.title}</h3>
              <p className="text-body text-[#4A4A4A]">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
