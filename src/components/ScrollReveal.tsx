import React, { useEffect, useMemo, useRef, useState } from "react";

type ScrollRevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

type ScrollRevealOwnProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delayMs?: number;
  durationMs?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

type ScrollRevealProps<T extends React.ElementType> = ScrollRevealOwnProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ScrollRevealOwnProps<T> | "as">;

export function ScrollReveal<T extends React.ElementType = "div">({
  as,
  children,
  className,
  variant = "up",
  delayMs = 0,
  durationMs = 650,
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
  ...rest
}: ScrollRevealProps<T>) {
  const Component = (as ?? "div") as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, prefersReducedMotion, rootMargin, threshold]);

  return (
    <Component
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      {...rest}
      className={
        [
          "sr",
          `sr-${variant}`,
          isVisible ? "sr-visible" : "sr-hidden",
          className,
        ]
          .filter(Boolean)
          .join(" ")
      }
      style={{
        ...(rest as { style?: React.CSSProperties }).style,
        transitionDelay: `${delayMs}ms`,
        transitionDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </Component>
  );
}
