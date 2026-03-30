import Container from "@/components/ui/Container";

const logoHeights: Record<string, string> = {
  "LYS Beauty": "h-10 md:h-12",
  "Beauty Creations": "h-20 md:h-24",
  "Canva": "h-10 md:h-12",
  "Walmart": "h-4 md:h-5",
  "Popeyes": "h-5 md:h-6",
  "Meta": "h-7 md:h-9",
};

const clientLogos = [
  { src: "/client-logos/beauty-creations_BLACK.png", alt: "Beauty Creations", height: "h-8 md:h-10" },
  { src: "/client-logos/Meta_lockup_positive primary_RGB.png", alt: "Meta", height: "h-7 md:h-9" },
  { src: "/client-logos/LYS LOGO FINAL stacked BLACK OL.png", alt: "LYS Beauty", height: "h-12 md:h-14" },
  { src: "/client-logos/Canva-Logo.png", alt: "Canva", height: "h-8 md:h-10" },
  { src: "/client-logos/Wallmart-Wordmark-Standard-TrueBlue-RGB.png", alt: "Walmart", height: "h-8 md:h-10" },
  { src: "/client-logos/Popeyes_Logo_2020.svg", alt: "Popeyes", height: "h-10 md:h-12" },
];

export default function ClientsSection() {
  return (
    <section className="relative overflow-x-clip bg-[#F6F4EF]">
      <Container className="flex max-w-[1200px] flex-col overflow-x-clip py-16 lg:py-24">
        <header className="pt-4 md:pt-8">
          <h2 className="font-display text-3xl tracking-tight text-[#2B2B2B] md:text-4xl">
            Brands That Trust Us
          </h2>
        </header>
        <div className="mt-16 flex flex-col items-center md:mt-24">
          <div className="grid max-w-4xl w-full grid-cols-1 gap-y-12 gap-x-10 place-items-center sm:grid-cols-2 lg:grid-cols-3">
            {clientLogos.map((client, index) => (
              <div
                key={client.src}
                className="group flex items-center justify-center"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`${logoHeights[client.alt]} w-auto object-contain grayscale opacity-60 transition-[opacity,filter] duration-[var(--duration-fast)] ease-[var(--ease-premium)] group-hover:opacity-100 group-hover:grayscale-0`}
                  loading={index < 2 ? "eager" : "lazy"}
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