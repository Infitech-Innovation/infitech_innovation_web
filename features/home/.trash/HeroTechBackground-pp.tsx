"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useMemo } from "react";
import { initParticles } from "../particlesInit";

export default function HeroTechBackground() {
    const particleOptions = useMemo<ISourceOptions>(
        () => ({
            background: {
                color: {
                    value: "transparent",
                },
            },
            detectRetina: true,
            fpsLimit: 60,
            fullScreen: {
                enable: false,
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: {
                        enable: true,
                    },
                },
                modes: {
                    grab: {
                        distance: 150,

                        links: {
                            opacity: 0.22,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: [
                        "#000000",
                        "#40e0d0",
                        "#f6b216",
                        "#ffa500",
                    ],
                },

                links: {
                    color: "#000000",
                    distance: 155,
                    enable: true,
                    opacity: 0.15,

                    triangles: {
                        enable: true,
                        opacity: 0.12,
                    },

                    width: 1,
                },

                move: {
                    direction: "none",
                    enable: true,

                    outModes: {
                        default: "out",
                    },

                    random: false,
                    speed: 0.42,
                    straight: false,
                },

                number: {
                    density: {
                        enable: true,
                        width: 1200,
                        height: 900,
                    },

                    value: 55,
                },

                opacity: {
                    value: {
                        min: 0.22,
                        max: 0.52,
                    },
                },

                size: {
                    value: {
                        min: 1.2,
                        max: 3.5,
                    },
                },
            },
        }),
        []

    );

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
            <ParticlesProvider init={initParticles}>
                <Particles
                    id="infitech-hero-tech-particles"
                    className="infitech-hero-particles-canvas absolute inset-0 h-full w-full"
                    options={particleOptions}
                />
            </ParticlesProvider>

            {/* Protect Hero copy from visual noise */}
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/90 via-white/60 to-transparent lg:w-[62%]" />

            {/* Soft top/bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/45" />
        </div>
    );
}
