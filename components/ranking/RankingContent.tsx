"use client";

import { useEffect, useState } from "react";
import { RANKING_CATEGORIES, RANKING_PRODUCTS } from "@/constants";
import RankingCard from "@/components/lp/RankingCard";

export default function RankingContent() {
  const [activeCategory, setActiveCategory] = useState("すべて");
  const [showFloatCta, setShowFloatCta] = useState(false);

  // スクロールで浮きCTAを表示（モバイル向け）
  useEffect(() => {
    const onScroll = () => setShowFloatCta(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const withImages = RANKING_PRODUCTS.filter((p) => p.image);
  const filtered =
    activeCategory === "すべて"
      ? withImages
      : withImages.filter((p) => p.category === activeCategory);

  const topProduct = RANKING_PRODUCTS.find((p) => p.rank === 1 && p.image);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* カテゴリタブ（横スクロール対応） */}
        <div className="relative mb-5">
          <div className="flex gap-2 overflow-x-auto pb-2 snap-x">
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
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white sm:hidden" />
        </div>

        {/* 件数 + リセット */}
        <div className="flex items-center gap-2 mb-5 text-sm text-gray-400">
          <span>{filtered.length}件</span>
          {activeCategory !== "すべて" && (
            <button
              onClick={() => setActiveCategory("すべて")}
              className="text-amber-500 underline underline-offset-2 font-bold"
            >
              すべて表示
            </button>
          )}
        </div>

        {/* カード一覧 */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-16">
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
        <div className="mt-8 p-4 bg-gray-50 rounded-xl text-xs text-gray-400 leading-relaxed space-y-1">
          <p>
            ※ 価格は掲載時点の参考価格です。最新の価格はAmazon商品ページをご確認ください。
          </p>
          <p>
            ※ 当サイトはAmazonアソシエイト・プログラムの参加者です。商品リンクからご購入いただくと当サイトに紹介料が入る場合があります。
          </p>
        </div>
      </div>

      {/* モバイル向けフローティングCTA（スクロール後に出現） */}
      {showFloatCta && topProduct && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className={`${topProduct.image ? "bg-white" : topProduct.categoryBg} rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0 overflow-hidden`}>
              {topProduct.image
                ? <img src={topProduct.image} alt={topProduct.name} className="w-full h-full object-cover" />
                : <span className="text-2xl">{topProduct.productIcon}</span>
              }
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-amber-500 font-bold">🥇 総合1位</p>
              <p className="text-sm font-bold text-gray-900 truncate">{topProduct.name}</p>
            </div>
            <a
              href={topProduct.amazonUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs py-2.5 px-4 rounded-full shadow"
            >
              Amazonで見る →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
