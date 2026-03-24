"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface ProjectInfoProps {
  title: string;
}

export default function ProjectInfo({ title }: ProjectInfoProps) {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="bg-white pt-24 pb-8 md:pt-28 md:pb-10 lg:pt-36 lg:pb-12">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-h1 tracking-tight text-[#2B2B2B]">{title}</h1>
        </div>
      </Container>
    </section>
  );
}
