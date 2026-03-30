import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HeroMedia from "@/components/sections/case-study/HeroMedia";
import ProjectInfo from "@/components/sections/case-study/ProjectInfo";
import Gallery from "@/components/sections/case-study/Gallery";
import ProjectVideoSection from "@/components/sections/case-study/ProjectVideoSection";
import ProjectNav from "@/components/sections/case-study/ProjectNav";
import { projects, getProjectBySlug, getProjectIndex } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatMetadata(title: string) {
  const parts = title.split("|").map((part) => part.trim());
  if (parts.length === 2) {
    return `${parts[0]} · 2024 · ${parts[1]}`;
  }

  return "CLIENT · YEAR · CATEGORY";
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = getProjectIndex(slug);
  const total = projects.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  const galleryItems = project.gallery || [];
  const firstVideoInGallery = galleryItems.find((item) => item.mediaType === "video");
  const detailVideoSrc =
    project.heroMediaType === "video"
      ? project.heroMediaSrc || project.mediaSrc
      : firstVideoInGallery
        ? firstVideoInGallery.mediaSrc
        : null;

  const hasImages = galleryItems.length > 0;
  const hasVideo = Boolean(detailVideoSrc);
  const metadata = formatMetadata(project.title);
  const heroMediaType = project.youtube ? "video" : project.heroMediaType ?? project.mediaType;
  const heroMediaSrc = project.youtube ?? project.heroMediaSrc ?? project.mediaSrc;
  const heroMediaIsShort = project.isShort ?? false;

  return (
    <>
      <PageTransition>
        <main>
          <HeroMedia mediaType={heroMediaType} mediaSrc={heroMediaSrc} alt={project.title} isShort={heroMediaIsShort} />
          <ProjectInfo title={project.title} metadata={metadata} />

          {hasImages && <Gallery items={galleryItems} />}

          {!hasImages && hasVideo && detailVideoSrc && heroMediaType !== "video" ? (
            <ProjectVideoSection videoSrc={detailVideoSrc} title={project.title} />
          ) : null}

          <ProjectNav prevProject={prevProject} nextProject={nextProject} />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
