import Link from "next/link";
import Container from "@/components/ui/Container";
import { Project } from "@/lib/projects";

interface ProjectNavProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectNav({ prevProject, nextProject }: ProjectNavProps) {
  return (
    <section className="border-t border-[#2B2B2B]/[0.08] bg-white py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group block transition-opacity duration-300 hover:opacity-60"
            >
              <div className="flex items-center gap-4">
                <span className="text-h4 text-[#4A4A4A]">←</span>
                <div>
                  <p className="text-small mb-2 text-[#4A4A4A]">Previous Project</p>
                  <h3 className="text-h3">{prevProject.title}</h3>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block transition-opacity duration-300 hover:opacity-60 md:ml-auto"
            >
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <p className="text-small mb-2 text-[#4A4A4A]">Next Project</p>
                  <h3 className="text-h3">{nextProject.title}</h3>
                </div>
                <span className="text-h4 text-[#4A4A4A]">→</span>
              </div>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
