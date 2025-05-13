import { Header } from "../components/header";
import { Intro } from "../components/intro";
import { About } from "../components/about";
import { Work } from "../components/work";
import { Contact } from "../components/contact";

export const Main = () => {
  return (
    <div className="flex-col min-h-screen bg-gray-200">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <section id="home">
        <Intro />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};
