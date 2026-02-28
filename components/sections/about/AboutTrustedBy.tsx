"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";

const clients = [
  { name: "BEAUTY CREATIONS", logo: "/client-logos/beauty-creations.png" },
  { name: "LYS BEAUTY", logo: "/client-logos/LYS LOGO FINAL stacked BLACK OL.png" },
  { name: "MGAE", logo: "/client-logos/Canva-Logo.png" }, // Using Canva as placeholder for MGAE
  { name: "CANVA", logo: "/client-logos/Canva-Logo.png" },
  { name: "WALMART", logo: "/client-logos/Wallmart-Wordmark-Standard-TrueBlue-RGB.png" },
  { name: "POPEYES", logo: "/client-logos/Popeyes_Logo_2020.svg" },
  { name: "META", logo: "/client-logos/Meta_lockup_positive primary_RGB.png" },
];

export default function AboutTrustedBy() {
  const staggerRef = useStaggerReveal<HTMLDivElement>(0.08);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className="mb-12 text-center text-sm uppercase tracking-wider text-[#4A4A4A] md:mb-16">
            Trusted by leading brands
          </p>
          <div ref={staggerRef} className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center opacity-60 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-auto w-full max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
