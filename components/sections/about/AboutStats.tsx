import Container from "@/components/ui/Container";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Brands Trust Us" },
  { value: "24/7", label: "Global Delivery" },
];

export default function AboutStats() {
  return (
    <section className="border-y border-[#E6E6E6] bg-white py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="mb-2 text-3xl font-display tracking-tight text-[#2B2B2B] md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </div>
                <p className="text-sm text-[#4A4A4A] md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
