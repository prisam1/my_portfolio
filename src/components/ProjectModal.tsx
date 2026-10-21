import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Project } from "../types";
import { ProjectLinks } from "./ProjectCard";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    // Lock background scroll without layout shift from the disappearing scrollbar
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Keep keyboard focus inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  // Portal to <body> so the dialog sits above the fixed nav instead of inside <main>'s stacking context
  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-2xl border border-purple-700/60 bg-[#111] text-white shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)] animate-pop-in sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close project details"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-gray-300 transition hover:scale-110 hover:text-red-500"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <img
          src={project.img}
          alt={`${project.title} screenshot`}
          width={1200}
          height={675}
          decoding="async"
          className="aspect-[16/9] w-full border-b border-gray-800 object-cover object-top"
        />

        <div className="p-5 sm:p-6">
          <h2 id="project-modal-title" className="mb-3 text-2xl font-bold">
            {project.title}
          </h2>

          <p className="mb-5 whitespace-pre-line leading-relaxed text-gray-300">{project.description}</p>

          <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Tech Stack</h3>
          <ul className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]"
              >
                {tech}
              </li>
            ))}
          </ul>

          <ProjectLinks project={project} />
        </div>
      </div>
    </div>,
    document.body
  );
};
