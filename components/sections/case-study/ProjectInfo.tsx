"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface ProjectInfoProps {
  title: string;
}

export default function ProjectInfo({ title }: ProjectInfoProps) {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-h1 tracking-tight">{title}</h1>
        </div>
      </Container>
    </section>
  );
}
