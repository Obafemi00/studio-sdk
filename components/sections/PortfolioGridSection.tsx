"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface PortfolioItem {
  id: string;
  title: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  slug: string;
}

// Simulated portfolio items (in real app, this would come from a data source)
const portfolioItems: PortfolioItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  title: `Project ${String.fromCharCode(65 + (i % 26))}`,
  mediaType: i % 3 === 0 ? "video" : "image",
  mediaSrc: i % 3 === 0 ? `/videos/work-${(i % 6) + 1}.mp4` : `/images/work-${(i % 6) + 1}.jpg`,
  slug: `project-${String.fromCharCode(97 + (i % 26))}`,
}));

export default function PortfolioGridSection() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
      <Container>
        <h1 className="text-h2 mb-16 tracking-tight">Portfolio</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href={`/portfolio/${item.slug}`}
              className="group block overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F7F7]">
                {item.mediaType === "image" ? (
                  <Image
                    src={item.mediaSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={item.mediaSrc} type="video/mp4" />
                  </video>
                )}
              </div>
              <h2 className="mt-4 text-h4">{item.title}</h2>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
