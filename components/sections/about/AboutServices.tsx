"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const services = [
  {
    title: "Hero Product Launch Film + Stills",
    body: "Make your product feel premium and launch-worthy. A single hero piece that boosts perceived value, anchors your campaign, and sets a consistent visual standard across every touchpoint — plus a bank of elevated stills when you need them.",
  },
  {
    title: "CGI + Live Footage (VFX Integration)",
    body: "Blend realism and fantasy in the same frame. Ideal when live-action brings humanity while CGI keeps the product flawless, controlled, and larger than life.",
  },
  {
    title: "Monthly Imagery Pipeline (Retainer)",
    body: "A predictable rhythm of premium content: less scramble, more consistency, and a compounding library your teams can pull from all year.",
  },
];

export default function AboutServices() {
  return (
    <section className="border-t border-[#2B2B2B]/[0.06] bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 lg:pb-8">
              <h2
                className="text-4xl font-display tracking-tight md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Services
              </h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
                Cinematic product storytelling, precision-built for performance-led brands.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center rounded-full border border-[#2B2B2B] px-8 py-3 text-sm font-medium text-[#2B2B2B] transition-colors hover:bg-[#2B2B2B] hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`group border-t border-[#2B2B2B]/10 py-12 transition-[opacity,transform] duration-300 first:border-t-0 first:pt-0 md:py-14 ${
                    index === services.length - 1 ? "pb-0" : ""
                  } hover:opacity-[0.92] md:hover:-translate-y-0.5`}
                >
                  <h3 className="text-2xl font-medium tracking-tight text-[#2B2B2B] md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                    {service.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
