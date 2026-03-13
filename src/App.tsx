import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/scrollToTop";

export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-main text-main min-h-screen">
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
