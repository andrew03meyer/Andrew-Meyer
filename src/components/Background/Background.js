import React, { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

const getConfig = (isDarkMode) => {
  if (isDarkMode) {
    return {
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: "#fff",
        },
        links: {
          enable: true,
          distance: 200,
          color: "#ffffff",
          opacity: 0.5,
          width: 1,
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7,
        },
        size: {
          value: {
            min: 2,
            max: 5,
          },
        },
        move: {
          enable: true,
          speed: 0.3,
        },
        onHover: {
          mode: "push",
        },
        shadow: {
          blur: 5,
        },
      },
      background: {
        color: "#000",
      },
    };
  }

  return {
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: "#000",
      },
      links: {
        enable: true,
        distance: 200,
        color: "#000000",
        opacity: 0.5,
        width: 1,
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
      },
      size: {
        value: {
          min: 2,
          max: 5,
        },
      },
      move: {
        enable: true,
        speed: 0.3,
      },
      onHover: {
        mode: "push",
      },
    },
    background: {
      color: "#faf0ca",
    },
  };
};

function Background({ mode }) {
  const load = async () => {
    await loadAll(tsParticles);

    await tsParticles.load({ id: "tsparticles", options: getConfig(mode) });
  };

  useEffect(() => {
    load();
  }, [mode]);

  return <div id={"tsparticles"} style={{ zIndex: 0 }}></div>;
}

export default Background;
