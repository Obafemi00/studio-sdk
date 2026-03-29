import Container from "@/components/ui/Container";

const clientLogos = [
  { src: "/client-logos/beauty-creations_BLACK.png", alt: "Beauty Creations" },
  { src: "/client-logos/Meta_lockup_positive primary_RGB.png", alt: "Meta" },
  { src: "/client-logos/LYS LOGO FINAL stacked BLACK OL.png", alt: "LYS Beauty" },
  { src: "/client-logos/Canva-Logo.png", alt: "Canva" },
  { src: "/client-logos/Wallmart-Wordmark-Standard-TrueBlue-RGB.png", alt: "Walmart" },
  { src: "/client-logos/Popeyes_Logo_2020.svg", alt: "Popeyes" },
];

export default function ClientsSection() {
  return (
    <section className="relative overflow-x-clip bg-[#F6F4EF]">
      <Container className="flex max-w-[1200px] flex-col overflow-x-clip py-24 md:py-32">
        <header className="pt-4 md:pt-8">
          <h2 className="font-display text-3xl tracking-tight text-[#2B2B2B] md:text-4xl">
            Brands That Trust Us
          </h2>
        </header>

        <div className="mt-16 flex flex-col items-center md:mt-24">
          <div
            className="grid max-w-4xl w-full grid-cols-2 gap-y-12 gap-x-10 place-items-center md:grid-cols-3"
          >
            {clientLogos.map((client, index) => {
              {/* 
                IMPORTANT:
                Do NOT remove individual scale values.
                Logos are visually normalized manually.
                Changing to uniform sizing will break visual balance.
              */}
              const scaleClass =
                client.alt === "Walmart"
                  ? "scale-[0.9]"
                  : client.alt === "Popeyes"
                    ? "scale-[0.9]"
                    : client.alt === "Canva"
                      ? "scale-[1.05]"
                      : client.alt === "Beauty Creations"
                        ? "scale-[2]"
                        : client.alt === "LYS Beauty"
                          ? "scale-[0.95]"
                          : "";

              return (
                <div
                  key={client.src}
                  className="group flex items-center justify-center"
                >
                  <div
                    className={`h-12 md:h-14 flex items-center justify-center ${
                      client.alt === "Beauty Creations" ? "overflow-visible" : ""
                    }`}
                  >
                    <img
                      src={client.src}
                      alt={client.alt}
                      className={`max-h-full w-auto object-contain grayscale opacity-60 transition-[opacity,filter,transform] duration-[var(--duration-fast)] ease-[var(--ease-premium)] group-hover:opacity-100 group-hover:grayscale-0 ${scaleClass}`}
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
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
