import Image from "next/image";
import Hero from "./site/hero";
import Projects from "./site/project";
import Skills from "./site/skills";
import Contact from "./site/contact";
import Footer from "./site/footer";
import Subjects from "./site/subject";
import AboutMe from "./site/about";
import Certificates from "./site/certificates";

export default function Home() {
  return (
<>
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Certificates />
      <Subjects />
      <Contact />
      <Footer />
    </>
  );
}
