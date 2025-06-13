import { About } from "./pages/About/About";
import { Header } from "./layout/Header";
import { Intro } from "./pages/Intro/Intro";
import { Experience } from "./pages/Experience/Experience";
import { Contact } from "./pages/Contact/Contact";
import { Bottom } from "./layout/Bottom";
import { Skills } from "./pages/Skills/Skills";
import { Work } from "./pages/Work/Work";

function App() {
  return (
    <div className="flex-col min-h-screen bg-gray-200">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <section className="scroll-mt-24" id="home">
        <Intro />
      </section>

      <section className="scroll-mt-24" id="about">
        <About />
      </section>

      <section className="scroll-mt-24" id="skills">
        <Skills />
      </section>

      <section className="scroll-mt-24" id="experience">
        <Experience />
      </section>

      <section className="scroll-mt-24" id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Bottom />
    </div>
  );
}

export default App;
