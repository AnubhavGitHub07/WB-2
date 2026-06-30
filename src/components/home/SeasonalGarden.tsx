import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/animations/FadeIn";

export function SeasonalGarden() {
  return (
    <section className="relative py-48 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/autumn.png"
          alt="翠月の日本庭園"
          className="object-cover object-center"
          fill
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex justify-end">
        <FadeIn className="bg-background/95 backdrop-blur-sm p-12 md:p-16 max-w-lg border border-border/50">
          <span className="font-sans text-xs tracking-widest text-primary mb-6 block">庭園</span>
          <h2 className="font-heading text-3xl tracking-widest mb-6">四季を映す庭園</h2>
          <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground mb-8">
            春の桜、夏の新緑、秋の紅葉、冬の雪景色。
            茶室から望む枯山水の庭園は、季節ごとにその表情を静かに変えます。
            自然との調和を感じながら、心穏やかなひとときをお過ごしください。
          </p>
          <Link href="/gallery" className={cn(buttonVariants({ variant: "outline" }), "rounded-none border-border hover:bg-primary hover:text-primary-foreground font-sans tracking-widest text-xs h-12 px-8")}>
            庭園を散策する
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
