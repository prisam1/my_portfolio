import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE } from "../constants";
import { SocialLinks } from "../components/SocialLinks";
import { navLinks } from "./Header";
import { cn } from "../lib/utils";

export const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative z-10 border-t border-purple-900/40 bg-[#030014]/90 px-4 pb-28 pt-12 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-bold text-white">
            {PROFILE.name.split(" ")[0]}
            <span className="text-purple-500">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-gray-400">
            {PROFILE.title} building fast, scalable web &amp; mobile experiences.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-purple-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks size="sm" />
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-purple-900/30 pt-6 text-center text-sm text-gray-400 md:flex-row">
        <p>Made by {PROFILE.name} with ❤️</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <a
        href="#home"
        aria-label="Back to top"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
        className={cn(
          // Desktop only: on phones the bottom nav's Home button does the same job
          "fixed bottom-8 right-8 z-40 hidden h-11 w-11 items-center justify-center rounded-full border border-purple-500/60 bg-[#030014]/90 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:-translate-y-1 hover:text-white md:flex",
          showTop ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
