import { CASE_STUDIES } from "@/constants";

export default function CaseStudies() {
  return (
    <section id="results" className="bg-gray-50 py-14 px-4 sm:py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-amber-500 font-bold text-xs sm:text-sm tracking-widest mb-2 uppercase">
            Results
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800">
            {CASE_STUDIES.title}
          </h2>
        </div>

        {/* 選定基準 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {CASE_STUDIES.criteria.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm border border-gray-100 flex flex-col items-center gap-3"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-gray-700 text-sm sm:text-base font-semibold leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* お客様の声 */}
        <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          読者の声
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {CASE_STUDIES.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100"
            >
              <p className="text-amber-400 text-3xl sm:text-4xl font-serif leading-none mb-2">
                &ldquo;
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3 sm:mb-4">
                {testimonial.text}
              </p>
              <p className="text-gray-400 text-xs font-bold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
