import Link from "next/link";
import { CTA as CTA_DATA, SITE } from "@/constants";

export default function CTA() {
  return (
    <section id="cta" className="bg-amber-500 py-14 px-4 sm:py-20 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* タイトル */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          {CTA_DATA.title}
        </h2>
        <p className="text-amber-100 text-base sm:text-lg mb-8 sm:mb-10">
          {CTA_DATA.subtitle}
        </p>

        {/* メインCTAボタン */}
        <Link
          href={CTA_DATA.primaryUrl}
          className="inline-block bg-white text-amber-600 hover:bg-amber-50 font-black text-base sm:text-lg py-4 px-8 sm:px-10 rounded-full shadow-lg transition-colors duration-200 w-full sm:w-auto"
        >
          {CTA_DATA.primaryButton}
        </Link>

        {/* LINE登録 */}
        <div className="mt-10 border-t border-amber-400 pt-8 sm:pt-10">
          <p className="text-white font-bold text-base sm:text-lg mb-4">
            {CTA_DATA.lineSubtext}
          </p>
          <a
            href={SITE.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 sm:px-8 rounded-full transition-colors duration-200 shadow-md w-full sm:w-auto justify-center"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              viewBox="0 0 48 48"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M24 4C12.954 4 4 11.838 4 21.5c0 5.984 3.587 11.268 9.063 14.539L11.5 44l8.236-4.563C21.154 39.806 22.56 40 24 40c11.046 0 20-7.838 20-17.5S35.046 4 24 4z" />
            </svg>
            {CTA_DATA.lineButton}
          </a>
          <p className="text-amber-200 text-xs mt-3 leading-relaxed">
            ※ LINE公式アカウントのURLを設定してください
            <br className="sm:hidden" />
            （constants/index.ts の SITE.lineUrl）
          </p>
        </div>
      </div>
    </section>
  );
}
