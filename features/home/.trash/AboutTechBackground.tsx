"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { motion } from "motion/react";
import { useMemo } from "react";
import { initParticles } from "../particlesInit";

export default function AboutTechBackground() {
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
            particles: {
                color: {
                    value: ["#f97316", "#fb923c", "#f6b216"],
                },
                links: {
                    color: "#f97316",
                    distance: 132,
                    enable: true,
                    opacity: 0.48,
                    width: 1.4,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: 0.42,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        width: 950,
                        height: 760,
                    },
                    value: 58,
                },
                opacity: {
                    value: {
                        min: 0.5,
                        max: 0.92,
                    },
                },
                // shape: {
                //     options: {
                //         polygon: {
                //             sides: 6,
                //         },
                //     },
                //     type: ["circle", "polygon", "square"],
                // },
                size: {
                    value: {
                        min: 1.4,
                        max: 4.2,
                    },
                },
            },
        }),
        []
    );

    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <ParticlesProvider init={initParticles}>
                <Particles
                    id="infitech-about-tech-particles"
                    className="absolute inset-0 h-full w-full opacity-100"
                    options={particleOptions}
                />
            </ParticlesProvider>

            <motion.div
                className="absolute left-[-20%] top-[12%] h-40 w-[70%] rotate-[-10deg] border-y border-amber-300/28"
                animate={{
                    x: ["-5%", "16%", "-5%"],
                    opacity: [0.14, 0.32, 0.14],
                }}
                transition={{
                    duration: 24,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />

            <motion.div
                className="absolute bottom-[8%] right-[-22%] h-36 w-[66%] rotate-[12deg] border-y border-orange-400/34"
                animate={{
                    x: ["8%", "-14%", "8%"],
                    opacity: [0.13, 0.3, 0.13],
                }}
                transition={{
                    duration: 28,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            />
        </div>
    );
}
