import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Trainers from "@/components/main/Trainers";
import Contact from "@/components/main/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <About />
        <Projects />
        <Trainers />
        <Contact />
      </div>
    </main>
  );
}
