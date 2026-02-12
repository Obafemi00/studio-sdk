import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HeroMedia from "@/components/sections/case-study/HeroMedia";
import ProjectInfo from "@/components/sections/case-study/ProjectInfo";
import Gallery from "@/components/sections/case-study/Gallery";
import ResultsText from "@/components/sections/case-study/ResultsText";
import NextProjectNav from "@/components/sections/case-study/NextProjectNav";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Placeholder data - in real app, fetch from CMS/API
function getProjectData(slug: string) {
  return {
    title: "Project " + slug.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" "),
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image" as const,
    heroMediaSrc: "/images/work-1.jpg",
    gallery: [
      { id: "1", mediaType: "image" as const, mediaSrc: "/images/work-2.jpg", alt: "Gallery image 1" },
      { id: "2", mediaType: "video" as const, mediaSrc: "/videos/work-1.mp4" },
      { id: "3", mediaType: "image" as const, mediaSrc: "/images/work-3.jpg", alt: "Gallery image 2" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
    nextSlug: "project-beta",
    nextTitle: "Project Beta",
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectData(slug);

  return (
    <>
      <PageTransition>
        <main>
          <HeroMedia
            mediaType={project.heroMediaType}
            mediaSrc={project.heroMediaSrc}
            alt={project.title}
          />
          <ProjectInfo
            title={project.title}
            role={project.role}
            tools={project.tools}
          />
          <Gallery items={project.gallery} />
          <ResultsText content={project.results} />
          <NextProjectNav nextSlug={project.nextSlug} nextTitle={project.nextTitle} />
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
