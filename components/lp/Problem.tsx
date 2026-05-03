import { PROBLEMS } from "@/constants";

export default function Problem() {
  return (
    <section id="problem" className="bg-gray-50 py-14 px-4 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* タイトル */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-12">
          {PROBLEMS.title}
        </h2>

        {/* 悩みカード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {PROBLEMS.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 flex gap-4 items-start"
            >
              <span className="text-2xl sm:text-3xl flex-shrink-0 mt-0.5">
                {item.icon}
              </span>
              <div>
                <p className="font-bold text-gray-800 mb-1 text-sm sm:text-base">
                  {item.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 解決メッセージ */}
        <div className="text-center">
          <div className="inline-block bg-amber-500 text-white font-bold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 py-4 rounded-full shadow-md leading-normal">
            {PROBLEMS.resolution}
          </div>
        </div>
      </div>
    </section>
  );
}
