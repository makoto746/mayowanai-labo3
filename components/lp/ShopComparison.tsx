import Link from "next/link";
import { SHOP_COMPARISON } from "@/constants";

const ACCENT_STYLES = {
  amazon: {
    border: "border-t-4 border-amber-400",
    icon: "bg-amber-50",
    button: "bg-amber-500 hover:bg-amber-600 shadow-amber-200",
    badge: "text-amber-700 bg-amber-50 border-amber-200",
  },
  rakuten: {
    border: "border-t-4 border-red-400",
    icon: "bg-red-50",
    button: "bg-red-500 hover:bg-red-600 shadow-red-200",
    badge: "text-red-700 bg-red-50 border-red-200",
  },
  compare: {
    border: "border-t-4 border-navy-600",
    icon: "bg-navy-50",
    button: "bg-navy-700 hover:bg-navy-800 shadow-navy-200",
    badge: "text-navy-700 bg-navy-50 border-navy-200",
  },
} as const;

export default function ShopComparison() {
  return (
    <section
      id="shop-comparison"
      className="bg-gray-50 py-14 px-4 sm:py-20 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-amber-500 font-bold text-xs sm:text-sm tracking-widest mb-2 uppercase">
            {SHOP_COMPARISON.label}
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-5">
            {SHOP_COMPARISON.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {SHOP_COMPARISON.description}
          </p>
        </div>

        {/* 比較カード */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {SHOP_COMPARISON.cards.map((card) => {
            const styles = ACCENT_STYLES[card.accent];
            return (
              <div
                key={card.accent}
                className={`bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col ${styles.border}`}
              >
                {/* アイコン・タイトル */}
                <div className={`${styles.icon} px-6 pt-6 pb-4 text-center`}>
                  <span className="text-4xl block mb-3">{card.icon}</span>
                  <h3 className="font-bold text-gray-800 text-base sm:text-lg leading-snug">
                    {card.title}
                  </h3>
                </div>

                {/* 本文 */}
                <div className="px-6 py-4 flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.body}
                  </p>
                </div>

                {/* ボタン */}
                <div className="px-6 pb-6">
                  <Link
                    href={card.href}
                    className={`flex items-center justify-center w-full text-white font-bold py-3 rounded-xl text-sm transition-colors duration-150 shadow-md ${styles.button}`}
                  >
                    {card.button}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
