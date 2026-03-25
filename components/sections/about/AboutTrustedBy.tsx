"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";

/** Unique entries only — dedupe by logo path (same file = one slot). */
const clientsRaw = [
  { name: "LYS Beauty", logo: "/client-logos/LYS LOGO FINAL stacked BLACK OL.png" },
  { name: "Beauty Creations", logo: "/client-logos/beauty-creations_BLACK.png" },
  { name: "Canva", logo: "/client-logos/Canva-Logo.png" },
  { name: "Walmart", logo: "/client-logos/Wallmart-Wordmark-Standard-TrueBlue-RGB.png" },
  { name: "Popeyes", logo: "/client-logos/Popeyes_Logo_2020.svg" },
  { name: "Meta", logo: "/client-logos/Meta_lockup_positive primary_RGB.png" },
] as const;

function dedupeByLogo<T extends { logo: string }>(items: readonly T[]): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.logo)) return false;
    seen.add(item.logo);
    return true;
  });
}

const clients = dedupeByLogo(clientsRaw);

export default function AboutTrustedBy() {
  const staggerRef = useStaggerReveal<HTMLDivElement>(0.08);

  return (
    <section className="bg-white py-24 md:py-32 lg:py-36">
      <Container>
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="mb-10 text-center text-sm uppercase tracking-wider text-[#4A4A4A] md:mb-12">
            Brands that trust us
          </p>
          <div
            ref={staggerRef}
            className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-6"
          >
            {clients.map((client) => {
              const isMeta = client.name === "Meta";
              const isBeauty = client.name === "Beauty Creations";
              return (
                <div key={client.logo} className="flex min-h-[5rem] items-center justify-center px-2 md:min-h-[5.5rem]">
                  <div
                    className={`group flex w-full items-center justify-center ${
                      isBeauty ? "max-w-none" : "h-12 max-w-[152px] md:h-14"
                    }`}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={isMeta ? 128 : isBeauty ? 480 : 160}
                      height={isMeta ? 40 : isBeauty ? 180 : 64}
                      priority={isMeta || isBeauty}
                      className={`w-auto object-contain opacity-70 grayscale transition-[opacity] duration-[var(--duration-fast)] ease-[var(--ease-premium)] group-hover:opacity-100 ${
                        isMeta
                          ? "h-9 max-h-10 md:h-10"
                          : isBeauty
                            ? "max-h-[min(22vw,100px)] max-w-[min(92vw,320px)] sm:max-h-[min(18vw,120px)] sm:max-w-[min(85vw,280px)] md:max-h-[156px] md:max-w-[min(100%,300px)] lg:max-h-[180px] lg:max-w-[min(100%,400px)]"
                            : "h-10 max-h-12 md:h-12"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
