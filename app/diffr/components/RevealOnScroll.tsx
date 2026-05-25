"use client";
// Wraps any element and adds .visible class when it enters the viewport.
// CSS in page.tsx handles the actual transition (opacity + translateY).

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number; // ms stagger
  tag?: "div" | "section" | "li";
}

export default function RevealOnScroll({ children, className = "", delay = 0, tag: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={`diffr-reveal ${className}`}>
      {children}
    </Tag>
  );
}
