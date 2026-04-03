import Container from "@/components/ui/Container";

const logoWidths: Record<string, string> = {
  "Beauty Creations": "max-w-[140px]",
  "Meta": "max-w-[100px]",
  "LYS Beauty": "max-w-[80px]",
  "Canva": "max-w-[90px]",
  "Walmart": "max-w-[110px]",
  "Popeyes": "max-w-[110px]",
};

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
      <Container className="flex max-w-[1200px] flex-col overflow-x-clip py-16 lg:py-24">
        <header className="pt-4 md:pt-8">
          <h2 className="font-display text-3xl tracking-tight text-[#2B2B2B] md:text-4xl">
            Brands That Trust Us
          </h2>
        </header>
        <div className="mt-12 flex flex-col items-center">
          <div className="grid w-full max-w-[900px] grid-cols-2 gap-8 place-items-center sm:gap-10 lg:grid-cols-3 lg:gap-12">
            {clientLogos.map((client, index) => (
              <div
                key={client.src}
                className={`flex items-center justify-center ${logoWidths[client.alt]}`}
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-full h-auto object-contain grayscale opacity-55"
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