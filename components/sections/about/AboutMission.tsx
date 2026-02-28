import Container from "@/components/ui/Container";

export default function AboutMission() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-[#4A4A4A]">Mission</p>
          <h2
            className="mb-6 text-4xl font-display tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Premium product imagery, every single time.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
            <p>
              Studio SDK exists for brands that need their product to look premium every single time. We remove the usual friction—no last-minute shoots or location limitations.
            </p>
            <p>
              The outcome is simple: stronger brand perception, faster campaigns, and a content library you can keep using.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
