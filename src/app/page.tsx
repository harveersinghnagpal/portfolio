import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ProblemSolving from "@/components/ProblemSolving";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Projects />
      <ProblemSolving />
      <Education />
      <Certificates />
      <Interests />
      <Contact />
    </div>
  );
}
