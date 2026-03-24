import Image from "next/image";
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
    <section className="relative min-h-screen overflow-x-hidden bg-[#F6F4EF]">
      <Container className="flex min-h-screen max-w-[1200px] flex-col overflow-x-hidden py-20 md:py-28">
        <header className="pt-4 md:pt-8">
          <h2 className="font-display text-3xl tracking-tight text-[#2B2B2B] md:text-4xl">
            Brands That Trust Us
          </h2>
        </header>

        <div className="mt-16 flex flex-1 flex-col items-center justify-center md:mt-24">
          <div
            className="grid w-full max-w-4xl grid-cols-2 items-center justify-items-center md:grid-cols-3"
            style={{
              rowGap: "3rem",
              columnGap: "4rem",
              minWidth: 0,
            }}
          >
            {clientLogos.map((client, index) => {
              const isMeta = client.alt === "Meta";
              const isBeauty = client.alt === "Beauty Creations";
              return (
                <div
                  key={client.src}
                  className="group flex min-w-0 w-full items-center justify-center"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={isMeta ? 120 : 160}
                    height={isMeta ? 36 : 60}
                    priority={isMeta || isBeauty || index < 2}
                    className={`w-auto object-contain grayscale opacity-60 transition-all duration-300 group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:opacity-100 ${
                      isMeta ? "h-9 max-w-[120px] md:h-10" : "h-[52px] max-w-[160px] md:h-[60px]"
                    }`}
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
