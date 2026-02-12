import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-[#E6E6E6]">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-dark.png"
              alt="Studio SDK"
              width={180}
              height={60}
              priority
              className="h-auto min-w-[180px]"
            />
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/portfolio"
              className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors text-base font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#2B2B2B] hover:text-[#4A4A4A] transition-colors text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
