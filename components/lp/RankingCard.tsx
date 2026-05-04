import type { RankingProduct } from "@/constants";

function StarRating({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1">
      <span className="flex">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className={`text-base ${s <= full ? "text-amber-400" : "text-gray-200"}`}>
            ★
          </span>
        ))}
      </span>
      <span className="text-sm font-bold text-gray-700">{rating.toFixed(1)}</span>
    </div>
  );
}

function ProductImage({
  product,
  className,
}: {
  product: RankingProduct;
  className?: string;
}) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className={`w-full h-full object-cover ${className ?? ""}`}
      />
    );
  }
  return (
    <span className="text-6xl md:text-7xl">{product.productIcon}</span>
  );
}

// 1位のみ使う特大ヒーローカード
function HeroCard({ product }: { product: RankingProduct }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg shadow-amber-100">
      {/* 1位バナー */}
      <div className="bg-amber-400 py-2.5 px-4 text-center">
        <p className="text-white font-black text-sm tracking-wide">
          🏆 今月最も購入された商品
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* 画像エリア（クリックでAmazonへ） */}
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          aria-label={`${product.name}をAmazonで確認する`}
          className={`${product.image ? "bg-white" : product.categoryBg} flex items-center justify-center h-52 md:h-auto md:w-52 flex-shrink-0 overflow-hidden`}
        >
          <ProductImage product={product} />
        </a>

        {/* 情報エリア */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          {/* ヘッダー行 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-400 text-white text-xs font-black px-3 py-1 rounded-full">🥇 1位</span>
            {product.badge && (
              <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded-full">
                {product.badge}
              </span>
            )}
            {product.saleLabel && (
              <span className="text-xs font-black text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                {product.saleLabel}
              </span>
            )}
          </div>

          {/* 商品名 */}
          <div>
            <span className="text-xs font-bold text-navy-600 bg-navy-50 px-2 py-0.5 rounded-full border border-navy-100">
              {product.categoryLabel}
            </span>
            <h2 className="mt-2 text-xl font-black text-gray-900 leading-snug">{product.name}</h2>
            <p className="text-xs text-gray-400 mt-0.5">{product.maker}</p>
          </div>

          {/* 評価・価格 */}
          <div className="flex items-center gap-3 flex-wrap">
            <StarRating rating={product.rating} />
            <span className="text-xs text-gray-400">({product.reviewCount.toLocaleString()}件以上)</span>
            <div className="ml-auto text-right">
              <span className="text-sm font-black text-gray-800">{product.priceRange}</span>
              {product.priceNote && (
                <p className="text-xs text-gray-400">{product.priceNote}</p>
              )}
            </div>
          </div>

          {/* 編集部コメント */}
          <p className="text-sm text-gray-700 leading-relaxed bg-amber-50 rounded-xl p-3 border-l-4 border-amber-400">
            {product.verdict}
          </p>

          {/* 長所 */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
            {product.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-1.5 text-sm text-gray-700 bg-green-50 rounded-lg px-2 py-1.5">
                <span className="text-green-500 font-black flex-shrink-0">✓</span>
                <span className="text-xs leading-relaxed">{pro}</span>
              </li>
            ))}
          </ul>

          {/* こんな人向け */}
          <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
            <span className="text-sm">👤</span>
            <p className="text-xs text-blue-800 font-bold">こんな方におすすめ：{product.targetUser}</p>
          </div>
        </div>
      </div>

      {/* CTAエリア */}
      <div className="bg-gray-50 px-5 py-4 border-t border-gray-100">
        <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1 mb-3">
          <span className="text-green-500 font-bold">✅</span>
          実際に使用・口コミをもとに選定
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="flex items-center justify-center gap-2 flex-1 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-black py-4 rounded-xl transition-colors duration-150 text-base shadow-md shadow-amber-200"
          >
            <CartIcon />
            Amazonで見る →
          </a>
          {product.rakutenUrl && (
            <a
              href={product.rakutenUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="flex items-center justify-center gap-2 flex-1 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-black py-4 rounded-xl transition-colors duration-150 text-base shadow-md shadow-red-200"
            >
              楽天で見る →
            </a>
          )}
        </div>
        {product.rakutenUrl && (
          <p className="text-center text-xs text-gray-500 mt-2">
            <span className="text-amber-600 font-bold">急ぎならAmazon</span>
            <span className="mx-2">・</span>
            <span className="text-red-600 font-bold">ポイント重視なら楽天</span>
          </p>
        )}
        <p className="text-center text-xs text-gray-400 mt-2">
          ※ Amazonアソシエイトリンクです
        </p>
      </div>
    </article>
  );
}

// 2位以降の通常カード
function NormalCard({ product }: { product: RankingProduct }) {
  const rankLabel =
    product.rank === 2 ? "🥈 2位" :
    product.rank === 3 ? "🥉 3位" :
    `${product.rank}位`;

  const rankBg =
    product.rank === 2 ? "bg-slate-400" :
    product.rank === 3 ? "bg-amber-700" :
    product.rank <= 6 ? "bg-navy-600" :
    "bg-gray-400";

  const accentBorder =
    product.rank === 2 ? "border-l-slate-400" :
    product.rank === 3 ? "border-l-amber-700" :
    product.rank <= 6 ? "border-l-navy-600" :
    "border-l-gray-300";

  return (
    <article className={`bg-white rounded-2xl border border-gray-100 border-l-4 ${accentBorder} shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200`}>
      {/* ヘッダー行 */}
      <div className="flex items-center gap-2 px-4 pt-4 pb-2">
        <span className={`inline-flex items-center text-xs font-black px-3 py-1 rounded-full text-white ${rankBg}`}>
          {rankLabel}
        </span>
        {product.saleLabel && (
          <span className="text-xs font-black text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
            {product.saleLabel}
          </span>
        )}
        {product.badge && (
          <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row">
        {/* 画像エリア（クリックでAmazonへ） */}
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          aria-label={`${product.name}をAmazonで確認する`}
          className={`${product.image ? "bg-white" : product.categoryBg} flex items-center justify-center h-40 sm:h-auto sm:w-36 flex-shrink-0 overflow-hidden`}
        >
          <ProductImage product={product} className="sm:w-36 sm:min-h-[170px]" />
        </a>

        {/* 情報エリア */}
        <div className="flex flex-col gap-2.5 p-4 flex-1">
          <div>
            <span className="text-xs font-bold text-navy-600 bg-navy-50 border border-navy-100 px-2 py-0.5 rounded-full">
              {product.categoryLabel}
            </span>
            <h3 className="mt-1.5 text-base sm:text-lg font-bold text-gray-900 leading-snug">{product.name}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{product.maker}</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <StarRating rating={product.rating} />
            <span className="text-xs text-gray-400">({product.reviewCount.toLocaleString()}件以上)</span>
            <div className="ml-auto text-right">
              <span className="text-sm font-bold text-gray-700">{product.priceRange}</span>
              {product.priceNote && (
                <p className="text-xs text-gray-400">{product.priceNote}</p>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-3 border-l-4 border-amber-400">
            {product.verdict}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
            {product.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-1.5 bg-green-50 rounded-lg px-2 py-1.5">
                <span className="text-green-500 font-black flex-shrink-0 text-sm">✓</span>
                <span className="text-xs leading-relaxed text-gray-700">{pro}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
            <span className="text-sm">👤</span>
            <p className="text-xs text-blue-800 font-bold">おすすめ：{product.targetUser}</p>
          </div>
        </div>
      </div>

      {/* CTAエリア */}
      <div className="px-4 pb-4 pt-3 border-t border-gray-50">
        <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1 mb-2.5">
          <span className="text-green-500">✅</span>
          実際に使用・口コミをもとに選定
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="flex items-center justify-center gap-2 flex-1 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold py-3.5 rounded-xl transition-colors duration-150 text-sm sm:text-base"
          >
            <CartIcon />
            Amazonで見る →
          </a>
          {product.rakutenUrl && (
            <a
              href={product.rakutenUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="flex items-center justify-center gap-2 flex-1 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors duration-150 text-sm sm:text-base"
            >
              楽天で見る →
            </a>
          )}
        </div>
        {product.rakutenUrl && (
          <p className="text-center text-xs text-gray-500 mt-1.5">
            <span className="text-amber-600 font-bold">急ぎならAmazon</span>
            <span className="mx-2">・</span>
            <span className="text-red-600 font-bold">ポイント重視なら楽天</span>
          </p>
        )}
        <p className="text-center text-xs text-gray-400 mt-1.5">
          ※ Amazonアソシエイトリンクです
        </p>
      </div>
    </article>
  );
}

function CartIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  );
}

export default function RankingCard({ product }: { product: RankingProduct }) {
  if (product.rank === 1) return <HeroCard product={product} />;
  return <NormalCard product={product} />;
}
