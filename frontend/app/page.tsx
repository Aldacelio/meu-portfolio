import About from "@/components/about";
import Animation from "@/components/animation";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Animation />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  )
}