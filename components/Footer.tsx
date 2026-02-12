import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white">
      <Container>
        <div className="py-16">
          <p className="text-base text-white/80">
            © {new Date().getFullYear()} Studio SDK. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
