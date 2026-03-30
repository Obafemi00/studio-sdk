"use client";

import { useEffect, useState } from "react";
import { buildYouTubeEmbedUrl } from "@/lib/youtube";
import { useReducedMotion } from "@/lib/motion";

interface HeroMediaProps {
  mediaType: "image" | "video";
  mediaSrc: string;
  alt?: string;
  isShort?: boolean;
}

export default function HeroMedia({ mediaType, mediaSrc, alt = "Project hero", isShort = false }: HeroMediaProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const youtubeEmbed =
    mediaType === "video"
      ? buildYouTubeEmbedUrl(mediaSrc, {
          autoplay: true,
          mute: true,
          loop: true,
          controls: false,
        })
      : null;

  const iframeStyle = {
    width: isShort ? "56.25vh" : "100vw",
    height: isShort ? "100vh" : "56.25vw",
    minWidth: isShort ? "100vw" : "177.78vh",
    minHeight: "100vh",
  };

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-[#2B2B2B]">
      {mediaType === "video" && youtubeEmbed ? (
        <div className="absolute inset-0 w-screen h-screen overflow-hidden">
          <iframe
            src={youtubeEmbed}
            title={alt}
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={iframeStyle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : null}

      <div
        className={`pointer-events-none absolute bottom-[40px] left-1/2 z-10 flex flex-col items-center gap-2 transition-opacity duration-600 ${
          hasScrolled ? "opacity-0" : "opacity-100"
        }`}
        style={{ transform: "translateX(-50%)" }}
      >
        <span
          className="text-[11px] uppercase tracking-[0.2em] text-white"
          style={{ fontFamily: "var(--sdk-font-body)", opacity: 0.7 }}
        >
          scroll
        </span>
        <div
          className={prefersReducedMotion ? "" : "animate-scrollPulse"}
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0))",
          }}
        />
      </div>

      <style jsx>{`
        .animate-hero-pulse {
          animation: hero-pulse 1.6s ease-in-out infinite;
        }

        @keyframes hero-pulse {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }

          50% {
            transform: translateY(4px);
            opacity: 0.35;
          }
        }

        .animate-scrollPulse {
          animation: scrollPulse 1.5s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0% {
            transform: scaleY(0);
            transform-origin: top;
            opacity: 1;
          }

          100% {
            transform: scaleY(1);
            transform-origin: top;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
