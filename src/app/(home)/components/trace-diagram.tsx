interface TraceNode {
  y: number;
  label: string;
  year: string;
}

export default function TraceDiagram() {
  const nodes: TraceNode[] = [
    { y: 30, label: "Redes & fibra óptica", year: "2019" },
    { y: 140, label: "Front-end (React)", year: "2021" },
    { y: 250, label: "Back-end & dados", year: "2022" },
    { y: 360, label: "Full-stack", year: "Atual" },
    { y: 470, label: "Professor de Programação", year: "Atual" },
  ];

  return (
    <>
      <svg viewBox="0 0 320 540" fill="none" className="w-56 sm:w-64 lg:w-80 h-auto">
        <line x1="36" y1="20" x2="36" y2="510" className="stroke-neutral-700" strokeWidth="2" />
        <line
          x1="36"
          y1="20"
          x2="36"
          y2="510"
          className="stroke-amber-400 trace-line"
          strokeWidth="2"
          pathLength="490"
        />
        <circle className="fill-amber-400 signal-dot" cx="36" cy="20" r="4" />
        {nodes.map((n, i) => (
          <g key={i}>
            <rect
              x="30"
              y={n.y - 6}
              width="12"
              height="12"
              className="fill-background stroke-amber-400"
              strokeWidth="2"
            />
            <line x1="42" y1={n.y} x2="60" y2={n.y} className="stroke-neutral-700" strokeWidth="2" />
            <text x="66" y={n.y + 4} className="fill-white text-sm font-medium">
              {n.label}
            </text>
            <text x="66" y={n.y + 20} className="fill-neutral-500 text-xs font-mono">
              {n.year}
            </text>
          </g>
        ))}
      </svg>
      <style jsx>{`
        @keyframes drawTrace {
          from {
            stroke-dashoffset: 490;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .trace-line {
          stroke-dasharray: 490;
          stroke-dashoffset: 490;
          animation: drawTrace 1.9s ease-out 0.2s forwards;
        }
        @keyframes signalPulse {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translateY(490px);
            opacity: 0;
          }
        }
        .signal-dot {
          animation: signalPulse 5.2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}