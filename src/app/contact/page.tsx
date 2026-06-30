"use client";

import { companyConfig } from "@/config/company";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center py-20">
          <h1 className="font-heading text-4xl md:text-5xl tracking-[0.2em] mb-6">ご予約・お問合せ</h1>
          <p className="font-sans text-sm md:text-base leading-loose tracking-widest text-muted-foreground max-w-2xl mx-auto">
            茶の湯体験のご予約、またはご不明な点などがございましたら、<br className="hidden md:block"/>
            下記のフォームよりお気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-10">
          
          {/* Contact Info */}
          <div className="order-2 lg:order-1 flex flex-col space-y-12">
            <div>
              <h2 className="font-heading text-2xl tracking-widest mb-6">茶室 翠月</h2>
              <Separator className="bg-border mb-8 max-w-xs" />
              <div className="space-y-4 font-sans text-sm tracking-widest text-muted-foreground leading-loose">
                <p>{companyConfig.address}</p>
                <p>電話：{companyConfig.phone}</p>
                <p>メール：{companyConfig.email}</p>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg tracking-widest mb-4">営業時間のご案内</h3>
              <div className="space-y-2 font-sans text-sm tracking-widest text-muted-foreground">
                <p>営業時間：{companyConfig.businessHours}</p>
                <p>定休日：{companyConfig.closedDays}</p>
              </div>
            </div>

            <div className="flex gap-6 font-sans text-xs tracking-widest">
              <a href={companyConfig.social.instagram} className="hover:text-primary transition-colors">INSTAGRAM</a>
              <a href={companyConfig.social.twitter} className="hover:text-primary transition-colors">X (TWITTER)</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2 bg-secondary/20 p-8 md:p-12 border border-border/50">
            {submitted ? (
              <div className="text-center py-20">
                <h3 className="font-heading text-2xl tracking-widest mb-4 text-primary">送信完了</h3>
                <p className="font-sans text-sm tracking-widest text-muted-foreground leading-loose">
                  お問い合わせを受け付けました。<br />
                  担当者より折り返しご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-sans">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs tracking-widest text-foreground">お名前 <span className="text-primary">*</span></label>
                  <Input id="name" required className="rounded-none border-t-0 border-x-0 border-b-border bg-transparent focus-visible:ring-0 focus-visible:border-b-primary px-0 h-12" placeholder="千 宗月" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs tracking-widest text-foreground">メールアドレス <span className="text-primary">*</span></label>
                  <Input id="email" type="email" required className="rounded-none border-t-0 border-x-0 border-b-border bg-transparent focus-visible:ring-0 focus-visible:border-b-primary px-0 h-12" placeholder="info@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs tracking-widest text-foreground">お問い合わせ内容 <span className="text-primary">*</span></label>
                  <Input id="subject" required className="rounded-none border-t-0 border-x-0 border-b-border bg-transparent focus-visible:ring-0 focus-visible:border-b-primary px-0 h-12" placeholder="茶の湯体験のご予約について" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs tracking-widest text-foreground">メッセージ <span className="text-primary">*</span></label>
                  <Textarea id="message" required className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary min-h-[150px] resize-none" placeholder="ご希望の日時や人数、その他ご質問などをご記入ください。" />
                </div>

                <Button type="submit" className="w-full rounded-none bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest h-14">
                  送信する
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
