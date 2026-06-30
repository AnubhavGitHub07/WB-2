"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ParallaxImage({ 
  src, 
  alt, 
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false
}: { 
  src: string; 
  alt: string; 
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 769px)",
      isMobile: "(max-width: 768px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      const { isDesktop, reduceMotion } = context.conditions as { isDesktop: boolean, reduceMotion: boolean };

      if (reduceMotion || !isDesktop) {
        // No parallax on mobile or reduced motion
        return;
      }

      // Parallax on desktop
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <Image 
        ref={imageRef}
        src={src} 
        alt={alt} 
        fill 
        sizes={sizes}
        priority={priority}
        className="object-cover scale-110 origin-top" 
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
