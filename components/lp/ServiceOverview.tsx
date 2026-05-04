import { OVERVIEW } from "@/constants";

export default function ServiceOverview() {
  const storyLines = OVERVIEW.storyBody.split("\n");

  return (
    <section id="overview" className="bg-white py-14 px-4 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* ストーリー */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            {OVERVIEW.storyHeading}
          </p>
          <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-3">
            {storyLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* タイトル */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-amber-500 font-bold text-xs sm:text-sm tracking-widest mb-2 uppercase">
            About
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-5">
            {OVERVIEW.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {OVERVIEW.description}
          </p>
        </div>

        {/* 3つのポイント */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {OVERVIEW.points.map((point, index) => (
            <div
              key={index}
              className="bg-navy-50 rounded-2xl p-5 sm:p-6 text-center border border-navy-100"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{point.icon}</div>
              <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
