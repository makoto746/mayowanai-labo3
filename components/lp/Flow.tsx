import { FLOW } from "@/constants";

export default function Flow() {
  return (
    <section id="flow" className="bg-white py-14 px-4 sm:py-20 md:py-24">
      <div className="max-w-2xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-amber-500 font-bold text-xs sm:text-sm tracking-widest mb-2 uppercase">
            How to use
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            {FLOW.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">{FLOW.subtitle}</p>
        </div>

        {/* ステップ */}
        <div className="flex flex-col">
          {FLOW.steps.map((step, index) => (
            <div key={index} className="flex gap-4 sm:gap-6 items-start">
              {/* 左側：番号と線 */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-700 text-white flex items-center justify-center font-black text-base sm:text-lg">
                  {index + 1}
                </div>
                {index < FLOW.steps.length - 1 && (
                  <div className="w-0.5 h-10 sm:h-12 bg-gray-200 mt-1" />
                )}
              </div>

              {/* 右側：内容 */}
              <div className="pb-8 sm:pb-10">
                <p className="text-amber-500 text-xs font-bold mb-0.5 sm:mb-1">
                  {step.step}
                </p>
                <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
