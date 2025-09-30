import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []); // The empty array [] is CRITICAL here

  const options = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#6c757d" },
      links: {
        color: "#495057",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: { enable: true, speed: 1 },
      number: { density: { enable: true }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "square" },
      size: { value: { min: 2, max: 7 } },
    },
    detectRetina: true,
  };

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticleBackground;