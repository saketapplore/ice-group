"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fadeInUp" | "fadeIn" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideUp";
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animation = "fadeInUp",
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0) translateX(0) scale(1)";
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Set initial state based on animation type
    const initialStyles: Record<string, string> = {
      fadeInUp: "translateY(40px)",
      fadeIn: "translateY(20px)",
      fadeInLeft: "translateX(-40px)",
      fadeInRight: "translateX(40px)",
      scaleIn: "scale(0.9)",
      slideUp: "translateY(60px)",
    };

    element.style.opacity = "0";
    element.style.transform = initialStyles[animation];
    element.style.transition = `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`;
    element.style.willChange = "opacity, transform";

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, duration, animation, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

