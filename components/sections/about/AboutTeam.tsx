"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useStaggerReveal } from "@/lib/useStaggerReveal";

const teamMembers = [
  { name: "Sav", role: "Creative Director", image: "/images/sav.jpg" },
  { name: "Alex", role: "Lead Designer", image: "/images/team/team-2.jpg" },
  { name: "Jordan", role: "Technical Director", image: "/images/team/team-3.jpg" },
];

export default function AboutTeam() {
  const staggerRef = useStaggerReveal<HTMLDivElement>(0.1);

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2
            className="mb-12 text-4xl font-display tracking-tight md:mb-16 md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Team
          </h2>
          <div ref={staggerRef} className="grid gap-12 md:grid-cols-3 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-[#E6E6E6]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mb-1 text-xl font-medium text-[#2B2B2B] md:text-2xl">
                  {member.name}
                </h3>
                <p className="text-base text-[#4A4A4A] md:text-lg">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
