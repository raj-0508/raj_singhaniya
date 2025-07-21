import About from "@/components/About/About";
import ContactUs from "@/components/ContactUs/ContactUs";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Project/Projects";
import Skills from "@/components/Skill/Skill";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactUs />
    </>
  );
}
