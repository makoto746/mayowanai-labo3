"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/constants";

const NAV_ITEMS = [
  { label: "ランキング", href: "/ranking", isLink: true },
  { label: "サービス", href: "/#overview", isLink: false },
  { label: "特徴", href: "/#features", isLink: false },
  { label: "FAQ", href: "/#faq", isLink: false },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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
          {NAV_ITEMS.map((item) =>
            item.isLink ? (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-navy-700 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-navy-700 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-1">
          {/* CTAボタン */}
          <Link
            href="/ranking"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm py-2 px-4 sm:px-6 rounded-full transition-colors duration-200 shrink-0"
          >
            ランキングを見る
          </Link>

          {/* ハンバーガーボタン（モバイルのみ） */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ml-1"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 origin-center ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-600 transition-all duration-200 origin-center ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="border-t border-gray-100 bg-white px-4 py-2 flex flex-col">
          {NAV_ITEMS.map((item) =>
            item.isLink ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-gray-700 font-bold hover:text-navy-700 transition-colors text-sm border-b border-gray-50 last:border-0"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-gray-700 font-bold hover:text-navy-700 transition-colors text-sm border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
