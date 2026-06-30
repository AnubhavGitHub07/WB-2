import Image from "next/image";
import { contentConfig } from "@/config/content";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dark_hero.png"
          alt="静寂の茶室"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        {/* Soft subtle gradient just for text readability on the left, letting the cinematic image shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-2xl text-white">
          <p className="font-sans text-sm md:text-base tracking-[0.4em] mb-6 text-white/90 drop-shadow-sm">
            {contentConfig.homeHero.subGreeting}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight tracking-widest mb-10 text-white drop-shadow-sm">
            {contentConfig.homeHero.greeting.split("").map((char, index) => (
              <span key={index} className="inline-block">{char}</span>
            ))}
          </h1>

          <div className="flex items-center gap-4 group cursor-pointer w-fit">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-500">
              {contentConfig.homeHero.cta}
            </span>
            <div className="w-12 h-px bg-white/30 group-hover:bg-white group-hover:w-20 transition-all duration-500" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <span className="font-sans text-[0.6rem] tracking-[0.3em] text-white/50" style={{ writingMode: 'vertical-rl' }}>下へスクロール</span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <div className="w-full h-full bg-primary absolute top-0 -translate-y-full animate-[scroll-down_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
