import Image from "next/image";
import Hero from "./site/hero";
import Projects from "./site/project";
import Skills from "./site/skills";
import Footer from "./site/footer";
import Subjects from "./site/subject";
import AboutMe from "./site/about";
import { Presentation } from "./site/presentation";
import { Video } from "./site/video";

export default function Home() {
  return (
<>
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Subjects />
      <Presentation />
      <Video />
      <Footer />
    </>
  );
}
