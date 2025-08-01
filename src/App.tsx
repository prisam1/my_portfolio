import { About } from "./pages/About/About";
import { Header } from "./layout/Header";
import { Intro } from "./pages/Intro/Intro";
import { Experience } from "./pages/Experience/Experience";
import { Contact } from "./pages/Contact/Contact"; 
import { Skills } from "./pages/Skills/Skills";
import { Work } from "./pages/Work/Work";
// import { LightStrike } from "./components/LightStricke";

function App() {
  return (
    <div className="flex-col min-h-screen bg-gray-200">
      {/* <div className="fixed top-0 left-0 w-full z-50"> */}
      <Header />
      {/* </div> */}

      <section className="" id="home">
        <Intro />
      </section>

      <section className="" id="about">
        <About />
      </section>

      <section className="" id="skills">
        <Skills />
      </section>

      <section className="" id="experience">
        <Experience />
      </section>

      <section className="" id="work">
        <Work />
      </section>

      <section className="" id="contact">
        <Contact />
      </section>

      {/* <section className="" id="contact">
      <LightStrike />
      </section>
       */} 
    </div>
  );
}

export default App;
