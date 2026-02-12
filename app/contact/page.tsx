"use client";

import { useState, FormEvent } from "react";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log({ name, email });
  };

  return (
    <>
      <PageTransition>
        <main>
        <section className="py-16 md:py-24 lg:py-[96px] xl:py-[140px]">
          <Container>
            <div className="max-w-2xl">
              <h1 className="text-h2 mb-8 tracking-tight">Contact</h1>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-body font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border-b border-[#E6E6E6] bg-transparent px-0 py-2 text-body focus:border-[#2B2B2B] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-body font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border-b border-[#E6E6E6] bg-transparent px-0 py-2 text-body focus:border-[#2B2B2B] focus:outline-none"
                  />
                </div>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </form>
            </div>
          </Container>
        </section>
      </main>
      </PageTransition>
      <Footer />
    </>
  );
}
