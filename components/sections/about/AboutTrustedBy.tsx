"use client";

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
            className="grid grid-cols-2 gap-y-12 gap-x-10 place-items-center md:grid-cols-3"
          >
            {clients.map((client) => {
              {/* 
                IMPORTANT:
                Do NOT remove individual scale values.
                Logos are visually normalized manually.
                Changing to uniform scaling will break visual balance.
              */}
              const scaleClass =
                client.name === "Walmart"
                  ? "scale-[0.9]"
                  : client.name === "Popeyes"
                    ? "scale-[0.9]"
                    : client.name === "Canva"
                      ? "scale-[1.05]"
                      : client.name === "Beauty Creations"
                        ? "scale-[2]"
                        : client.name === "LYS Beauty"
                          ? "scale-[0.95]"
                          : "";

              return (
                <div
                  key={client.logo}
                  className={`h-12 md:h-14 flex items-center justify-center ${
                    client.name === "Beauty Creations" ? "overflow-visible" : ""
                  }`}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`max-h-full w-auto object-contain grayscale opacity-70 transition-[opacity,filter,transform] duration-[var(--duration-fast)] ease-[var(--ease-premium)] group-hover:opacity-100 group-hover:grayscale-0 ${scaleClass}`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
