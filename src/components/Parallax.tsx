"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Gentle scroll parallax: the inner layer drifts vertically as the element
 * moves through the viewport (scaled up so edges never show). Disabled under
 * prefers-reduced-motion.
 */
export function Parallax({
  children,
  strength = 46,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = outer.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewport) return;
      // -1 (element below viewport) → 1 (element above viewport)
      const progress =
        (rect.top + rect.height / 2 - viewport / 2) / (viewport / 2 + rect.height / 2);
      inner.style.transform = `translateY(${(-progress * strength).toFixed(1)}px) scale(1.08)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={outerRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
