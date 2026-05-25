"use client";

import React from "react";

export default function CoilLogo({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const rings = [
    { cx: 30,  delay: "0s" },
    { cx: 60,  delay: "0.18s" },
    { cx: 90,  delay: "0.36s" },
    { cx: 120, delay: "0.54s" },
    { cx: 150, delay: "0.72s" },
  ];

  return (
    <svg
      viewBox="0 0 232 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <style>{`
        @keyframes coil-wave {
          0%,  100% { transform: translateY(0px);  opacity: 0.45; }
          50%        { transform: translateY(-6px); opacity: 1;    }
        }
        .coil-ring {
          animation: coil-wave 2s ease-in-out infinite;
        }
      `}</style>
      <g transform="skewX(13)">
        {rings.map((r, i) => (
          <ellipse
            key={i}
            className="coil-ring"
            cx={r.cx}
            cy={112}
            rx={27}
            ry={108}
            stroke="#3E3A36"
            strokeWidth={1.4}
            style={{ animationDelay: r.delay }}
          />
        ))}
      </g>
    </svg>
  );
}
