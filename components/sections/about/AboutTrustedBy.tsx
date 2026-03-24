"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";

/** Unique entries only — dedupe by logo path (same file = one slot). */
const clientsRaw = [
  { name: "Beauty Creations", logo: "/client-logos/beauty-creations.png" },
  { name: "LYS Beauty", logo: "/client-logos/LYS LOGO FINAL stacked BLACK OL.png" },
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
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <div className="mx-auto w-full">
          <p className="mb-10 text-center text-sm uppercase tracking-wider text-[#4A4A4A] md:mb-12">
            Trusted by leading brands
          </p>
          <div
            ref={staggerRef}
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6"
          >
            {clients.map((client) => {
              const isMeta = client.name === "Meta";
              const isBeauty = client.name === "Beauty Creations";
              return (
                <div
                  key={client.logo}
                  className={`flex items-center justify-center px-2 ${
                    isBeauty
                      ? "min-h-[7rem] col-span-2 sm:col-span-1 sm:min-h-[4.5rem] lg:min-h-[5.5rem]"
                      : "min-h-[4.5rem]"
                  }`}
                >
                  <div
                    className={`group flex w-full items-center justify-center ${
                      isBeauty
                        ? "max-w-[min(92vw,360px)] sm:max-w-full"
                        : "h-12 max-w-[140px] md:h-14"
                    }`}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={isMeta ? 120 : isBeauty ? 480 : 160}
                      height={isMeta ? 36 : isBeauty ? 180 : 64}
                      priority={isMeta || isBeauty}
                      className={`w-auto max-w-full object-contain opacity-55 grayscale transition-[opacity,filter] duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
                        isMeta
                          ? "h-9 max-h-10 md:h-10"
                          : isBeauty
                            ? "max-h-[min(22vw,96px)] sm:max-h-[120px] md:max-h-[150px] lg:max-h-[180px]"
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
