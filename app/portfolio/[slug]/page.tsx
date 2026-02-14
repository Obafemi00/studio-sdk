import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HeroMedia from "@/components/sections/case-study/HeroMedia";
import ProjectInfo from "@/components/sections/case-study/ProjectInfo";
import Gallery from "@/components/sections/case-study/Gallery";
import ResultsText from "@/components/sections/case-study/ResultsText";
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

  return (
    <>
      <PageTransition>
      <main>
        <HeroMedia
            mediaType={project.heroMediaType || project.mediaType}
            mediaSrc={project.heroMediaSrc || project.mediaSrc}
          alt={project.title}
        />
        <ProjectInfo
          title={project.title}
            role={project.role || "Creative Direction, Design"}
            tools={project.tools || ["Figma", "After Effects", "Cinema 4D"]}
        />
          <Gallery items={project.gallery || []} />
          <ResultsText content={project.results || "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences."} />
          <ProjectNav
            prevProject={prevProject}
            nextProject={nextProject}
          />
      </main>
      </PageTransition>
      <Footer />
    </>
  );
}
