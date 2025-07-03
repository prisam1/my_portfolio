
import React, { useRef, useEffect } from "react";

export const StarCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const stars = Array.from({ length: 400 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.2,
      alpha: Math.random(),
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    };

    const animate = () => {
      drawStars();
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};
