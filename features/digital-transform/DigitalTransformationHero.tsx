
"use client";

import { useEffect, useState } from "react";

const connections = [
  {
    label: "People",
    x: 100,
    y: 78,
    endX: 383,
    endY: 184,
    path: "M100 78 C210 78 292 108 383 184",
    delay: 0,
    duration: "6s",
  },
  {
    label: "Processes",
    x: 80,
    y: 190,
    endX: 363,
    endY: 223,
    path: "M80 190 C200 190 284 203 363 223",
    delay: 180,
    duration: "6.8s",
  },
  {
    label: "Systems",
    x: 85,
    y: 305,
    endX: 365,
    endY: 267,
    path: "M85 305 C205 305 286 286 365 267",
    delay: 360,
    duration: "6.4s",
  },
  {
    label: "Data",
    x: 135,
    y: 395,
    endX: 390,
    endY: 306,
    path: "M135 395 C235 383 310 337 390 306",
    delay: 540,
    duration: "7.2s",
  },
] as const;

function BusinessVisual({ active }: { active: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <svg
        viewBox="0 0 560 460"
        preserveAspectRatio="xMidYMid meet"
        className="block h-auto w-full"
        role="img"
        aria-label="People, processes, systems and data connected to the business"
      >
        <defs>
          <linearGradient
            id="heroOrangeLine"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="#FFA500"
              stopOpacity="0.65"
            />
            <stop
              offset="55%"
              stopColor="#FFA500"
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor="#FFA500"
              stopOpacity="0.9"
            />
          </linearGradient>
        </defs>

        {/* Subtle concentric circles */}
        <circle
          cx="435"
          cy="245"
          r="128"
          fill="none"
          stroke="#FFA500"
          strokeOpacity="0.25"
          strokeWidth="0.8"
        />

        <circle
          cx="435"
          cy="245"
          r="102"
          fill="none"
          stroke="#111111"
          strokeOpacity="0.08"
          strokeWidth="0.8"
        />

        <circle
          cx="435"
          cy="245"
          r="83"
          fill="none"
          stroke="#111111"
          strokeOpacity="0.08"
          strokeWidth="0.8"
        />

        {/* Connection paths */}
        {connections.map((connection) => (
          <g key={connection.label}>
            <path
              d={connection.path}
              fill="none"
              stroke="#111111"
              strokeOpacity="0.07"
              strokeWidth="1"
            />

            <path
              d={connection.path}
              pathLength={1}
              fill="none"
              stroke="url(#heroOrangeLine)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray="1"
              strokeDashoffset={active ? 0 : 1}
              className="transition-[stroke-dashoffset] duration-[1500ms] ease-out motion-reduce:transition-none"
              style={{
                transitionDelay: `${connection.delay}ms`,
              }}
            />

            {/* Moving signal */}
            <g className="motion-reduce:hidden">
              <circle r="3" fill="#FFA500">
                <animateMotion
                  dur={connection.duration}
                  begin={`${2 + connection.delay / 1000}s`}
                  repeatCount="indefinite"
                  path={connection.path}
                />
              </circle>
            </g>
          </g>
        ))}

        {/* Source points and labels */}
        {connections.map((connection, index) => (
          <g
            key={`${connection.label}-label`}
            className="transition-opacity duration-700 motion-reduce:transition-none"
            style={{
              opacity: active ? 1 : 0,
              transitionDelay: `${150 + index * 140}ms`,
            }}
          >
            <circle
              cx={connection.x}
              cy={connection.y}
              r="9"
              fill="#FEFFFE"
              stroke="#111111"
              strokeOpacity="0.17"
            />

            <circle
              cx={connection.x}
              cy={connection.y}
              r="2.6"
              fill="#111111"
            />

            {/* Labels sit above the lines, not across them */}
            <text
              x={connection.x + 15}
              y={connection.y - 13}
              fill="#444444"
              fontSize="12"
              fontWeight="600"
              letterSpacing="1.2"
            >
              {connection.label.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Central business circle */}
        <circle
          cx="435"
          cy="245"
          r="66"
          fill="#000000"
          className={`origin-center transition-opacity duration-700 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />

        <text
          x="435"
          y="231"
          fill="#999999"
          fontSize="10"
          letterSpacing="1.5"
          textAnchor="middle"
        >
          THE
        </text>

        <text
          x="435"
          y="255"
          fill="#FFFFFF"
          fontSize="19"
          fontWeight="600"
          textAnchor="middle"
          letterSpacing="-0.5"
        >
          Business
        </text>

        {/* Small orange accent */}
        <circle
          cx="527"
          cy="196"
          r="8"
          fill="#FEFFFE"
          stroke="#FFA500"
          strokeOpacity="0.45"
        />

        <circle
          cx="527"
          cy="196"
          r="4"
          fill="#FFA500"
        />
      </svg>
    </div>
  );
}

export default function DigitalTransformationHero() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive(true);
    }, 300);

    return () => window.clearTimeout(timer);
  }, []);

  const scrollToChallenges = () => {
    const section = document.getElementById(
      "transformation-challenges"
    );

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const goToContact = () => {
    const locale =
      window.location.pathname.split("/")[1] || "en";

    window.location.assign(`/${locale}/contact`);
  };

  return (
    <section
      data-digital-transformation-hero
      className="relative isolate overflow-hidden bg-[#FEFFFE] px-4 pb-6 pt-10 text-black sm:px-6 sm:pb-8 sm:pt-12 lg:px-10 lg:pb-8 lg:pt-12"
    >
      {/* Quiet background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-[280px] -top-[280px] h-[720px] w-[720px] rounded-full border border-black/[0.025]" />

        <div className="absolute -bottom-[430px] left-[31%] h-[720px] w-[720px] rounded-full border border-[#FFA500]/[0.035]" />
      </div>

      {/* Main Hero layout */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] items-center gap-5 sm:gap-7 lg:grid-cols-[1fr_0.92fr] lg:gap-8 xl:gap-12">
        {/* Left: business message */}
        <div className="flex items-center">
          <div className="w-full max-w-[620px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#E79400]">
              Digital Transformation
            </p>

            <h1
              className="mt-4 max-w-[590px] font-semibold leading-[1.06] tracking-[-0.04em]"
              style={{
                fontSize:
                  "clamp(2.45rem, 3.3vw, 3.35rem)",
              }}
            >
              Transform the business,
              <br className="hidden sm:block" />
              {" "}not just the technology.
            </h1>

            <p className="mt-5 max-w-[570px] text-[16px] leading-[1.65] text-black/70 sm:text-[17px] lg:text-[18px]">
              We start with what your business needs to do
              better, then bring together the right processes,
              systems, data, and technology to make it happen.
            </p>

            <div className="mt-7">
              <button
                type="button"
                onClick={goToContact}
                className="group inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-black px-7 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[#FFA500] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFA500]"
              >
                Start a Conversation

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToChallenges}
              className="group mt-6 inline-flex items-center gap-3 text-left text-[14px] font-medium text-black/55 transition-colors duration-300 hover:text-black"
            >
              See where transformation starts

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-y-1"
              >
                ↓
              </span>
            </button>
          </div>
        </div>

        {/* Right: connected business illustration */}
        <div className="flex min-w-0 w-full items-center justify-center lg:justify-end">
          <BusinessVisual active={active} />
        </div>
      </div>
    </section>
  );
}
