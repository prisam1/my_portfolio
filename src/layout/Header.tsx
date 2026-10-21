import { useEffect, useRef, useState } from "react";
import { Home, User, Brain, Briefcase, FolderDot, Mail } from "lucide-react";
import { cn } from "../lib/utils";

export const navLinks = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Brain },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "work", label: "Projects", icon: FolderDot },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const progressRef = useRef<HTMLDivElement>(null);

  // Highlight the section crossing the middle of the viewport (no per-scroll layout reads)
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll progress bar, written straight to the DOM to avoid re-rendering on every scroll
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <a
        href="#about"
        className="sr-only z-[70] rounded-md bg-purple-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <div className="fixed inset-x-0 top-0 z-[55] h-[3px] bg-transparent" aria-hidden="true">
        <div
          ref={progressRef}
          className="h-full origin-left bg-gradient-to-r from-purple-600 via-purple-400 to-cyan-400"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Desktop / tablet nav */}
      <nav
        aria-label="Primary"
        className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 rounded-full border border-purple-900/40 bg-[#030014cc] px-2 py-2 shadow-[0_0_20px] shadow-[#1E084D] backdrop-blur-md md:block"
      >
        <ul className="flex items-center gap-1 text-sm font-medium text-white">
          {navLinks.map(({ id, label, icon: Icon }) => {
            const active = activeLink === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setActiveLink(id)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors duration-300 lg:px-4 lg:text-base",
                    active
                      ? "bg-purple-600/20 font-semibold text-purple-400"
                      : "text-white hover:text-purple-400"
                  )}
                >
                  <Icon size={18} className="hidden lg:block" aria-hidden="true" />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile bottom nav */}
      <nav
        aria-label="Primary"
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-full border border-purple-600 bg-[#110F0E]/95 px-2 shadow-lg shadow-black/50 backdrop-blur md:hidden"
      >
        <ul className="flex h-14 items-center justify-between">
          {navLinks.map(({ id, label, icon: Icon }) => {
            const active = activeLink === id;
            return (
              <li key={id} className="flex-1">
                <a
                  href={`#${id}`}
                  onClick={() => setActiveLink(id)}
                  aria-label={label}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "mx-auto flex h-11 w-11 flex-col items-center justify-center rounded-full transition-colors duration-300",
                    active ? "bg-purple-600/25 text-purple-400" : "text-white active:text-purple-400"
                  )}
                >
                  <Icon size={21} aria-hidden="true" />
                  <span
                    className={cn(
                      "mt-0.5 h-1 w-1 rounded-full bg-purple-400 transition-opacity",
                      active ? "opacity-100" : "opacity-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
