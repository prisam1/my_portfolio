import { About } from "./pages/About/About";
import { Header } from "./layout/Header";
import { Intro } from "./pages/Intro/Intro";
import { Experience } from "./pages/Experience/Experience";
import { Contact } from "./pages/Contact/Contact";
import { Bottom } from "./layout/Bottom";
import { Skills } from "./pages/Skills/Skills";
import { Work } from "./pages/Work/Work"; 
// import { LightStrike } from "./components/LightStricke";

function App() {
  return (
    <div className="flex-col min-h-screen bg-gray-200">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <section className="lg:scroll-mt-24 scroll-mt-[80px]" id="home">
        <Intro />
      </section>

      <section className="lg:scroll-mt-24 scroll-mt-[79px]" id="about">
        <About />
      </section>

      <section className="lg:scroll-mt-24 scroll-mt-[80px]" id="skills">
        <Skills />
      </section>

      <section className="lg:scroll-mt-24 scroll-mt-[79px]" id="experience">
        <Experience />
      </section>

      <section className="lg:scroll-mt-24 scroll-mt-[79px]" id="work">
        <Work />
      </section>

      <section className="lg:scroll-mt-24 scroll-mt-[80px]" id="contact">
        <Contact />
      </section>

      {/* <section className="lg:scroll-mt-24 scroll-mt-[80px]" id="contact">
      <LightStrike />
      </section>
       */}

      <Bottom />
    </div>
  );
}

export default App;
