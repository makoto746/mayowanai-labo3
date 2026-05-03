import Link from "next/link";
import { HERO, SITE } from "@/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-navy-700 text-white py-16 px-4 sm:py-20 md:py-28"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* サービス名 */}
        <p className="text-amber-400 text-xs sm:text-sm font-bold tracking-widest mb-3 uppercase">
          {SITE.name}
        </p>

        {/* メインキャッチコピー */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-5">
          「これで決まり！」が見つかる
          <br className="hidden sm:block" />
          <span className="block sm:inline"> Amazon商品レビュー＆ランキング</span>
        </h1>

        {/* サブテキスト */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl mx-auto">
          {HERO.subheadline}
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={HERO.ctaPrimaryUrl}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition-colors duration-200 shadow-lg"
          >
            {HERO.ctaPrimary}
          </Link>
          <a
            href={HERO.ctaSecondaryUrl}
            className="border-2 border-white hover:bg-white hover:text-navy-700 text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg transition-colors duration-200"
          >
            {HERO.ctaSecondary}
          </a>
        </div>

        {/* 補足テキスト */}
        <p className="mt-5 text-gray-400 text-xs sm:text-sm">
          無料・会員登録不要でご覧いただけます
        </p>
      </div>
    </section>
  );
}
