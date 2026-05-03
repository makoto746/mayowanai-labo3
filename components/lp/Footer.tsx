import { FOOTER, SITE } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 py-10 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* サービス名と説明 */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <p className="text-white font-bold text-lg sm:text-xl mb-2">
            {SITE.name}
          </p>
          <p className="text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
            {FOOTER.description}
          </p>
        </div>

        {/* リンク */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 mb-7 sm:mb-8 text-xs sm:text-sm">
          {FOOTER.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="hover:text-white transition-colors duration-150 underline underline-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Amazonアフィリエイト注記 */}
        <div className="border-t border-navy-800 pt-5 sm:pt-6 mb-5 sm:mb-6">
          <p className="text-xs leading-relaxed">
            当サイトはAmazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
          </p>
        </div>

        {/* コピーライト */}
        <p className="text-xs text-center sm:text-left">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
