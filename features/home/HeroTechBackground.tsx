"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useMemo } from "react";
import { initParticles } from "./particlesInit";

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
                        distance: 130,
                        links: {
                            opacity: 0.14,
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
                    distance: 155,
                    enable: true,
                    opacity: 0.09,
                    triangles: {
                        enable: true,
                        opacity: 0.006,
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
                    value: 48,
                },

                opacity: {
                    value: {
                        min: 0.12,
                        max: 0.34,
                    },
                },

                size: {
                    value: {
                        min: 1,
                        max: 3,
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

            {/* Fade particles behind the hero copy */}
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/90 via-white/60 to-transparent lg:w-[62%]" />

            {/* Subtle fade near top and bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/45" />
        </div>
    );
}

// "use client";

// import Particles, { ParticlesProvider } from "@tsparticles/react";
// import type { ISourceOptions } from "@tsparticles/engine";
// import { useMemo } from "react";
// import { initParticles } from "./particlesInit";

// export default function HeroTechBackground() {
//     const particleOptions = useMemo<ISourceOptions>(
//         () => ({
//             background: {
//                 color: {
//                     value: "transparent",
//                 },
//             },
//             detectRetina: true,
//             fpsLimit: 60,
//             fullScreen: {
//                 enable: false,
//             },
//             interactivity: {
//                 detectsOn: "window",
//                 events: {
//                     onHover: {
//                         enable: true,
//                         mode: "grab",
//                     },
//                     resize: {
//                         enable: true,
//                     },
//                 },
//                 modes: {
//                     grab: {
//                         distance: 155,
//                         links: {
//                             opacity: 0.34,
//                         },
//                     },
//                 },
//             },
//             particles: {
//                 color: {
//                     value: ["#000000", "#40e0d0", "#f6b216", "#ffa500"],
//                 },
//                 links: {
//                     color: "#000000",
//                     distance: 148,
//                     enable: true,
//                     opacity: 0.22,
//                     triangles: {
//                         enable: true,
//                         opacity: 0.015,
//                     },
//                     width: 1.15,
//                 },
//                 move: {
//                     direction: "none",
//                     enable: true,
//                     outModes: {
//                         default: "out",
//                     },
//                     random: false,
//                     speed: 0.72,
//                     straight: false,
//                 },
//                 number: {
//                     density: {
//                         enable: true,
//                         width: 1050,
//                         height: 850,
//                     },
//                     value: 72,
//                 },
//                 opacity: {
//                     value: {
//                         min: 0.26,
//                         max: 0.76,
//                     },
//                 },
//                 size: {
//                     value: {
//                         min: 1.2,
//                         max: 4.2,
//                     },
//                 },
//             },
//         }),
//         []
//     );

//     return (
//         <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
//             <ParticlesProvider init={initParticles}>
//                 <Particles
//                     id="infitech-hero-tech-particles"
//                     className="infitech-hero-particles-canvas absolute inset-0 h-full w-full"
//                     options={particleOptions}
//                 />
//             </ParticlesProvider>

//             <div className="absolute inset-0" />
//         </div>
//     );
// }
