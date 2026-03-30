"use client";
import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";

const logoHeights: Record<string, string> = {
  "LYS Beauty": "h-10 md:h-12",
  "Beauty Creations": "h-20 md:h-24",
  "Canva": "h-10 md:h-12",
  "Walmart": "h-4 md:h-5",
  "Popeyes": "h-5 md:h-6",
  "Meta": "h-7 md:h-9",
};

const clientsRaw = [
  { name: "LYS Beauty",         logo: "/client-logos/LYS LOGO FINAL stacked BLACK OL.png",          height: "h-12 md:h-14" },
  { name: "Beauty Creations",   logo: "/client-logos/beauty-creations_BLACK.png",                    height: "h-8 md:h-10"  },
  { name: "Canva",              logo: "/client-logos/Canva-Logo.png",                                height: "h-8 md:h-10"  },
  { name: "Walmart",            logo: "/client-logos/Wallmart-Wordmark-Standard-TrueBlue-RGB.png",   height: "h-8 md:h-10"  },
  { name: "Popeyes",            logo: "/client-logos/Popeyes_Logo_2020.svg",                         height: "h-10 md:h-12" },
  { name: "Meta",               logo: "/client-logos/Meta_lockup_positive primary_RGB.png",          height: "h-7 md:h-9"   },
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
    <section className="bg-white pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-24 lg:pb-36">
      <Container>
        <div className="mx-auto w-full max-w-[1200px]">
          <p className="mb-10 text-center text-sm uppercase tracking-wider text-[#4A4A4A] md:mb-12">
            Brands that trust us
          </p>
          <div
            ref={staggerRef}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {clients.map((client) => (
              <div key={client.logo} className="group flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${logoHeights[client.name]} w-auto object-contain grayscale opacity-60 transition-[opacity,filter] duration-[var(--duration-fast)] ease-[var(--ease-premium)] group-hover:opacity-100 group-hover:grayscale-0`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}