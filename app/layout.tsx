import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "迷わない買い物ラボ | Amazon商品レビュー＆ランキング",
  description:
    "忙しい30〜50代のために、本当にいいAmazon商品を正直にレビュー。コスパ重視のランキングで「これで決まり！」が見つかります。",
  keywords: "Amazon, レビュー, ランキング, コスパ, おすすめ商品",
  openGraph: {
    title: "迷わない買い物ラボ",
    description: "「これで決まり！」が見つかるAmazon商品レビュー＆ランキング",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
