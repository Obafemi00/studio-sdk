import Link from "next/link";
import Container from "@/components/ui/Container";

interface NextProjectNavProps {
  nextSlug: string;
  nextTitle: string;
}

export default function NextProjectNav({ nextSlug, nextTitle }: NextProjectNavProps) {
  return (
    <section className="border-t border-[#E6E6E6] py-16 md:py-24">
      <Container>
        <Link
          href={`/portfolio/${nextSlug}`}
          className="group block transition-opacity duration-300 hover:opacity-60"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-small mb-2 text-[#4A4A4A]">Next Project</p>
              <h3 className="text-h3">{nextTitle}</h3>
            </div>
            <span className="text-h4 text-[#4A4A4A]">→</span>
          </div>
        </Link>
      </Container>
    </section>
  );
}
