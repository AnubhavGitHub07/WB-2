"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Separator } from "@/components/ui/separator";

const seasons = [
  {
    name: "春 - 桜花茶会",
    theme: "桜花茶会",
    description: "厳しい冬を越え、生命が息吹く春。満開の桜を愛でながら、華やかな香りの薄茶と、桜を模した美しい生菓子を楽しむ特別な茶会です。茶室には春の陽光が優しく差し込みます。",
    image: "/images/hero.png",
  },
  {
    name: "夏 - 朝涼の茶席",
    theme: "朝涼の茶席",
    description: "夏の暑さを避けた早朝の茶席。打ち水がされた涼やかな路地を抜け、朝露に濡れた緑を眺めながらいただく一服。ガラスの茶碗など、目にも涼しい道具組で客人を迎えます。",
    image: "/images/wagashi.png",
  },
  {
    name: "秋 - 紅葉の濃茶",
    theme: "紅葉の濃茶",
    description: "木々が色づき、一年で最もお茶が美味しいとされる季節（口切の茶事）。熟成された豊かな味わいの濃茶を、秋の深まりを感じさせる侘び寂びの空間でじっくりと堪能します。",
    image: "/images/autumn.png",
  },
  {
    name: "冬 - 夜咄と暖",
    theme: "夜咄と暖",
    description: "寒さ厳しい冬は、炉に火を入れ、身も心も暖まる茶席を。パチパチと炭が爆ぜる音だけが響く静寂の中、湯気の立つ温かなお茶で、深い安らぎの時間を共有します。",
    image: "/images/autumn.png",
  }
];

export default function SeasonsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".season-card");
      cards.forEach((card: unknown) => {
        const element = card as HTMLElement;
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
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
        <h1 className="font-heading text-4xl md:text-5xl tracking-[0.2em] mb-6">季節の催し</h1>
        <p className="font-sans text-sm md:text-base leading-loose tracking-widest text-muted-foreground">
          日本の豊かな四季の移ろいとともに変化するお茶の楽しみ方。<br />
          季節ごとの美しい情景とともに、特別な体験をご用意しております。
        </p>
      </div>

      <Separator className="max-w-4xl mx-auto bg-border/50 mb-24" />

      {/* Seasons */}
      <div ref={containerRef} className="max-w-6xl mx-auto px-6 space-y-32">
        {seasons.map((season, index) => (
          <div key={index} className="season-card flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={season.image} alt={season.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <span className="font-sans text-xs tracking-widest text-primary mb-4 block">{season.theme}</span>
              <h2 className="font-heading text-3xl tracking-widest mb-6">{season.name}</h2>
              <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground">
                {season.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
