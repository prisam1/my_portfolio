import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { CURRENT_ROLE, IMAGES, PROFILE, RESUME_URL } from "../../constants";
import { SocialLinks } from "../../components/SocialLinks";

interface VantaEffect {
  destroy: () => void;
  animationLoop: () => number;
  req: number;
  renderer?: unknown;
}

/**
 * The clouds are a full-screen raymarching shader: cheap on a GPU, page-freezing on
 * software WebGL (VMs, blocklisted GPUs). Skip it there and for Data Saver users.
 */
const canRunVanta = () => {
  if ((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) return false;
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    if (!gl) return false;
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info ? String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL)) : "";
    gl.getExtension("WEBGL_lose_context")?.loseContext();
    return !/swiftshader|llvmpipe|software|basic render/i.test(renderer);
  } catch {
    return false;
  }
};

const roles = ["Full Stack Developer", "Android App Developer", "React.js Developer", "Node.js Developer"];

export const Intro = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  // three.js + Vanta are ~600KB, so they load in a separate chunk after first paint.
  // Until then (or if WebGL is unavailable) the matching sky gradient below is shown.
  useEffect(() => {
    if (!canRunVanta()) return;

    let effect: VantaEffect | null = null;
    let cancelled = false;
    let running = true;

    // Vanta keeps its rAF loop alive off-screen; stop it entirely while the hero isn't visible
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => {
            if (!effect) return;
            if (entry.isIntersecting && !running) {
              running = true;
              effect.animationLoop();
            } else if (!entry.isIntersecting && running) {
              running = false;
              cancelAnimationFrame(effect.req);
            }
          })
        : null;

    Promise.all([import("three"), import("vanta/src/vanta.clouds")])
      .then(([THREE, clouds]) => {
        if (cancelled || !vantaRef.current) return;
        const dpr = window.devicePixelRatio || 1;
        const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        effect = clouds.default({
          el: vantaRef.current,
          THREE,
          minHeight: 200,
          minWidth: 200,
          // The clouds are soft, so render at ~1x (desktop) / ~0.7x (mobile) device pixels
          scale: Math.max(1, dpr),
          scaleMobile: Math.max(1.4, dpr * 1.4),
          speed: reduceMotion ? 0.2 : 1,
        });
        // On a failed init Vanta paints the element white; restore the gradient instead
        if (!effect?.renderer) vantaRef.current.style.background = "";
        observer?.observe(vantaRef.current);
      })
      .catch(() => {
        /* keep the gradient fallback */
      });

    return () => {
      cancelled = true;
      observer?.disconnect();
      effect?.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-b from-[#68b8d7] via-[#8fbad8] to-[#adc1de] px-4 pb-24 pt-16 md:pt-24"
    >
      {/* Readability vignette + fade into the dark sections below */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(3,0,20,0.35)_0%,rgba(3,0,20,0.05)_60%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-[#030014]"
      />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center animate-pop-in">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 opacity-60 blur-lg" aria-hidden="true" />
          <img
            src={IMAGES.pritam}
            alt={PROFILE.name}
            width={250}
            height={250}
            decoding="async"
            className="relative h-32 w-32 rounded-full border-2 border-purple-600 bg-white object-cover sm:h-40 sm:w-40 lg:h-[220px] lg:w-[220px]"
          />
        </div>

        {CURRENT_ROLE && (
          <p className="mt-8 inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/20 bg-[#030014]/60 px-4 py-1.5 text-left text-xs text-white backdrop-blur-md sm:rounded-full sm:text-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1D874F]" />
            </span>
            <span>
              {CURRENT_ROLE.role} @ <span className="whitespace-nowrap font-semibold">{CURRENT_ROLE.company}</span>
            </span>
          </p>
        )}

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(3,0,20,0.55)] sm:text-5xl lg:text-7xl">
          Hello, I'm <span className="whitespace-nowrap">Pritam Kumar</span>{" "}
          <span className="whitespace-nowrap">Samaddar</span>
        </h1>

        <div className="my-6 flex min-h-[2.5rem] flex-wrap items-center justify-center gap-x-2 text-lg font-semibold drop-shadow-[0_2px_8px_rgba(3,0,20,0.5)] sm:text-2xl lg:text-4xl">
          <span className="text-white">I am a</span>
          <span className="text-purple-700 [&_.Typewriter__cursor]:text-white">
            <Typewriter options={{ strings: roles, autoStart: true, loop: true, deleteSpeed: 10 }} />
          </span>
        </div>

        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3 font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.45)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] active:scale-95"
          >
            View Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-[#030014]/50 px-7 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400 hover:bg-[#030014]/70 active:scale-95"
          >
            <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
        </div>

        <SocialLinks className="mt-8 [&_a]:bg-[#030014]/40 [&_a]:backdrop-blur-md" size="sm" />
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs uppercase tracking-widest text-white/80 transition-colors hover:text-white md:flex"
      >
        Scroll
        <ChevronDown size={20} className="animate-scroll-hint" />
      </a>
    </div>
  );
};
