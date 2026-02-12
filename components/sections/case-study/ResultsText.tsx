"use client";

import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface ResultsTextProps {
  content: string;
}

export default function ResultsText({ content }: ResultsTextProps) {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-h2 mb-8 tracking-tight">Results</h2>
          <p className="text-body text-[#4A4A4A]">{content}</p>
        </div>
      </Container>
    </section>
  );
}
