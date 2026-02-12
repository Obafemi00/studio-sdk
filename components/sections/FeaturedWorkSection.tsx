"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface WorkCard {
  id: string;
  title: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  slug: string;
}

const featuredWork: WorkCard[] = [
  { id: "1", title: "Project Alpha", mediaType: "image", mediaSrc: "/images/work-1.jpg", slug: "project-alpha" },
  { id: "2", title: "Project Beta", mediaType: "video", mediaSrc: "/videos/work-2.mp4", slug: "project-beta" },
  { id: "3", title: "Project Gamma", mediaType: "image", mediaSrc: "/images/work-3.jpg", slug: "project-gamma" },
  { id: "4", title: "Project Delta", mediaType: "image", mediaSrc: "/images/work-4.jpg", slug: "project-delta" },
  { id: "5", title: "Project Epsilon", mediaType: "video", mediaSrc: "/videos/work-5.mp4", slug: "project-epsilon" },
  { id: "6", title: "Project Zeta", mediaType: "image", mediaSrc: "/images/work-6.jpg", slug: "project-zeta" },
];

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
