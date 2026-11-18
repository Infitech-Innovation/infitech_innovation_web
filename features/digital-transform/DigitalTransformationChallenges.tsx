
"use client";

import { useId, useState } from "react";

const challenges = [
  {
    number: "01",
    title: "Disconnected systems",
    description: "Information spread across tools, teams, and departments.",
    detail:
      "Important information lives in different places, making it harder for teams to work from the same picture.",
    type: "systems",
  },
  {
    number: "02",
    title: "Manual processes",
    description: "Time lost to repetitive work and workarounds.",
    detail:
      "Repeated tasks and manual handovers consume time that could be spent on more valuable work.",
    type: "processes",
  },
  {
    number: "03",
    title: "Limited visibility",
    description: "Decisions made without a clear, timely picture.",
    detail:
      "Scattered information makes it harder to understand performance and act with confidence.",
    type: "visibility",
  },
] as const;

type Challenge = (typeof challenges)[number];
type ChallengeType = Challenge["type"];

function ArrowIcon({
  diagonal = false,
}: {
  diagonal?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M5 19 19 5M8 5h11v11" />
      ) : (
        <path d="M4 12h16m-7-7 7 7-7 7" />
      )}
    </svg>
  );
}

/*
 * Main systems illustration.
 * SVG coordinates remain fixed, while CSS controls responsive sizing.
 * Lines have subtle movement; the glass layers remain stable.
 */
function ComplexityVisual() {
  const id = useId().replace(/:/g, "");
  const glassId = `${id}-glass`;
  const glowId = `${id}-glow`;
  const orangeId = `${id}-orange`;

  const signals = [
    {
      label: "PEOPLE",
      y: 102,
      color: "#F4E7D4",
      path:
        "M92 102 C163 102 188 69 244 104 S342 145 404 102 S485 75 546 116 S647 90 744 108",
    },
    {
      label: "PROCESSES",
      y: 163,
      color: "#FFA500",
      path:
        "M92 163 C165 163 194 177 254 151 S338 191 401 156 S476 189 542 159 S631 181 744 153",
    },
    {
      label: "SYSTEMS",
      y: 224,
      color: "#E7D9C6",
      path:
        "M92 224 C164 224 192 213 256 228 S344 185 405 219 S492 182 544 227 S645 207 744 217",
    },
    {
      label: "DATA",
      y: 285,
      color: "#FFA500",
      path:
        "M92 285 C160 285 192 286 255 263 S336 297 401 270 S480 295 539 261 S639 290 744 273",
    },
  ];

  const particles = Array.from({ length: 64 }, (_, i) => ({
    x: 445 + ((i * 47) % 265),
    y: 42 + ((i * 71) % 260),
    size: i % 9 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
    opacity: 0.15 + (i % 5) * 0.12,
  }));

  const glassPanels = [
    "M175 46L264 65V309L175 286Z",
    "M281 28L375 53V321L281 298Z",
    "M393 48L488 70V305L393 283Z",
    "M504 64L595 85V289L504 267Z",
    "M612 82L701 101V278L612 258Z",
  ];

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_58%_50%,rgba(255,165,0,0.09),transparent_58%)]" />

      <svg
        viewBox="0 0 900 360"
        preserveAspectRatio="xMidYMid meet"
        className="block h-full w-full"
        role="img"
        aria-label="People, processes, systems and data moving through layers of business complexity"
      >
        <defs>
          <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.13" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.025" />
            <stop offset="100%" stopColor="#FFA500" stopOpacity="0.045" />
          </linearGradient>

          <linearGradient id={orangeId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFA500" stopOpacity="0.3" />
            <stop offset="42%" stopColor="#FFA500" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFA500" stopOpacity="0.3" />
          </linearGradient>

          <filter
            id={glowId}
            x="-40%"
            y="-80%"
            width="180%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Perspective floor */}
        <g stroke="#FFFFFF" strokeOpacity="0.05" fill="none">
          {Array.from({ length: 12 }, (_, i) => (
            <path
              key={i}
              d={`M${80 + i * 76} 355 L${460 + (i - 6) * 28} 260`}
            />
          ))}

          {[280, 305, 330, 355].map((y) => (
            <path key={y} d={`M75 ${y}H790`} />
          ))}
        </g>

        {/* Signal labels */}
        {signals.map((signal) => (
          <g key={signal.label}>
            <text
              x="5"
              y={signal.y + 4}
              fill="#D9D9D9"
              fontSize="12"
              fontWeight="500"
              letterSpacing="1.7"
            >
              {signal.label}
            </text>

            <circle
              cx="81"
              cy={signal.y}
              r="3.2"
              fill="#FFA500"
            />
          </g>
        ))}

        {/* Soft glowing traces */}
        <g filter={`url(#${glowId})`} opacity="0.38">
          {signals.map((signal) => (
            <path
              key={signal.label}
              d={signal.path}
              fill="none"
              stroke={signal.color}
              strokeWidth="3.5"
            />
          ))}
        </g>

        {/* Moving connection lines */}
        {signals.map((signal, index) => (
          <g key={signal.label}>
            <path
              d={signal.path}
              fill="none"
              stroke={
                index % 2 === 0
                  ? signal.color
                  : `url(#${orangeId})`
              }
              strokeWidth={index % 2 === 0 ? 1.45 : 1.8}
              strokeLinecap="round"
              className="signal-line"
            />

            <path
              d={signal.path}
              fill="none"
              stroke={signal.color}
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeDasharray="35 620"
              className="signal-pulse"
              style={{
                animationDelay: `${index * -1.4}s`,
              }}
            />
          </g>
        ))}

        {/* Glass layers */}
        {glassPanels.map((shape, index) => (
          <path
            key={shape}
            d={shape}
            fill={`url(#${glassId})`}
            stroke="#FFFFFF"
            strokeOpacity={0.34 - index * 0.035}
            strokeWidth="0.85"
          />
        ))}

        {/* Floating data particles */}
        {particles.map((particle, index) => (
          <rect
            key={index}
            x={particle.x}
            y={particle.y}
            width={particle.size}
            height={particle.size}
            fill={index % 3 === 0 ? "#FFA500" : "#F5EDE1"}
            opacity={particle.opacity}
            className="data-particle"
            style={{
              animationDelay: `${(index % 11) * -0.35}s`,
            }}
          />
        ))}

        {/* Complexity annotation */}
        <rect
          x="742"
          y="72"
          width="151"
          height="211"
          fill="#111111"
          fillOpacity="0.75"
          stroke="#FFFFFF"
          strokeOpacity="0.22"
        />

        {[
          ["MORE PEOPLE.", "#E2E2E2"],
          ["MORE DATA.", "#E2E2E2"],
          ["MORE OPPORTUNITY.", "#E2E2E2"],
          ["BUT ALSO", "#FFA500"],
          ["MORE COMPLEXITY.", "#FFA500"],
        ].map(([label, color], index) => (
          <text
            key={label}
            x="756"
            y={121 + index * 27 + (index > 2 ? 8 : 0)}
            fill={color}
            fontSize="10.5"
            fontWeight="600"
            letterSpacing="0.9"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
}

function ChallengeGraphic({
  type,
}: {
  type: ChallengeType;
}) {
  if (type === "systems") {
    return (
      <svg
        viewBox="0 0 360 100"
        preserveAspectRatio="none"
        className="block h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {[80, 160, 240, 320].map((x) => (
          <path
            key={x}
            d={`M${x} 0V100`}
            stroke="#FFFFFF"
            strokeOpacity="0.1"
            strokeDasharray="2 6"
          />
        ))}

        <path
          d="M0 53C60 55 85 8 145 24S245 90 360 50"
          stroke="#ECE4D9"
          strokeOpacity="0.72"
          strokeWidth="1.5"
        />

        <path
          d="M0 38C70 28 98 56 156 69S240 67 286 44S336 36 360 40"
          stroke="#FFA500"
          strokeWidth="1.8"
          className="mini-signal"
        />

        <rect x="112" y="49" width="6" height="6" fill="#FFA500" />
        <rect x="227" y="63" width="6" height="6" fill="#FFA500" />
      </svg>
    );
  }

  if (type === "processes") {
    return (
      <svg
        viewBox="0 0 360 100"
        preserveAspectRatio="none"
        className="block h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={18 + i * 70}
            y={65 - i * 12}
            width="50"
            height={35 + i * 12}
            fill="#FFFFFF"
            fillOpacity="0.045"
            stroke="#FFFFFF"
            strokeOpacity="0.12"
          />
        ))}

        <path
          d="M0 78H74V65H144V52H214V39H284V26H360"
          stroke="#FFA500"
          strokeWidth="1.8"
          className="mini-signal"
        />

        <circle cx="284" cy="26" r="3.3" fill="#FFA500" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 100"
      preserveAspectRatio="none"
      className="block h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="visibilitySphere"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.65" />
          <stop
            offset="1"
            stopColor="#FFFFFF"
            stopOpacity="0.04"
          />
        </linearGradient>
      </defs>

      <path
        d="M0 50H360"
        stroke="#FFFFFF"
        strokeOpacity="0.1"
        strokeDasharray="3 6"
      />

      <circle
        cx="180"
        cy="110"
        r="92"
        stroke="#FFFFFF"
        strokeOpacity="0.4"
      />

      <circle
        cx="180"
        cy="110"
        r="63"
        fill="url(#visibilitySphere)"
      />

      <path
        d="M180 0V100"
        stroke="#FFA500"
        strokeWidth="1.6"
      />

      <path
        d="M180 18A92 92 0 0 1 271 100"
        stroke="#FFA500"
        strokeWidth="2.3"
        className="mini-signal"
      />
    </svg>
  );
}

function ChallengeItem({
  challenge,
  index,
}: {
  challenge: Challenge;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const detailId = `challenge-detail-${index}`;

  return (
    <article className="group min-w-0 border-t border-white/15 pt-5 lg:border-t-0 lg:border-l lg:pl-7 lg:first:border-l-0 lg:first:pl-0 xl:pl-8">
      <div className="flex items-start gap-3">
        <span className="shrink-0 pt-0.5   text-[#FFA500]">
          {challenge.number}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="    text-white ">
            {challenge.title}
          </h3>

          <p className="mt-2 max-w-[280px]   text-white/65 ">
            {challenge.description}
          </p>
        </div>

        <button
          type="button"
          aria-label={`${expanded ? "Hide" : "Read more about"} ${challenge.title}`}
          aria-expanded={expanded}
          aria-controls={detailId}
          onClick={() => setExpanded((value) => !value)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#FFA500]/80 text-[#FFA500] transition-colors duration-200 hover:bg-[#FFA500] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFA500]"
        >
          <span
            className={`transition-transform duration-200 ${
              expanded
                ? "rotate-90"
                : "group-hover:translate-x-0.5"
            }`}
          >
            <ArrowIcon />
          </span>
        </button>
      </div>

      <div className="relative mt-4 h-[92px] overflow-hidden border border-white/10 bg-[#191919] sm:h-[100px]">
        <ChallengeGraphic type={challenge.type} />
      </div>

      <div
        id={detailId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          expanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-l-2 border-[#FFA500] pb-1 pl-3 pt-4   text-white/65">
            {challenge.detail}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function DigitalTransformationChallenges() {
  return (
    <section
      id="transformation-challenges"
      className="relative overflow-hidden bg-[#0C0C0C] text-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[68px] xl:px-16">
        {/* Main introduction */}
        <div className="grid items-center gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-8 bg-[#FFA500]" />
              <span className="  uppercase  text-[#FFA500] ">
                Where transformation starts
              </span>
            </div>

            <h2 className="mt-6    ">
              Your business
              <br />
              is growing.
              <br />
              <span className="text-[#FFA500]">
                Why does everything
                <br className="hidden xl:block" />
                {" "}feel harder?
              </span>
            </h2>

            <p className="mt-4 max-w-[520px]   text-white/65 ">
              As businesses grow, systems don&apos;t always keep up.
              Information gets scattered, processes become harder to
              manage, and teams spend more time working around problems
              than moving forward.
            </p>
          </div>

          <div className="relative -mx-3 h-[220px] sm:mx-0 sm:h-[280px] lg:h-[320px] xl:h-[340px]">
            <ComplexityVisual />
          </div>
        </div>

        {/* Business challenges */}
        <div className="mt-8 grid gap-7 lg:mt-9 lg:grid-cols-3 lg:gap-0">
          {challenges.map((challenge, index) => (
            <ChallengeItem
              key={challenge.number}
              challenge={challenge}
              index={index}
            />
          ))}
        </div>

        {/* Closing: single strong conclusion */}
        <div className="mt-9 border-t border-white/20 pt-7 lg:mt-10 lg:pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
            <h3 className="max-w-[850px]    ">
              Growth shouldn&apos;t create more friction.
              <br />
              <span className="text-[#FFA500]">
                It should create more possibility.
              </span>
            </h3>

            <a
              href="#transformation-approach"
              className="group/link inline-flex shrink-0 items-center gap-4 self-start   text-white/75 transition-colors hover:text-white md:self-end"
            >
              <span className="border-b border-white/30 pb-1 transition-colors group-hover/link:border-[#FFA500]">
                See how we approach it
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FFA500]/80 text-[#FFA500] transition-all duration-300 group-hover/link:bg-[#FFA500] group-hover/link:text-black group-hover/link:rotate-45">
                <ArrowIcon diagonal />
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infitechSignalFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -655;
          }
        }

        @keyframes infitechParticleFloat {
          0%,
          100% {
            opacity: 0.22;
            transform: translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-5px);
          }
        }

        @keyframes infitechMiniFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -120;
          }
        }

        .signal-pulse {
          animation: infitechSignalFlow 9s linear infinite;
        }

        .data-particle {
          animation: infitechParticleFloat 4.5s ease-in-out infinite;
        }

        .mini-signal {
          stroke-dasharray: 12 5;
          animation: infitechMiniFlow 10s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .signal-pulse,
          .data-particle,
          .mini-signal {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
