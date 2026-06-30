"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";

const collections = [
  {
    name: "濃茶「無相」",
    type: "Matcha",
    origin: "京都府宇治市",
    aroma: "深く甘い、静寂を思わせる豊かな香り",
    flavor: "雑味がなく、まろやかで奥深い旨味が口いっぱいに広がる",
    brewing: "少量の湯で練るように点てる濃茶仕立て",
    season: "初昔（新茶の季節）から秋深まる頃",
    significance: "亭主がもっとも心を砕き、客人との深い結びつきを象徴する最高級の抹茶",
    image: "/images/matcha.png",
  },
  {
    name: "薄茶「清風」",
    type: "Matcha",
    origin: "京都府和束町",
    aroma: "新緑を吹き抜ける爽やかな風のような香り",
    flavor: "軽やかで爽快な苦みの中に、ほのかな甘みが残る",
    brewing: "茶筅でふんわりと泡立てる薄茶仕立て",
    season: "通年（特に夏の涼を求める時期に最適）",
    significance: "濃茶の後に口をさっぱりとさせ、和やかな会話を楽しむための抹茶",
    image: "/images/matcha-usucha.png",
  },
  {
    name: "玉露「滴」",
    type: "Gyokuro",
    origin: "福岡県八女市",
    aroma: "海苔や出汁を思わせる、凝縮された覆い香",
    flavor: "極めて濃厚な旨味と、とろりとした舌触り",
    brewing: "低温（約50℃）でじっくりと時間をかけて抽出",
    season: "冬から春にかけて",
    significance: "日光を遮り、大切に育てられた茶葉の真髄を味わう、至高の日本茶",
    image: "/images/gyokuro.png",
  }
];

export default function CollectionPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".collection-item");
      items.forEach((el: unknown) => {
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
              start: "top 80%",
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
        <h1 className="font-heading text-4xl md:text-5xl tracking-[0.2em] mb-6">お茶の紹介</h1>
        <p className="font-sans text-sm md:text-base leading-loose tracking-widest text-muted-foreground">
          翠月でご提供している、亭主厳選のお茶。<br />
          それぞれの茶葉が持つ固有の香り、味わい、そして背景にある物語をご紹介します。
        </p>
      </div>

      <Separator className="max-w-4xl mx-auto bg-border/50 mb-24" />

      {/* Collection List */}
      <div ref={containerRef} className="max-w-6xl mx-auto px-6 space-y-32">
        {collections.map((tea, index) => (
          <div key={index} className="collection-item flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
            <div className="w-full md:w-5/12 sticky top-32">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={tea.image} alt={tea.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-7/12 flex flex-col pt-4">
              <span className="font-sans text-xs tracking-widest text-primary uppercase mb-4">{tea.type}</span>
              <h2 className="font-heading text-3xl md:text-4xl tracking-widest mb-10">{tea.name}</h2>
              
              <div className="space-y-8 font-sans text-sm tracking-widest text-muted-foreground">
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-foreground">産地</span>
                  <span>{tea.origin}</span>
                </div>
                <Separator className="bg-border/50" />
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-foreground">香り</span>
                  <span>{tea.aroma}</span>
                </div>
                <Separator className="bg-border/50" />
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-foreground">味わい</span>
                  <span>{tea.flavor}</span>
                </div>
                <Separator className="bg-border/50" />
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-foreground">点て方</span>
                  <span>{tea.brewing}</span>
                </div>
                <Separator className="bg-border/50" />
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-foreground">季節</span>
                  <span>{tea.season}</span>
                </div>
                <Separator className="bg-border/50" />
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <span className="text-foreground">意味合い</span>
                  <span className="leading-loose">{tea.significance}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
