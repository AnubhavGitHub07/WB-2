"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TeaCeremonyExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      ).fromTo(
        textRef.current?.children ? Array.from(textRef.current.children) : [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
        "-=1"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div ref={imageRef} className="relative aspect-[3/4] w-full max-w-md mx-auto md:max-w-none overflow-hidden">
          <Image
            src="/images/matcha.png"
            alt="お点前の様子"
            fill
            className="object-cover"
          />
        </div>
        
        <div ref={textRef} className="flex flex-col items-start max-w-lg">
          <span className="font-sans text-xs tracking-widest text-primary mb-6">体験</span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-widest mb-8 leading-relaxed">
            日常を離れ、<br />
            今この瞬間に心を澄ます
          </h2>
          <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground mb-8">
            茶室に足を踏み入れた瞬間から、特別な時間が始まります。
            湯の沸く松風の音、抹茶の豊かな香り、そして亭主の無駄のない所作。
            五感を研ぎ澄まし、ただ一服の茶を味わうという至福の体験をご用意しております。
          </p>
          <Link href="/ceremony" className={cn(buttonVariants({ variant: "outline" }), "rounded-none border-border hover:bg-primary hover:text-primary-foreground font-sans tracking-widest text-xs h-12 px-8")}>
            茶の湯体験について
          </Link>
        </div>
      </div>
    </section>
  );
}
