"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function FadeIn({ 
  children, 
  stagger = false, 
  className = "",
  delay = 0
}: { 
  children: React.ReactNode; 
  stagger?: boolean; 
  className?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isMobile, reduceMotion } = context.conditions as { isMobile: boolean, reduceMotion: boolean };

      // If user prefers reduced motion, just show the elements without animation
      if (reduceMotion) {
        gsap.set(containerRef.current, { opacity: 1, y: 0 });
        if (stagger && containerRef.current?.children) {
            gsap.set(containerRef.current.children, { opacity: 1, y: 0 });
        }
        return;
      }

      const elements = stagger && containerRef.current?.children ? Array.from(containerRef.current.children) : containerRef.current;
      
      // Setup initial state to prevent flash of unstyled content
      gsap.set(elements, { opacity: 0, y: isMobile ? 15 : 30 });

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.6 : 1, // Faster on mobile
        stagger: stagger ? (isMobile ? 0.1 : 0.2) : 0,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: isMobile ? "top 95%" : "top 85%", // Trigger earlier on mobile so it doesn't pop in late
          // Only play once for performance, especially on mobile
          once: true 
        },
      });
    });

    return () => mm.revert();
  }, [stagger, delay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
