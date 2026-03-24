import Image from "next/image";

interface HeroMediaProps {
  mediaType: "image" | "video";
  mediaSrc: string;
  alt?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      if (parsed.pathname.startsWith("/shorts/")) {
        const id = parsed.pathname.split("/").filter(Boolean)[1];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
    }
  } catch {
    return null;
  }
  return null;
}

export default function HeroMedia({ mediaType, mediaSrc, alt = "Project hero" }: HeroMediaProps) {
  const youtubeEmbed = mediaType === "video" ? getYouTubeEmbedUrl(mediaSrc) : null;

  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-[#2B2B2B]">
      {mediaType === "image" ? (
        <Image
          src={mediaSrc}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
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
          className="h-full w-full object-cover"
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      )}
    </section>
  );
}
