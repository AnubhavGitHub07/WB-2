"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SeasonalGarden() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax effect for the image
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text fade in
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-48 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div ref={imageRef} className="absolute inset-0 h-[120%] -top-[10%]">
          <Image
            src="/images/autumn.png"
            alt="翠月の日本庭園"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex justify-end">
        <div ref={textRef} className="bg-background/95 backdrop-blur-sm p-12 md:p-16 max-w-lg border border-border/50">
          <span className="font-sans text-xs tracking-widest text-primary mb-6 block">庭園</span>
          <h2 className="font-heading text-3xl tracking-widest mb-6">四季を映す庭園</h2>
          <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground mb-8">
            春の桜、夏の新緑、秋の紅葉、冬の雪景色。
            茶室から望む枯山水の庭園は、季節ごとにその表情を静かに変えます。
            自然との調和を感じながら、心穏やかなひとときをお過ごしください。
          </p>
          <Link href="/gallery" className={cn(buttonVariants({ variant: "outline" }), "rounded-none border-border hover:bg-primary hover:text-primary-foreground font-sans tracking-widest text-xs h-12 px-8")}>
            庭園を散策する
          </Link>
        </div>
      </div>
    </section>
  );
}
