// ParticleComponent.js
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleComponent = () => {
    const [init, setInit] = useState(false);
    const [particlePosition, setParticlePosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const initializeParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setInit(true);
        };

        initializeParticles();
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const dynamicParticles = [
        {
            position: {
                x: particlePosition.x,
                y: particlePosition.y,
            },
            color: {
                value: "#ffffff",
            },
            size: {
                value: 20,
            },
            shape: {
                type: "circle",
            },
            move: {
                enable: true,
                speed: 2,
            },
        },
    ];

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            particles={dynamicParticles}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
            }}
        />
    );
};

export default ParticleComponent;
