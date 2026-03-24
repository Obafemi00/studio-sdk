import Container from "@/components/ui/Container";
import YouTubePremiumFrame from "@/components/ui/YouTubePremiumFrame";

interface ProjectVideoSectionProps {
  videoSrc: string;
  title: string;
}

export default function ProjectVideoSection({ videoSrc, title }: ProjectVideoSectionProps) {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto w-full max-w-4xl">
          <YouTubePremiumFrame videoSrc={videoSrc} title={title} />
        </div>
      </Container>
    </section>
  );
}
