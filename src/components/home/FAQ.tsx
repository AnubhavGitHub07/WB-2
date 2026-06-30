"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "茶道の経験がなくても参加できますか？",
    answer: "はい、ご参加いただけます。亭主が一から丁寧に作法をお教えしますので、初めての方でも安心してお楽しみいただけます。",
  },
  {
    question: "服装に決まりはありますか？",
    answer: "特に厳しい決まりはございませんが、落ち着いた服装をお勧めしております。また、茶室（畳）に入りますので、白い靴下（または足袋）のご持参をお願いしております。香りの強い香水はお控えください。",
  },
  {
    question: "予約は必要ですか？",
    answer: "はい、一期一会の準備を整えるため、完全予約制とさせていただいております。当ウェブサイトのお問い合わせフォーム、またはお電話にて承ります。",
  },
  {
    question: "写真撮影は可能ですか？",
    answer: "他のお客様のご迷惑にならない範囲で、静かな撮影は可能です。ただし、お点前の最中や、フラッシュを使用した撮影はご遠慮いただいております。",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-6 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-widest text-primary mb-4 block">よくあるご質問</span>
          <h2 className="font-heading text-3xl tracking-widest">よくあるご質問</h2>
        </div>
        
        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="font-heading text-base md:text-lg tracking-wider hover:no-underline hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm leading-loose tracking-widest text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
