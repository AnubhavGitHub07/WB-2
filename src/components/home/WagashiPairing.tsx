import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

export function WagashiPairing() {
  return (
    <section className="py-24 px-6 md:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <FadeIn className="md:w-1/2 flex flex-col items-start z-10">
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
        </FadeIn>
        
        <FadeIn delay={0.2} className="md:w-1/2 w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/wagashi.png"
                alt="季節の和菓子"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
