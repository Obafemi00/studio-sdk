import { buildYouTubeEmbedUrl, type YouTubeEmbedOptions } from "@/lib/youtube";

interface YouTubePremiumFrameProps {
  videoSrc: string;
  title: string;
  /** Extra classes on outer chrome (border, radius, shadow) */
  className?: string;
  /** Classes on the responsive iframe box (default: aspect-video) */
  innerClassName?: string;
  embedOptions?: YouTubeEmbedOptions;
}

export default function YouTubePremiumFrame({
  videoSrc,
  title,
  className = "",
  innerClassName = "aspect-video",
  embedOptions,
}: YouTubePremiumFrameProps) {
  const embedUrl = buildYouTubeEmbedUrl(videoSrc, {
    autoplay: true,
    mute: true,
    loop: true,
    controls: false,
    ...embedOptions,
  });

  if (!embedUrl) return null;

  return (
    <div className={`relative w-full aspect-video overflow-hidden rounded-none ${className}`}>
      <div className={`relative w-full h-full ${innerClassName}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
