"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface ProjectInfoProps {
  title: string;
  role: string;
  tools: string[];
}

export default function ProjectInfo({ title, role, tools }: ProjectInfoProps) {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-h1 mb-8 tracking-tight">{title}</h1>
          <div className="space-y-4">
            <div>
              <h3 className="text-h4 mb-2">Role</h3>
              <p className="text-body text-[#4A4A4A]">{role}</p>
            </div>
            <div>
              <h3 className="text-h4 mb-2">Tools</h3>
              <p className="text-body text-[#4A4A4A]">{tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
