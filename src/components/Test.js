// ParticleComponent.js
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleComponent = () => {
    const [init, setInit] = useState(false);

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

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
            }}
        />
    );
};

export default ParticleComponent;
