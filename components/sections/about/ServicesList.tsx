"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

const services = [
  {
    title: "Brand & Product Films",
    description: "Cinematic storytelling that elevates your brand narrative.",
  },
  {
    title: "3D & Motion Design",
    description: "Dynamic visuals that bring concepts to life.",
  },
  {
    title: "Creative Direction",
    description: "Strategic vision that shapes exceptional experiences.",
  },
  {
    title: "Post-Production & Finishing",
    description: "Precision craft that polishes every detail.",
  },
  {
    title: "Visual Systems & Identity",
    description: "Cohesive design languages that define brands.",
  },
  {
    title: "Campaign Assets",
    description: "Compelling creative that drives engagement.",
  },
];

export default function ServicesList() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px] bg-white">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-h2 mb-6 tracking-tight">Services</h2>
          <p className="text-body mb-16 text-[#4A4A4A] max-w-2xl">
            We deliver premium creative solutions across multiple disciplines, each crafted with precision and purpose.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-[#E6E6E6] pb-8 last:border-b-0 last:pb-0"
              >
                <h3 className="text-h3 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-body text-[#4A4A4A]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
