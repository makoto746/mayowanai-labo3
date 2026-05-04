"use client";

import { useState } from "react";
import { RANKING_CATEGORIES, RANKING_PRODUCTS } from "@/constants";
import RankingCard from "./RankingCard";

export default function Ranking() {
  const [activeCategory, setActiveCategory] = useState("すべて");

  const withImages = RANKING_PRODUCTS.filter((p) => p.image);
  const filtered =
    activeCategory === "すべて"
      ? withImages
      : withImages.filter((p) => p.category === activeCategory);

  return (
    <section id="ranking" className="bg-white py-14 px-4 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-amber-500 font-bold text-xs sm:text-sm tracking-widest mb-2 uppercase">
            Ranking
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            人気ランキング
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            数千件のレビューとデータを徹底リサーチして厳選した商品を掲載しています
          </p>
        </div>

        {/* カテゴリタブ（横スクロール対応） */}
        <div className="relative mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
            {RANKING_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 snap-start px-4 py-2 rounded-full text-sm font-bold transition-colors duration-150 ${
                  activeCategory === cat
                    ? "bg-navy-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* タブの右端フェード（スクロール可能を示す） */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white sm:hidden" />
        </div>

        {/* 件数表示 */}
        <p className="text-sm text-gray-400 mb-5">
          {filtered.length}件表示中
          {activeCategory !== "すべて" && (
            <button
              onClick={() => setActiveCategory("すべて")}
              className="ml-2 text-amber-500 underline underline-offset-2 font-bold"
            >
              すべて表示
            </button>
          )}
        </p>

        {/* ランキングカード一覧 */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-12">
            このカテゴリの商品は準備中です
          </p>
        ) : (
          <div className="flex flex-col gap-5 sm:gap-6">
            {filtered.map((product) => (
              <RankingCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* 注意書き */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl text-xs text-gray-400 leading-relaxed">
          <p>
            ※ 価格は掲載時点の参考価格です。最新の価格はAmazon商品ページをご確認ください。
          </p>
          <p className="mt-1">
            ※ 当サイトはAmazonアソシエイト・プログラムの参加者です。商品リンクからご購入いただくと当サイトに紹介料が入る場合があります。
          </p>
        </div>
      </div>
    </section>
  );
}
