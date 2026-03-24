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
    <div
      className={`overflow-hidden rounded-2xl border border-[#2B2B2B]/[0.06] bg-black shadow-[0_20px_60px_-24px_rgba(0,0,0,0.25)] ${className}`}
    >
      <div className={`relative w-full ${innerClassName}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
