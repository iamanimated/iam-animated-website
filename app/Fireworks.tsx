"use client";

import Particles from "react-tsparticles";

export default function Fireworks() {
    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 0,
                    },
                    color: {
                        value: ["#00d9ff", "#ffffff", "#6ee7b7", "#38bdf8"],
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: { min: 0.4, max: 0.9 },
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    life: {
                        duration: {
                            sync: true,
                            value: 2,
                        },
                        count: 1,
                    },
                    move: {
                        enable: true,
                        speed: 20,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "destroy",
                        },
                        gravity: {
                            enable: true,
                            acceleration: 9,
                            maxSpeed: 30,
                        },
                        trail: {
                            enable: true,
                            fillColor: "#000000",
                            length: 10,
                        },
                    },
                },
                emitters: [
                    {
                        direction: "top",
                        position: {
                            x: 50,
                            y: 100,
                        },
                        rate: {
                            delay: 0.35,
                            quantity: 1,
                        },
                    },
                ],
            }}
            className="absolute inset-0 -z-10 pointer-events-none"
        />
    );
}
