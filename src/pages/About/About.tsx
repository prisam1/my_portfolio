import { ScrollAnimation } from "../../components/ScrollAnimation";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "../../constants/Images";

export const About = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5,
      dx: Math.random() * 0.5,
    }));

    let shootingStars = Array.from({ length: 3 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      length: Math.random() * 80 + 100,
      speed: Math.random() * 10 + 6,
      active: false,
    }));

    const animate = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fill();

        star.x += star.dx;
        if (star.x > canvas.width) star.x = 0;
      }

      for (const s of shootingStars) {
        if (!s.active && Math.random() < 0.005) {
          s.x = Math.random() * canvas.width;
          s.y = Math.random() * canvas.height / 2;
          s.active = true;
        }

        if (s.active) {
          ctx.strokeStyle = "white";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.length, s.y + s.length);
          ctx.stroke();

          s.x += s.speed;
          s.y -= s.speed;

          if (s.x > canvas.width || s.y < 0) s.active = false;
        }
      }

      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="h-[90vh]">
      <canvas ref={canvasRef} className="absolute z-0 w-full" />
      <motion.div
        className="relative z-10 text-white flex flex-col lg:px-0 lg:py-10 px-[16px] py-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >

        <ScrollAnimation direction="up">
          <h1 className="lg:text-4xl text-center font-bold ">
            About Me
          </h1>
          <div className="flex flex-row justify-around items-center lg:mt-10">

            <img
              src={IMAGES.pritam}
              alt="pritam"
              className="hidden md:block lg:w-[270px] lg:h-[270px] w-[100px] h-[100px] mt-[50px] lg:mt-0 bg-white rounded-full border-2 border-blue-500"
            />

            <div className="max-w-2xl">
              <h1 className="lg:text-2xl lg:mt-2 font-bold">
                I'm Pritam Kumar Samaddar
              </h1>
              <h1 className="lg:text-lg lg:mt-2 font-bold text-purple-600">
                Full Stack Developer
              </h1>
              <h1 className="lg:mt-10 mt-4 font-sans lg:text-lg md:text-xs  lg:font-semibold">
                I am a passionate and results-driven full-stack developer with
                expertise in modern technologies, including MERN (MongoDB, Express.js,
                React, Node.js), Nest.js, Next.js, and React Native, paired with Expo
                for seamless cross-platform mobile development. My skill set extends
                to building dynamic web and mobile solutions using Ionic, leveraging
                Firebase for real-time capabilities, and designing scalable and
                efficient backend architectures with Redis and PostgreSQL. With a keen
                eye for aesthetics and responsiveness, I utilize Tailwind CSS to craft
                visually stunning user interfaces, enhanced by the power of TypeScript
                for type-safe, robust applications. I am adept at cloud management
                with AWS S3, version control with Git, and delivering optimized,
                scalable solutions. Whether it’s creating innovative applications or
                streamlining existing systems, I am committed to transforming ideas
                into impactful digital experiences. Let’s collaborate to bring your
                vision to life with precision and excellence!
              </h1>

              <button
                onClick={() => window.open("/Pritam_resume.pdf", "_blank")}
                className="text-white px-6 py-3 lg:mt-10 mt-5 rounded-lg font-semibold bg-gradient-to-r from-pink-700  to-blue-700 hover:opacity-90 shadow-lg transform hover:scale-110">
                Download Resume
              </button>
            </div>
          </div>

        </ScrollAnimation>
      </motion.div>
    </div>


  );
};
