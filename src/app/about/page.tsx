import Image from "next/image";
import { companyConfig } from "@/config/company";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/animations/FadeIn";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="翠月の茶室"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
        <FadeIn className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl tracking-[0.2em] mb-4 text-white drop-shadow-sm">翠月について</h1>
          <span className="font-sans text-xs tracking-widest text-primary">私たちの歩み</span>
        </FadeIn>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl tracking-widest mb-12">静寂が息づく場所</h2>
          </FadeIn>
          <FadeIn stagger className="space-y-8 font-sans text-sm md:text-base leading-loose tracking-widest text-muted-foreground">
            <p>
              {companyConfig.foundedYear}年、京都祇園の一角にひっそりと佇むようにして産声を上げた「翠月」。
              初代亭主・{companyConfig.founder}が、「真の安らぎを提供する場を」との思いでこの地に茶室を構えました。
            </p>
            <p>
              翠月という名には、「青々とした木々に囲まれ、清らかに輝く月のように、訪れる人の心を優しく照らす場所でありたい」という願いが込められています。
            </p>
            <p>
              私たちは、流派にとらわれることなく、「和敬清寂」の精神を大切にしながら、
              現代を生きる皆様にとっての「心の拠り所」となることを目指しております。
              何気ない日常のなかで、ふと立ち止まり、自分自身と向き合う時間。
              一服の茶がもたらす、かけがえのないひとときをお約束いたします。
            </p>
          </FadeIn>
        </div>
      </section>

      <Separator className="max-w-xl mx-auto bg-border/50" />

      {/* Architecture & Hospitality */}
      <section className="py-24 px-6 md:py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="伝統的な建築"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="max-w-lg">
            <span className="font-sans text-xs tracking-widest text-primary mb-6 block">建築</span>
            <h3 className="font-heading text-2xl tracking-widest mb-8">受け継がれる美意識</h3>
            <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground mb-8">
              当茶室の建築は、京都の伝統的な数寄屋造りの技法を取り入れつつ、自然の光と影を巧みに活かす設計となっております。
              土壁の温もり、年月を経て味わいを増す木材、そして障子越しに差し込む柔らかな光。
              余分なものを削ぎ落としたミニマルな空間が、お茶の味わいをさらに深くします。
            </p>
            <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground">
              また、お迎えする客人のために亭主が自ら選ぶ掛軸や季節の花々は、その日、その時限りの「一期一会」を象徴しています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
