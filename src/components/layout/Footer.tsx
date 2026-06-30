"use client";

import Link from "next/link";
import { footerConfig } from "@/config/footer";
import { companyConfig } from "@/config/company";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-20 px-6 mt-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="mb-6 flex flex-col items-start group">
              <span className="font-heading text-3xl tracking-widest text-foreground group-hover:text-primary transition-colors">
                {siteConfig.name}
              </span>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-card-foreground/80 mt-2">
                {siteConfig.romanizedName}
              </span>
            </Link>
            <p className="text-sm leading-loose text-card-foreground/80 mb-6">
              {siteConfig.tagline}
            </p>
            <div className="text-sm leading-relaxed text-card-foreground/80">
              <p>{companyConfig.address}</p>
              <p className="mt-2">Tel: {companyConfig.phone}</p>
              <p>Email: {companyConfig.email}</p>
              <p className="mt-4">営業時間: {companyConfig.businessHours}</p>
              <p>定休日: {companyConfig.closedDays}</p>
            </div>
          </div>

          {/* Links 1 */}
          <div className="col-span-1">
            <h4 className="font-heading tracking-widest text-lg mb-6">翠月について</h4>
            <ul className="space-y-4">
              {footerConfig.links.about.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-card-foreground/80 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="col-span-1">
            <h4 className="font-heading tracking-widest text-lg mb-6">体験と設え</h4>
            <ul className="space-y-4">
              {footerConfig.links.experience.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-card-foreground/80 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 3 */}
          <div className="col-span-1">
            <h4 className="font-heading tracking-widest text-lg mb-6">サポート</h4>
            <ul className="space-y-4">
              {footerConfig.links.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-card-foreground/80 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
              {footerConfig.links.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-card-foreground/80 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-card-foreground/80 tracking-widest">
          <p>{footerConfig.copyRight}</p>
          <div className="flex gap-6">
            <a href={companyConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              インスタグラム
            </a>
            <a href={companyConfig.social.twitter} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              エックス
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
