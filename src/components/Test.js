//Variation of code from: https://codepen.io/matteobruni/pen/GReWvZd

import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

async function loadParticles(options) {
    await loadAll(tsParticles);

    await tsParticles.load({ id: "tsparticles", options });
}

const configs = {
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
            type: "square",
        },
        opacity: {
            value: 0.7,
        },
        size: {
            value: {
                min: 2,
                max: 5,
            }
        },
        move: {
            enable: true,
            speed: 1.5,
        },
    },
    background: {
        color: "#000",
    },
};

loadParticles(configs);

function Render(){
    return(
        <div id={"tsparticles"} style={{zIndex: 0}}></div>
    )
}

export default Render;