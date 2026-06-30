import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "翠月 (Suigetsu) | 伝統的な茶の湯の世界",
  description: "一期一会の心を、一杯の茶に込めて。京都祇園の伝統的な茶室「翠月」。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className="h-full antialiased scroll-smooth dark font-sans"
    >
      <head>
        {/* Using native Japanese system fonts in globals.css to completely eliminate render-blocking fonts */}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
