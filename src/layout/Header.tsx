import { useState, useEffect, useCallback } from "react";
import { 
  Home,
  User,
  Brain,
  Briefcase,
  FolderDot, 
  Mail,
} from "lucide-react";


const navLinks = [
  { id: "home", label: "Home", icon: Home }, // Added 'icon' property
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Brain },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "work", label: "Projects", icon: FolderDot },
  { id: "contact", label: "Contact", icon: Mail },
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
      .filter((section) => scrollY >= section.offsetTop - 100)
      .sort((a, b) => b.offsetTop - a.offsetTop)[0];

    if (current && current.id !== activeLink) {
      setActiveLink(current.id);
    }
  }, [activeLink]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (id: string) => {
    setActiveLink(id); 
  };

  return (
    <>

      <div className="hidden md:flex fixed top-5 left-1/2 transform -translate-x-1/2 shadow-lg shadow-[#1E084D] bg-[#030014cc] backdrop-blur-md z-50 px-5 py-3 rounded-full">
        <div className="flex items-center justify-between space-x-8 text-white text-sm font-medium">

          {/* Desktop Nav */}

          {navLinks.map(({ id, label, icon: IconComponent }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleNavClick(id)}
              className={`relative text-lg flex items-center gap-1 hover:text-purple-400 transition duration-300 
              ${activeLink === id ? "text-purple-600 font-bold" : "text-white"}
            `}
            >
              <IconComponent size={20} />
              {label}
              {/* {activeLink === id && (
              <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-purple-500"></span>
            )} */}
            </a>
          ))}

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className="flex fixed z-50 w-full justify-between gap-4 h-14 max-w-xl items-center -translate-x-1/2 bg-[#110F0E] border border-purple-800 rounded-full bottom-4 left-1/2 md:hidden px-4">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => handleNavClick(id)}
            className={`relative text-sm gap-1 hover:text-purple-400 transition duration-300 
              ${activeLink === id ? "text-purple-600 font-bold" : "text-white"}
            `}
          >
            {label}
          </a>
        ))}
      </div>

    </>
  );
};
