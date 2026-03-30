import Container from "@/components/ui/Container";
import { buildYouTubeEmbedUrl } from "@/lib/youtube";

interface ProjectVideoSectionProps {
  videoSrc: string;
  title: string;
}

export default function ProjectVideoSection({ videoSrc, title }: ProjectVideoSectionProps) {
  const embedUrl = buildYouTubeEmbedUrl(videoSrc, {
    autoplay: true,
    mute: true,
    loop: true,
    controls: false,
  });

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="relative mx-auto h-[60vh] w-full max-w-[1280px] overflow-hidden bg-[#000]">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              className="absolute inset-0 h-full w-full"
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
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      </Container>
    </section>
  );
}
