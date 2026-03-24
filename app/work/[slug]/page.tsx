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

  const imageGalleryItems = galleryItems.filter((item) => item.mediaType === "image");
  const hasImages = imageGalleryItems.length > 0;
  const hasVideo = Boolean(detailVideoSrc);

  return (
    <>
      <PageTransition>
        <main>
          {/* Video-only: title + cinematic embed (no image gallery) */}
          {hasVideo && !hasImages ? (
            <>
              <ProjectInfo title={project.title} />
              <ProjectVideoSection videoSrc={detailVideoSrc!} title={project.title} />
            </>
          ) : null}

          {/* Title → YouTube → images */}
          {hasImages ? (
            <>
              <ProjectInfo title={project.title} />
              {hasVideo && detailVideoSrc ? (
                <ProjectVideoSection videoSrc={detailVideoSrc} title={project.title} />
              ) : null}
              {imageGalleryItems.length > 0 ? <Gallery items={imageGalleryItems} /> : null}
            </>
          ) : null}

          {/* Stills-only edge case */}
          {!hasImages && !hasVideo ? (
            <>
              <HeroMedia
                mediaType={project.heroMediaType || project.mediaType}
                mediaSrc={project.heroMediaSrc || project.mediaSrc}
                alt={project.title}
              />
              <ProjectInfo title={project.title} />
            </>
          ) : null}

          <ProjectNav prevProject={prevProject} nextProject={nextProject} />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
