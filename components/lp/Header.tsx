"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* ロゴ */}
        <Link
          href="/"
          className="font-black text-navy-700 text-base sm:text-lg leading-tight shrink-0"
        >
          {SITE.name}
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500">
          <Link href="/ranking" className="hover:text-navy-700 transition-colors">
            ランキング
          </Link>
          <a href="/#overview" className="hover:text-navy-700 transition-colors">
            サービス
          </a>
          <a href="/#features" className="hover:text-navy-700 transition-colors">
            特徴
          </a>
          <a href="/#faq" className="hover:text-navy-700 transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTAボタン */}
        <Link
          href="/ranking"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm py-2 px-4 sm:px-6 rounded-full transition-colors duration-200 shrink-0"
        >
          ランキングを見る
        </Link>
      </div>
    </header>
  );
}
