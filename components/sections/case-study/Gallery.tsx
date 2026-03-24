"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";
import { buildYouTubeEmbedUrl } from "@/lib/youtube";

interface GalleryItem {
  id: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  alt?: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const staggerRef = useStaggerReveal<HTMLDivElement>(0.12);

  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32 lg:py-40">
      <Container>
        <div ref={staggerRef} className="mx-auto flex w-full max-w-[800px] flex-col gap-12 md:gap-16">
          {items.map((item) => {
            const youtubeEmbed =
              item.mediaType === "video"
                ? buildYouTubeEmbedUrl(item.mediaSrc, {
                    autoplay: false,
                    mute: true,
                    loop: true,
                    controls: false,
                  })
                : null;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#2B2B2B]/[0.05] bg-[#EAEAEA]/60 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.18)]"
              >
                {item.mediaType === "image" ? (
                  <Image
                    src={item.mediaSrc}
                    alt={item.alt || "Gallery image"}
                    width={832}
                    height={468}
                    className="mx-auto h-auto w-full max-w-full object-cover"
                  />
                ) : youtubeEmbed ? (
                  <div className="relative aspect-video w-full bg-black">
                    <iframe
                      src={youtubeEmbed}
                      title={item.alt || "Gallery video"}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="mx-auto h-auto w-full object-cover"
                  >
                    <source src={item.mediaSrc} type="video/mp4" />
                  </video>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
