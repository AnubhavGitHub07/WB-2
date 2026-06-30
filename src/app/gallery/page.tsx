"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";

const exhibits = [
  {
    title: "静寂への入り口",
    subtitle: "露地",
    description: "俗世から離れ、茶室へと向かう露地（庭）。飛び石を一歩ずつ進むごとに、心の塵が落ちていくのを感じます。手水鉢の水音だけが響く空間です。",
    image: "/images/autumn.png",
    alignment: "right"
  },
  {
    title: "光と影の織りなす空間",
    subtitle: "障子と光",
    description: "障子越しに差し込む柔らかな自然光。季節、天候、そして時間帯によって刻々と表情を変える光の芸術が、茶室の空気を神聖なものにしています。",
    image: "/images/hero.png",
    alignment: "left"
  },
  {
    title: "一期一会の設え",
    subtitle: "床の間",
    description: "床の間には、その日の客人を想って亭主が選んだ掛軸と茶花が飾られます。余計なものを削ぎ落としたミニマリズムの中に、無限の広がりを感じる空間。",
    image: "/images/autumn.png",
    alignment: "center"
  }
];

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".exhibit-image");
      images.forEach((img: unknown) => {
        const imageElement = img as HTMLElement;
        gsap.to(imageElement, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: imageElement.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });

      const texts = gsap.utils.toArray(".exhibit-text");
      texts.forEach((text: unknown) => {
        const textElement = text as HTMLElement;
        gsap.fromTo(textElement, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.5, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: textElement,
              start: "top 85%"
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
        <h1 className="font-heading text-4xl md:text-5xl tracking-[0.2em] mb-6">空間と庭園</h1>
        <p className="font-sans text-sm md:text-base leading-loose tracking-widest text-muted-foreground">
          建築と自然が一体となった「翠月」の意匠。<br />
          言葉を超えた、視覚と感覚の展示室へようこそ。
        </p>
      </div>

      <div ref={containerRef} className="space-y-40 mt-10">
        {exhibits.map((exhibit, index) => (
          <div key={index} className="relative w-full">
            <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center relative">
              
              {/* Layout based on alignment */}
              <div className={`flex flex-col ${exhibit.alignment === 'right' ? 'md:flex-row' : exhibit.alignment === 'left' ? 'md:flex-row-reverse' : 'items-center'} gap-12 md:gap-24`}>
                
                {/* Text Content */}
                <div className={`w-full ${exhibit.alignment === 'center' ? 'max-w-2xl text-center mb-16' : 'md:w-1/3 flex flex-col justify-center z-10'}`}>
                  <div className="exhibit-text bg-background/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0">
                    <span className="font-sans text-xs tracking-widest text-primary mb-4 block">{exhibit.subtitle}</span>
                    <h2 className="font-heading text-3xl md:text-4xl tracking-widest mb-6">{exhibit.title}</h2>
                    <Separator className={`bg-border mb-6 ${exhibit.alignment === 'center' ? 'mx-auto' : ''} max-w-[100px]`} />
                    <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground">
                      {exhibit.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className={`w-full ${exhibit.alignment === 'center' ? 'aspect-video' : 'md:w-2/3 aspect-[4/3]'} relative overflow-hidden`}>
                  <Image 
                    src={exhibit.image} 
                    alt={exhibit.title} 
                    fill 
                    className="exhibit-image object-cover scale-110" 
                  />
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
