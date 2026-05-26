"use client";

import React, { useRef, useLayoutEffect, useState, CSSProperties } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: { input: [number, number]; output: [number, number] };
  itemStyle?: CSSProperties;
  wrapperStyle?: CSSProperties;
}

function useElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>
): number {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);
  return width;
}

function VelocityText({
  children,
  baseVelocity,
  scrollContainerRef,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  itemStyle,
  wrapperStyle,
}: VelocityTextProps) {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
  const { scrollY } = useScroll(scrollOptions as Parameters<typeof useScroll>[0]);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false }
  );

  const copyRef = useRef<HTMLSpanElement>(null);
  const copyWidth = useElementWidth(copyRef);

  function wrap(min: number, max: number, v: number): number {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const spans = Array.from({ length: numCopies }, (_, i) => (
    <span
      key={i}
      ref={i === 0 ? copyRef : null}
      className={className}
      style={itemStyle}
    >
      {children}&nbsp;
    </span>
  ));

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        ...wrapperStyle,
      }}
    >
      <motion.div
        style={{
          x,
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        {spans}
      </motion.div>
    </div>
  );
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  texts: React.ReactNode[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: { input: [number, number]; output: [number, number] };
  itemStyle?: CSSProperties;
  wrapperStyle?: CSSProperties;
}

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  texts = [],
  velocity = 80,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  itemStyle,
  wrapperStyle,
}) => {
  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          itemStyle={itemStyle}
          wrapperStyle={wrapperStyle}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
