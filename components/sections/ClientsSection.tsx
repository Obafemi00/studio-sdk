import Image from "next/image";
import Container from "@/components/ui/Container";

const clientLogos = [
  { name: "Client 1", logo: "/client-logos/client-1.png" },
  { name: "Client 2", logo: "/client-logos/client-2.png" },
  { name: "Client 3", logo: "/client-logos/client-3.png" },
  { name: "Client 4", logo: "/client-logos/client-4.png" },
  { name: "Client 5", logo: "/client-logos/client-5.png" },
  { name: "Client 6", logo: "/client-logos/client-6.png" },
];

export default function ClientsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-[96px] xl:py-[140px] bg-[#F7F7F7]">
      <Container>
        <h2 className="text-h2 mb-16 tracking-tight">Brands That Trust Us</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale transition-opacity duration-300 hover:opacity-60"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="h-auto w-full max-w-[120px] object-contain opacity-50"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
