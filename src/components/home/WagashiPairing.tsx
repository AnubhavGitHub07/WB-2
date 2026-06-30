"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function WagashiPairing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, filter: "blur(2px)" },
        {
          scale: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 flex flex-col items-start z-10">
          <span className="font-sans text-xs tracking-widest text-primary mb-6">和菓子</span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-widest mb-8 leading-relaxed">
            季節の移ろいを、<br />
            手のひらの上に
          </h2>
          <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground">
            お茶の味わいを引き立てる和菓子。
            翠月では、京都の老舗和菓子店と提携し、季節ごとの美しい生菓子をご用意しております。
            視覚で季節を感じ、舌でほのかな甘みを楽しむ。お茶と和菓子が織りなす見事な調和をお楽しみください。
          </p>
        </div>
        
        <div className="md:w-1/2 w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <div ref={imageRef} className="absolute inset-0 w-full h-full">
              <Image
                src="/images/wagashi.png"
                alt="季節の和菓子"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
