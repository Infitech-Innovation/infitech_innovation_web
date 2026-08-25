"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { motion } from "motion/react";
import { useMemo } from "react";
import { initParticles } from "./particlesInit";

// const signalPaths = [
//     { top: "16%", left: "-12%", width: "44%", delay: 0, duration: 12, color: "bg-infitech-turquoise" },
//     { top: "38%", left: "52%", width: "48%", delay: 1.5, duration: 14, color: "bg-infitech-orange" },
//     { top: "68%", left: "-8%", width: "52%", delay: 2.4, duration: 13, color: "bg-infitech-gold" },
//     { top: "84%", left: "38%", width: "40%", delay: 0.8, duration: 15, color: "bg-infitech-ink" },
// ] as const;

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

            {/* {signalPaths.map((path) => (
                <div
                    key={`${path.top}-${path.left}`}
                    className="absolute h-px bg-infitech-ink/10"
                    style={{ top: path.top, left: path.left, width: path.width }}
                >
                    <motion.span
                        className={`absolute -top-1 block h-2 w-12 rounded-full ${path.color} shadow-[0_0_20px_rgba(64,224,208,0.34)]`}
                        animate={{
                            x: ["0%", "100%", "0%"],
                            opacity: [0, 0.7, 0],
                        }}
                        transition={{
                            delay: path.delay,
                            duration: path.duration,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />
                </div>
            ))} */}

            {/* {systemNodes.map((node, index) => (
                <motion.div
                    key={node.label}
                    className="absolute grid h-12 min-w-12 place-items-center rounded-[8px] border border-infitech-ink/12 bg-infitech-surface/24 px-2 font-mono text-[0.62rem] font-black text-infitech-ink/65 shadow-[0_0_26px_rgba(64,224,208,0.14)] backdrop-blur-[2px]"
                    style={{ top: node.top, left: node.left }}
                    animate={{
                        y: [0, -7, 0],
                        opacity: [0.28, 0.68, 0.28],
                        scale: [1, 1.04, 1],
                    }}
                    transition={{
                        delay: index * 0.55,
                        duration: 7.5 + index,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    {node.label}
                </motion.div>
            ))} */}

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
