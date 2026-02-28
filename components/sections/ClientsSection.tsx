import Image from "next/image";

const clientLogos = [
  { src: "/client-logos/beauty-creations.png", alt: "Beauty Creations" },
  { src: "/client-logos/Meta_lockup_positive primary_RGB.png", alt: "Meta" },
  { src: "/client-logos/LYS LOGO FINAL stacked BLACK OL.png", alt: "LYS Beauty" },
  { src: "/client-logos/Canva-Logo.png", alt: "Canva" },
  { src: "/client-logos/Wallmart-Wordmark-Standard-TrueBlue-RGB.png", alt: "Walmart" },
  { src: "/client-logos/Popeyes_Logo_2020.svg", alt: "Popeyes" },
];

export default function ClientsSection() {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-[#F6F4EF]">
      <div className="mx-auto max-w-6xl px-6 flex min-h-screen flex-col overflow-x-hidden">
        <header className="pt-16">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-[#2B2B2B]">
            Brands That Trust Us
          </h2>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center mt-16">
          <div
            className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 justify-items-center items-center"
            style={{
              rowGap: "3rem",
              columnGap: "4rem",
              minWidth: 0,
            }}
          >
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center min-w-0 w-full"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={160}
                  height={60}
                  className="h-[60px] w-auto max-w-[160px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
