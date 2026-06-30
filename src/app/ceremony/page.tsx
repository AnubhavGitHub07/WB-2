"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "一、 席入り",
    description: "手水鉢で手と口を清め、にじり口から茶室へと進みます。非日常の空間への入り口です。",
    image: "/images/matcha.png",
  },
  {
    title: "二、 床の間の拝見",
    description: "亭主が客人を想い、しつらえた掛軸や季節の花（茶花）を拝見し、その心遣いに触れます。",
    image: "/images/autumn.png",
  },
  {
    title: "三、 お菓子の味わい",
    description: "抹茶をいただく前に、季節を映した美しい和菓子（主菓子）をいただきます。甘みが抹茶の旨味を引き立てます。",
    image: "/images/wagashi.png",
  },
  {
    title: "四、 一服の茶",
    description: "静寂の中、亭主がお茶を点てる音（松風）に耳を傾け、点てられたばかりの香り高い抹茶をゆっくりと味わいます。",
    image: "/images/matcha.png",
  },
];

export default function CeremonyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".step-card");
      elements.forEach((el: unknown) => {
        const element = el as HTMLElement;
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 text-center py-20">
        <h1 className="font-heading text-4xl md:text-5xl tracking-[0.2em] mb-6">茶の湯体験</h1>
        <p className="font-sans text-sm md:text-base leading-loose tracking-widest text-muted-foreground">
          茶室という特別な空間で、日常を忘れ、自分自身と向き合う時間。<br />
          初めての方でも安心してご参加いただける、本格的なお点前の流れをご案内いたします。
        </p>
      </div>

      <Separator className="max-w-4xl mx-auto bg-border/50 mb-20" />

      {/* Steps */}
      <div ref={containerRef} className="max-w-5xl mx-auto px-6 space-y-32">
        {steps.map((step, index) => (
          <div key={index} className={`step-card flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
            <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3]">
              <Image src={step.image} alt={step.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="font-sans text-xs tracking-widest text-primary/60 mb-4 block">0{index + 1}</span>
              <h3 className="font-heading text-2xl tracking-widest mb-6">{step.title}</h3>
              <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-xl mx-auto mt-40 text-center px-6">
        <h3 className="font-heading text-2xl tracking-widest mb-8">心静まる体験を、あなたへ</h3>
        <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), "rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-sans tracking-widest text-sm h-14 px-12")}>
          ご予約に進む
        </Link>
      </div>
    </div>
  );
}
