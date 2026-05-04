import Link from "next/link";
import { HERO } from "@/constants";

export default function Hero() {
  const [line1, line2] = HERO.headline.split("\n");

  return (
    <section
      id="hero"
      className="bg-navy-700 text-white py-16 px-4 sm:py-20 md:py-32"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* 信頼バッジ */}
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>⭐</span>
          <span>月間12万人が利用する買い物メディア</span>
        </div>

        {/* メインキャッチコピー */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          <span className="text-amber-400 block">{line1}</span>
          <span className="block">{line2}</span>
        </h1>

        {/* アクセント区切り */}
        <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-6" />

        {/* サブテキスト */}
        <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto">
          {HERO.subheadline}
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
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

        {/* 補足バッジ */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <span className="text-green-400">✓</span> 無料・会員登録不要
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1">
            <span className="text-green-400">✓</span> 専門家が厳選
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1">
            <span className="text-green-400">✓</span> 正直レビュー
          </span>
        </div>
      </div>
    </section>
  );
}
