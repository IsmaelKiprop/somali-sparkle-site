import React, { useEffect, useMemo, useRef } from "react";

type ScrollProgressOwnProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  start?: number;
  end?: number;
};

type ScrollProgressProps<T extends React.ElementType> = ScrollProgressOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ScrollProgressOwnProps<T> | "as">;

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

export function ScrollProgress<T extends React.ElementType = "div">({
  as,
  children,
  className,
  start = 0.15,
  end = 0.75,
  ...rest
}: ScrollProgressProps<T>) {
  const Component = (as ?? "div") as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const rafId = useRef<number | null>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      el.style.setProperty("--sp", "1");
      return;
    }

    const update = () => {
      rafId.current = null;
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const p = (vh - rect.top) / (vh + rect.height);
      const t = (p - start) / (end - start);
      node.style.setProperty("--sp", clamp01(t).toFixed(4));
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
  }, [end, prefersReducedMotion, start]);

  return (
    <Component
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      {...rest}
      className={className}
    >
      {children}
    </Component>
  );
}
