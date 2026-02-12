"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "../ui/Button";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

export default function CTABand() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="bg-[#2B2B2B] py-16 md:py-24 lg:py-[96px] xl:py-[140px] text-white">
      <Container>
        <div className="max-w-3xl text-center">
          <h2 className="text-h2 mb-8 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <Link href="/contact">
            <Button variant="secondary" className="bg-white text-[#2B2B2B] hover:bg-[#F7F7F7]">
              Get in Touch
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
