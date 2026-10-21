import { Toaster } from "sonner";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { StarField } from "./components/StarField";
import { Intro } from "./pages/Intro/Intro";
import { About } from "./pages/About/About";
import { Skills } from "./pages/Skills/Skills";
import { Experience } from "./pages/Experience/Experience";
import { Work } from "./pages/Work/Work";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#030014] text-white">
      <StarField />
      <Header />

      <main className="relative z-10">
        <section id="home" aria-label="Introduction">
          <Intro />
        </section>

        <section id="about" aria-label="About">
          <About />
        </section>

        <section id="skills" aria-label="Skills">
          <Skills />
        </section>

        <section id="experience" aria-label="Experience">
          <Experience />
        </section>

        <section id="work" aria-label="Projects">
          <Work />
        </section>

        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>

      <Footer />
      <Toaster position="top-center" richColors theme="dark" />
    </div>
  );
}

export default App;
