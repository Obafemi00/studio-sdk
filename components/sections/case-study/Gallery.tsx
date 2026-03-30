"use client";

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
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 w-full">
        {items.map((item) => {
          const youtubeEmbed =
            item.mediaType === "video"
              ? buildYouTubeEmbedUrl(item.mediaSrc, {
                  autoplay: true,
                  mute: true,
                  loop: true,
                  controls: false,
                })
              : null;

          return (
            <div key={item.id} className="h-[75vh] overflow-hidden">
              {item.mediaType === "image" ? (
                <img
                  src={item.mediaSrc}
                  alt={item.alt || "Gallery image"}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : youtubeEmbed ? (
                <iframe
                  src={youtubeEmbed}
                  title={item.alt || "Gallery video"}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src={item.mediaSrc} type="video/mp4" />
                </video>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
