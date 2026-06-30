import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

export function TeaCeremonyExperience() {
  return (
    <section className="py-24 px-6 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn className="relative aspect-[3/4] w-full max-w-md mx-auto md:max-w-none overflow-hidden">
          <Image
            src="/images/matcha.png"
            alt="お点前の様子"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
        </FadeIn>
        
        <FadeIn stagger delay={0.2} className="flex flex-col items-start max-w-lg">
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
        </FadeIn>
      </div>
    </section>
  );
}
