import Image from "next/image";

interface HeroMediaProps {
  mediaType: "image" | "video";
  mediaSrc: string;
  alt?: string;
}

export default function HeroMedia({ mediaType, mediaSrc, alt = "Project hero" }: HeroMediaProps) {
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
