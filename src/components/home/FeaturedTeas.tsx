"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const teas = [
  {
    name: "濃茶「無相」",
    origin: "京都府宇治市",
    image: "/images/matcha.png",
  },
  {
    name: "薄茶「清風」",
    origin: "京都府和束町",
    image: "/images/matcha-usucha.png",
  },
  {
    name: "季節の玉露",
    origin: "福岡県八女市",
    image: "/images/gyokuro.png",
  }
];

export function FeaturedTeas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children ? Array.from(cardsRef.current.children) : [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-sans text-xs tracking-widest text-primary mb-4">銘茶</span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-[0.2em] mb-6">厳選されたお茶</h2>
          <p className="font-sans text-sm tracking-widest text-muted-foreground max-w-lg">
            全国の茶園から厳選し、亭主自らが吟味した最高品質の茶葉のみを使用しております。
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teas.map((tea) => (
            <Link key={tea.name} href="/collection" className="group">
              <Card className="rounded-none border-border bg-card hover:border-primary/50 transition-colors duration-500 overflow-hidden h-full flex flex-col">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={tea.image}
                      alt={tea.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col items-center text-center">
                    <span className="font-sans text-[0.65rem] font-bold tracking-widest text-foreground mb-3">{tea.origin}</span>
                    <h3 className="font-heading text-lg tracking-widest text-foreground group-hover:text-primary transition-colors">{tea.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
