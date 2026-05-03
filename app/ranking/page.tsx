import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/lp/Header";
import Footer from "@/components/lp/Footer";
import RankingContent from "@/components/ranking/RankingContent";

export const metadata: Metadata = {
  title: "人気ランキング | 迷わない買い物ラボ",
  description:
    "数千件のレビューとデータを徹底リサーチして厳選したAmazon商品を掲載。カテゴリ別の人気ランキングで「これで決まり！」が見つかります。",
};

export default function RankingPage() {
  return (
    <>
      <Header />
      <main>
        {/* ページバナー */}
        <div className="bg-navy-700 text-white py-10 sm:py-14 px-4">
          <div className="max-w-4xl mx-auto">
            {/* パンくずリスト */}
            <nav className="text-xs text-gray-400 mb-4 flex items-center gap-1">
              <Link href="/" className="hover:text-white transition-colors">
                トップ
              </Link>
              <span>/</span>
              <span className="text-gray-300">人気ランキング</span>
            </nav>

            {/* ページタイトル */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              人気ランキング
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              数千件のレビューとデータを徹底リサーチして厳選した商品を掲載。カテゴリで絞り込んで、あなたにぴったりの一品を見つけてください。
            </p>

            {/* 更新日 */}
            <p className="mt-4 text-xs text-gray-400">
              最終更新日：{new Date().toLocaleDateString("ja-JP")}
            </p>
          </div>
        </div>

        {/* トラストバー */}
        <div className="bg-amber-50 border-b border-amber-100 py-2.5 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-amber-800 font-bold">
            <span>✅ 全商品を編集部が徹底リサーチして厳選</span>
            <span>📦 Amazonで今すぐ購入可能</span>
            <span>🔄 毎週ランキングを更新中</span>
            <span>💬 正直な長所・短所を掲載</span>
          </div>
        </div>

        {/* ランキング本体 */}
        <RankingContent />
      </main>
      <Footer />
    </>
  );
}
