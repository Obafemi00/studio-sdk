import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HeroMedia from "@/components/sections/case-study/HeroMedia";
import ProjectInfo from "@/components/sections/case-study/ProjectInfo";
import Gallery from "@/components/sections/case-study/Gallery";
import ProjectNav from "@/components/sections/case-study/ProjectNav";
import { projects, getProjectBySlug, getProjectIndex } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Compute prev/next with wrap-around
  const currentIndex = getProjectIndex(slug);
  const total = projects.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];
  const galleryItems = project.gallery || [];
  const firstVideoInGallery = galleryItems.find((item) => item.mediaType === "video");
  const detailVideo = project.heroMediaType === "video"
    ? { mediaType: "video" as const, mediaSrc: project.heroMediaSrc || project.mediaSrc }
    : firstVideoInGallery
      ? { mediaType: "video" as const, mediaSrc: firstVideoInGallery.mediaSrc }
      : null;
  const imageGalleryItems = galleryItems.filter((item) => item.mediaType === "image");
  const fallbackHeroMediaType = project.heroMediaType || project.mediaType;
  const fallbackHeroMediaSrc = project.heroMediaSrc || project.mediaSrc;

  return (
    <>
      <PageTransition>
        <main>
          {detailVideo ? (
            <HeroMedia
              mediaType={detailVideo.mediaType}
              mediaSrc={detailVideo.mediaSrc}
              alt={project.title}
            />
          ) : (
            <HeroMedia
              mediaType={fallbackHeroMediaType}
              mediaSrc={fallbackHeroMediaSrc}
              alt={project.title}
            />
          )}
          <ProjectInfo title={project.title} />
          <Gallery items={imageGalleryItems} />
          <ProjectNav prevProject={prevProject} nextProject={nextProject} />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
