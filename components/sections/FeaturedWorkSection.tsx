"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";
import { projects } from "@/lib/projects";

// Featured work is first 6 projects
const featuredWork = projects.slice(0, 6);

export default function FeaturedWorkSection() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
      <Container>
        <h2 className="text-h2 mb-16 tracking-tight">Featured Work</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredWork.map((item) => (
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
              <h3 className="mt-4 text-h4">{item.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
