import { FEATURES } from "@/constants";

export default function Features() {
  return (
    <section
      id="features"
      className="bg-navy-700 text-white py-14 px-4 sm:py-20 md:py-24"
    >
      <div className="max-w-4xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-amber-400 font-bold text-xs sm:text-sm tracking-widest mb-2 uppercase">
            Features
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
            {FEATURES.title}
          </h2>
        </div>

        {/* 特徴カード */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {FEATURES.items.map((item, index) => (
            <div
              key={index}
              className="bg-navy-800 rounded-2xl p-6 sm:p-7 md:p-8 border border-navy-600"
            >
              {/* 番号 */}
              <p className="text-amber-400 text-3xl sm:text-4xl font-black mb-3 sm:mb-4">
                {item.number}
              </p>

              {/* タイトル */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {item.title}
              </h3>

              {/* 説明 */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* ハイライト */}
              <p className="text-amber-400 text-sm font-bold border-t border-navy-600 pt-4">
                ✓ {item.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
