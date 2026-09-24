"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
// import { motion } from "motion/react";
import { useMemo } from "react";
import { initParticles } from "../../home/particlesInit";

// const dataPackets = [
//     { top: "18%", left: "-8%", width: "42%", delay: 0, duration: 9, color: "bg-infitech-ink" },
//     { top: "34%", left: "18%", width: "36%", delay: 1.4, duration: 11, color: "bg-infitech-orange" },
//     { top: "57%", left: "-12%", width: "54%", delay: 2.2, duration: 10, color: "bg-infitech-turquoise" },
//     { top: "73%", left: "36%", width: "34%", delay: 0.8, duration: 12, color: "bg-infitech-gold" },
// ] as const;

// const circuitNodes = [
//     { top: "21%", left: "12%" },
//     { top: "31%", left: "72%" },
//     { top: "62%", left: "18%" },
//     { top: "70%", left: "62%" },
// ] as const;

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
                        distance: 155,
                        links: {
                            opacity: 0.34,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: ["#000000", "#40e0d0", "#f6b216", "#ffa500"],
                },
                links: {
                    color: "#000000",
                    distance: 148,
                    enable: true,
                    opacity: 0.22,
                    triangles: {
                        enable: true,
                        opacity: 0.015,
                    },
                    width: 1.15,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: false,
                    speed: 0.72,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        width: 1050,
                        height: 850,
                    },
                    value: 72,
                },
                opacity: {
                    value: {
                        min: 0.26,
                        max: 0.76,
                    },
                },
                // shape: {
                //     options: {
                //         polygon: {
                //             sides: 6,
                //         },
                //     },
                //     type: ["circle", "line", "polygon", "square"],
                // },
                size: {
                    value: {
                        min: 1.2,
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
                    id="infitech-hero-tech-particles"
                    className="infitech-hero-particles-canvas absolute inset-0 h-full w-full"
                    options={particleOptions}
                />
            </ParticlesProvider>


            {/* {circuitNodes.map((node, index) => (
                <motion.div
                    key={`${node.top}-${node.left}`}
                    className="absolute h-12 w-12 rounded-[10px] border border-infitech-ink/15 bg-infitech-surface/22 shadow-[0_0_28px_rgba(64,224,208,0.2)] backdrop-blur-[2px]"
                    style={{ top: node.top, left: node.left }}
                    animate={{
                        y: [0, -8, 0],
                        opacity: [0.42, 0.82, 0.42],
                        boxShadow: [
                            "0 0 18px rgba(64,224,208,0.14)",
                            "0 0 34px rgba(246,178,22,0.24)",
                            "0 0 18px rgba(64,224,208,0.14)",
                        ],
                    }}
                    transition={{
                        delay: index * 0.45,
                        duration: 6 + index,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            ))} */}

            <div className="absolute inset-0" />
            {/* gradient-to-r from-infitech-olive/20 via-transparent to-infitech-cyan/20 */}
        </div>
    );
}
