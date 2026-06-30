"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contentConfig } from "@/config/content";

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 md:py-48 bg-background relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/philosophy_bg.png"
          alt="和敬清寂"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Darker overlay to ensure text readability against the detailed background */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 relative">
        <div ref={textRef}>
          <h2 className="font-heading text-3xl md:text-5xl tracking-[0.2em] mb-12 text-white drop-shadow-lg">
            {contentConfig.philosophy.title}
          </h2>
          <p className="font-sans text-base md:text-lg leading-loose tracking-widest text-white/90 drop-shadow-md md:px-12 font-medium">
            {contentConfig.philosophy.description}
          </p>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
            {contentConfig.philosophy.principles.map((principle) => (
              <div key={principle.kanji} className="flex flex-col items-center text-center">
                <span className="font-heading text-5xl text-primary mb-4 drop-shadow-md">{principle.kanji}</span>
                <span className="font-sans text-xs tracking-widest text-white/70 uppercase mb-6">{principle.romaji}</span>
                <h3 className="font-heading text-xl tracking-widest mb-4 text-white drop-shadow-md">{principle.title}</h3>
                <p className="font-sans text-sm leading-loose text-white/80 drop-shadow-sm font-medium">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
