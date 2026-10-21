import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  twinkle: number;
  phase: number;
  vx: number;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  life: number;
  active: boolean;
}

/**
 * One fixed, lightweight 2D starfield shared by the whole page.
 * Replaces the per-section WebGL canvases: one context, DPR-capped,
 * paused while the tab is hidden and static under prefers-reduced-motion.
 */
export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    const shooting: ShootingStar[] = Array.from({ length: 2 }, () => ({
      x: 0, y: 0, len: 0, speed: 0, life: 0, active: false,
    }));
    let raf = 0;
    let last = 0;

    const createStars = () => {
      const count = Math.min(420, Math.floor((width * height) / 3500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.6 + 0.3,
        twinkle: Math.random() * 0.002 + 0.0005,
        phase: Math.random() * Math.PI * 2,
        vx: Math.random() * 0.04 + 0.01,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars();
      if (reduceMotion) draw(0, 0);
    };

    const draw = (time: number, dt: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const a = reduceMotion ? s.alpha : s.alpha * (0.6 + 0.4 * Math.sin(time * s.twinkle + s.phase));
        ctx.globalAlpha = a;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (!reduceMotion) {
          s.x += s.vx * dt * 0.06;
          if (s.x > width + 2) s.x = -2;
        }
      }

      if (!reduceMotion) {
        for (const sh of shooting) {
          if (!sh.active && Math.random() < 0.0015 * dt * 0.06) {
            sh.x = Math.random() * width * 0.8;
            sh.y = Math.random() * height * 0.5;
            sh.len = Math.random() * 80 + 80;
            sh.speed = Math.random() * 6 + 8;
            sh.life = 1;
            sh.active = true;
          }
          if (sh.active) {
            const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.len, sh.y - sh.len * 0.5);
            grad.addColorStop(0, `rgba(255,255,255,${sh.life})`);
            grad.addColorStop(1, "rgba(255,255,255,0)");
            ctx.globalAlpha = 1;
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(sh.x, sh.y);
            ctx.lineTo(sh.x - sh.len, sh.y - sh.len * 0.5);
            ctx.stroke();
            const step = sh.speed * dt * 0.06;
            sh.x += step;
            sh.y += step * 0.5;
            sh.life -= 0.012 * dt * 0.06;
            if (sh.life <= 0 || sh.x > width + sh.len || sh.y > height + sh.len) sh.active = false;
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time: number) => {
      // Normalised to ms, clamped so a resumed tab doesn't jump
      const dt = last ? Math.min(time - last, 50) : 16;
      last = time;
      draw(time, dt);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (reduceMotion || raf) return;
      last = 0;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    resize();
    start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
    />
  );
};
