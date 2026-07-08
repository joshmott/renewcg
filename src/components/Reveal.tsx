"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Variant = "up" | "line" | "image";

const variantClass: Record<Variant, string> = {
  up: "rv",
  line: "rv-line",
  image: "rv-img",
};

/**
 * Arms a scroll reveal: adds `in` when the element enters the viewport.
 * variant "up" fades+rises, "line" draws a hairline, "image" unmasks.
 */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: {
  children?: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${className}`}
      style={{ "--rv-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
