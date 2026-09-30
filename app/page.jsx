import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import {
  About,
  Services,
  Skills,
  Experience,
  Process,
} from "../components/Sections";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import RevealEffects from "../components/RevealEffects";
import MotionProvider from "../components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
      <RevealEffects />
    </MotionProvider>
  );
}
