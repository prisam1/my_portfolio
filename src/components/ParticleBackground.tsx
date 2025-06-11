import Particles from "react-tsparticles";

export const ParticleBackground = () => (
  <Particles
    options={{
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "#0f172a" },
      particles: {
        number: { value: 60 },
        links: { enable: true, color: "#9333ea" },
        move: { enable: true, speed: 1 },
        size: { value: 2 },
        color: { value: "#9333ea" },
      },
    }}
  />
);
