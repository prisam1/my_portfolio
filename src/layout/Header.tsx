import { useState, useEffect, useCallback } from "react";
import { Download } from "lucide-react";
import { IMAGES } from "../constants/Images";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const offsets = navLinks.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return { id, offsetTop: Infinity };
      return { id, offsetTop: el.offsetTop };
    });

    const current = offsets
      .filter((section) => scrollY >= section.offsetTop - 80)
      .sort((a, b) => b.offsetTop - a.offsetTop)[0];

    if (current && current.id !== activeLink) {
      setActiveLink(current.id);
    }
  }, [activeLink]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);


  return (
    <div className="flex bg-slate-950 lg:h-[10vh] h-[5vh] lg:px-7 px-3 justify-between items-center">
      <a
        href="#home"
        onClick={() => setActiveLink("home")}
        className="lg:flex flex-row items-center gap-2 hidden md:block"
      >
        <img
          src={IMAGES.pritam}
          alt="react"
          className="lg:w-[50px] lg:h-[50px] bg-white rounded-full lg:border-2  border-blue-500"
        />
        <h1 className="text-white lg:text-3xl font-semibold">Portfolio</h1>
      </a>
      <div className="flex flex-row gap-5 lg:min-w-0 min-w-full justify-center">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActiveLink(id)}
            className={`nav-link lg:text-2xl group transition-colors ${activeLink === id ? "text-purple-600" : "text-white"
              } hover:text-purple-500`}
          >
            {label}
          </a>
        ))}
      </div>
      <button
        onClick={() => window.open("/Pritam_resume.pdf", "_blank")}
        className="animate-bounce lg:flex flex-col text-white items-center hidden md:block"
      >
        <Download size={40} absoluteStrokeWidth={true} />
        Download Resume
      </button>
    </div>
  );
};
