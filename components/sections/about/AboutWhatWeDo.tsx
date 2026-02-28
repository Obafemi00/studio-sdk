import Container from "@/components/ui/Container";

export default function AboutWhatWeDo() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-[#4A4A4A]">What we do</p>
          <div className="space-y-6 text-lg leading-relaxed text-[#2B2B2B] md:text-xl">
            <p>
              Studio SDK exists for brands that need their product to look premium every single time.
            </p>
            <p>
              We create cinematic CGI product films and stills that elevate perception, improve ad performance, and keep your content pipeline consistent. 
            </p>
            <p>
              Our process removes the usual friction, no last-minute shoots or location limitations. The outcome is simple, stronger brand perception, faster campaigns, and a content library you can keep using.
            </p>
          </div>
          <p className="mt-8 text-base text-[#4A4A4A] md:text-lg">
            UK-based, global delivery. Built for beauty, lifestyle, and consumer brands.
          </p>
        </div>
      </Container>
    </section>
  );
}
