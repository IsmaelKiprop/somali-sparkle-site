import React, { useEffect, useMemo, useRef, useState } from "react";

type ParallaxProps = {
  children?: React.ReactNode;
  className?: string;
  strengthPx?: number;
  axis?: "x" | "y";
  style?: React.CSSProperties;
};

export function Parallax({
  children,
  className,
  strengthPx = 18,
  axis = "y",
  style,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafId = useRef<number | null>(null);
  const [offset, setOffset] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const update = () => {
      rafId.current = null;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;

      const t = (viewportCenter - elementCenter) / vh;
      const clamped = Math.max(-1, Math.min(1, t));
      setOffset(clamped * strengthPx);
    };

    const onScrollOrResize = () => {
      if (rafId.current != null) return;
      rafId.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [prefersReducedMotion, strengthPx]);

  const transform = prefersReducedMotion
    ? undefined
    : axis === "x"
      ? `translate3d(${offset.toFixed(2)}px, 0, 0)`
      : `translate3d(0, ${offset.toFixed(2)}px, 0)`;

  return (
    <div ref={ref} className={className} style={{ ...style, transform }}>
      {children}
    </div>
  );
}
