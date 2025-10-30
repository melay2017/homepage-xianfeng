import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "闲丰AI - AI编程实战派 | 让AI编程触手可及",
  description: "一位最懂小白的AI编程学习者，前专利达人·现AI编程实战派，帮你扫清一切障碍，实现人人会AI，人人会编程。专注AI编程落地与陪伴成长。",
  keywords: ["AI编程", "编程学习", "AI技术", "闲丰AI", "人工智能", "实战教程"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
