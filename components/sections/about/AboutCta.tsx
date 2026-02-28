import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutCta() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-6 text-4xl font-display tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to elevate your product imagery?
          </h2>
          <p className="mb-10 text-lg text-[#4A4A4A] md:text-xl">
            Let's create premium content that drives results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#2B2B2B] px-8 py-3 text-sm font-medium text-[#2B2B2B] transition-colors hover:bg-[#2B2B2B] hover:text-white"
          >
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
}
