import Image from "next/image";
import { buildYouTubeEmbedUrl } from "@/lib/youtube";

interface HeroMediaProps {
  mediaType: "image" | "video";
  mediaSrc: string;
  alt?: string;
}

export default function HeroMedia({ mediaType, mediaSrc, alt = "Project hero" }: HeroMediaProps) {
  const youtubeEmbed =
    mediaType === "video"
      ? buildYouTubeEmbedUrl(mediaSrc, {
          autoplay: true,
          mute: true,
          loop: true,
          controls: false,
        })
      : null;

  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-[#2B2B2B]">
      {mediaType === "image" ? (
        <Image src={mediaSrc} alt={alt} fill className="object-cover" priority />
      ) : youtubeEmbed ? (
        <iframe
          src={youtubeEmbed}
          title={alt}
          className="h-full w-full"
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
          className="h-full w-full object-cover"
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      )}
    </section>
  );
}
