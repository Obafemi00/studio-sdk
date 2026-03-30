import Link from "next/link";
import Container from "@/components/ui/Container";
import { Project } from "@/lib/projects";

interface ProjectNavProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectNav({ prevProject, nextProject }: ProjectNavProps) {
  return (
    <section className="bg-white py-12">
      <Container>
        <nav className="border-t border-[#E6E6E6]">
          <div className="flex justify-between items-start gap-4">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="block min-h-[44px] max-w-[48%]"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.32em] font-sans text-[#4A4A4A]">
                    Previous Project
                  </span>
                  <span className="flex items-center gap-2 text-[20px] font-display text-[#2B2B2B] leading-tight">
                    <span>←</span>
                    <span>{prevProject.title}</span>
                  </span>
                </div>
              </Link>
            ) : (
              <div className="min-h-[44px] max-w-[48%]" />
            )}
            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="block min-h-[44px] max-w-[48%]"
              >
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[11px] uppercase tracking-[0.32em] font-sans text-[#4A4A4A]">
                    Next Project
                  </span>
                  <span className="flex items-center justify-end gap-2 text-[20px] font-display text-[#2B2B2B] leading-tight">
                    <span>{nextProject.title}</span>
                    <span>→</span>
                  </span>
                </div>
              </Link>
            ) : (
              <div className="min-h-[44px] max-w-[48%]" />
            )}
          </div>
        </nav>
      </Container>
    </section>
  );
}
