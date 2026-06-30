import { legalConfig } from "@/config/legal";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  const { title, lastUpdated, sections } = legalConfig.privacyPolicy;

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="py-20 text-center">
          <h1 className="font-heading text-3xl md:text-4xl tracking-[0.2em] mb-6">{title}</h1>
          <p className="font-sans text-xs tracking-widest text-muted-foreground">
            最終更新日：{lastUpdated}
          </p>
        </div>

        <Separator className="bg-border/50 mb-16" />

        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="font-heading text-xl tracking-widest mb-6">{section.title}</h2>
              <p className="font-sans text-sm leading-loose tracking-widest text-muted-foreground">
                {section.content}
              </p>
            </section>
          ))}
        </div>
        
      </div>
    </div>
  );
}
