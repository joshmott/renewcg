"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Buttery smooth scrolling (Lenis) + eased anchor navigation.
 * Skipped entirely when the visitor prefers reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.15 });
    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    // Arriving with a hash (e.g. navigating home from /services/… → /#contact):
    // ease to the target once it's painted.
    if (window.location.hash.length > 1) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        requestAnimationFrame(() =>
          lenis.scrollTo(target as HTMLElement, { offset: -84, immediate: false }),
        );
      }
    }

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -84, duration: 1.4 });
      history.replaceState(null, "", href);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
