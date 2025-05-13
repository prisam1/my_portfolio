import { Download } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex bg-slate-950 lg:h-[15vh] h-[5vh] lg:pr-20 justify-between items-center">
      <div />
      <div className="flex flex-row gap-5">
        <a
          className="nav-link animate-wiggle js-scroll lg:text-2xl hover:border-b-2 hover:border-blue-700 text-white group"
          href="#home"
        >
          Home
        </a>

        <a
          className="nav-link js-scroll hover:border-b-2 hover:border-blue-700 lg:text-2xl text-white group"
          href="#about"
        >
          About
        </a>

        <a
          className="nav-link js-scroll border-b-2 border-slate-950 hover:border-blue-700 lg:text-2xl text-white group"
          href="#work"
        >
          Work
        </a>

        <a
          className="nav-link js-scroll hover:border-b-2 hover:border-blue-700 lg:text-2xl text-white group"
          href="#contact"
        >
          Contact
        </a>
      </div>
      <button
        onClick={() => window.open("/Pritam_resume.pdf", "_blank")}
        className="animate-bounce flex flex-col text-white items-center"
      >
        <Download size={40} absoluteStrokeWidth={true} />
        Download Resume
      </button>
    </div>
  );
};
