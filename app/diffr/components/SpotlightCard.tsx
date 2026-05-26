"use client";

import React, { useRef, CSSProperties } from "react";

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
  style?: CSSProperties;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(27, 139, 245, 0.12)",
  style,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`diffr-spotlight-card ${className}`}
      style={
        {
          position: "relative",
          borderRadius: "1.25rem",
          border: "1px solid rgba(42,38,32,0.09)",
          backgroundColor: "#FFFFFF",
          padding: "2rem",
          overflow: "hidden",
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          "--spotlight-color": spotlightColor,
          ...style,
        } as CSSProperties
      }
    >
      {/* Spotlight overlay — pure CSS, no JS on render */}
      <style>{`
        .diffr-spotlight-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--mouse-x) var(--mouse-y),
            var(--spotlight-color),
            transparent 75%
          );
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
          border-radius: inherit;
        }
        .diffr-spotlight-card:hover::before,
        .diffr-spotlight-card:focus-within::before {
          opacity: 1;
        }
      `}</style>
      {children}
    </div>
  );
};

export default SpotlightCard;
