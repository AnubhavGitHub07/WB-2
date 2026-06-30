import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl tracking-widest mb-8">
          一期一会のひとときを
        </h2>
        <p className="font-sans text-sm md:text-base leading-loose tracking-widest text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
          {siteConfig.description}
          <br />
          日常の喧騒から離れ、静寂に包まれた空間で、心ゆくまでお茶をお楽しみください。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), "rounded-none bg-background text-foreground hover:bg-background/90 font-sans tracking-widest text-sm h-14 px-12")}>
            ご予約はこちら
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "rounded-none border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-sans tracking-widest text-sm h-14 px-12")}>
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
