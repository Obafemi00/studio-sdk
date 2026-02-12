"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useRevealOnScroll } from "@/lib/useRevealOnScroll";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Sav", role: "Creative Director", image: "/images/sav.jpg" },
  { name: "Alex", role: "Designer", image: "/images/team-2.jpg" },
  { name: "Jordan", role: "Developer", image: "/images/team-3.jpg" },
];

export default function TeamGrid() {
  const revealRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={revealRef} className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
      <Container>
        <h2 className="text-h2 mb-16 tracking-tight">Team</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div className="relative mb-4 aspect-square w-full overflow-hidden bg-[#E6E6E6]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-h4 mb-1">{member.name}</h3>
              <p className="text-body text-[#4A4A4A]">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
