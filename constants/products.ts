// ============================================================
// 商品データ管理
//
// 現在: 手動入力データを使用
// 将来: getProducts() の中身を Amazon PA-API 呼び出しに差し替え可能
//
// ■ PA-API への切り替えイメージ（サーバーコンポーネント用）:
// export async function getProducts(): Promise<RankingProduct[]> {
//   const res = await fetch("https://webservices.amazon.co.jp/paapi5/searchitems", {
//     method: "POST",
//     headers: { ... },
//     body: JSON.stringify({ ... }),
//     next: { revalidate: 3600 },
//   });
//   const data = await res.json();
//   return data.ItemsResult.Items.map(transformPAAPIItem);
// }
// ============================================================

export type RankingProduct = {
  id: number;
  rank: number;
  category: string;
  categoryLabel: string;
  categoryBg: string;
  productIcon: string;
  image?: string;           // 商品画像URL。空の場合は /images/no-image.svg を表示
  name: string;
  maker: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  priceNote?: string;
  verdict: string;
  pros: string[];
  targetUser: string;
  amazonUrl: string;        // Amazonアフィリエイトリンク
  rakutenUrl?: string;      // 楽天アフィリエイトリンク
  rakutenPriceRange?: string;
  badge?: string;
  saleLabel?: string;
  monthlyPurchases?: string;
};

export const RANKING_CATEGORIES = [
  "すべて",
  "ロボット掃除機",
  "コーヒーメーカー",
  "モバイルバッテリー",
];

// ============================================================
// 手動登録商品データ
//
// image    : Amazonの商品ページ → 画像を右クリック → 「画像アドレスをコピー」
// amazonUrl: Amazonアソシエイトで取得したアフィリエイトリンク
// rakutenUrl: 楽天アフィリエイトで取得したリンク
//
// ※ image が空 ("") でもカードは表示されます（/images/no-image.svg が出ます）
// ============================================================
const MANUAL_PRODUCTS: RankingProduct[] = [
  // ── ロボット掃除機 ─────────────────────────────────────────
  {
    id: 1,
    rank: 1,
    category: "ロボット掃除機",
    categoryLabel: "ロボット掃除機",
    categoryBg: "bg-blue-50",
    productIcon: "🤖",
    image: "/images/sony-wf1000xm5.jpg",
    name: "Anker Eufy RoboVac G30",
    maker: "Anker（eufy）",
    rating: 4.3,
    reviewCount: 4500,
    priceRange: "¥19,800〜¥24,800",
    priceNote: "※価格は変動します",
    verdict: "帰宅したら部屋がキレイ。生活が変わります。",
    pros: [
      "自動掃除で毎日の手間ゼロ",
      "静音設計で昼間も夜間も気にならない",
      "アプリ連携でスケジュール設定が簡単",
    ],
    targetUser: "毎日の床掃除を自動化したい方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",   // ← 楽天アフィリエイトURLを入力
    rakutenPriceRange: "¥20,000〜¥25,500",
    badge: "生活が変わる",
  },
  // ── コーヒーメーカー ──────────────────────────────────────
  {
    id: 2,
    rank: 2,
    category: "コーヒーメーカー",
    categoryLabel: "コーヒーメーカー",
    categoryBg: "bg-orange-50",
    productIcon: "☕",
    image: "/images/sony-wf1000xm5.jpg",
    name: "アイリスオーヤマ 全自動コーヒーメーカー CMK-720",
    maker: "アイリスオーヤマ",
    rating: 4.1,
    reviewCount: 2800,
    priceRange: "¥8,000〜¥9,500",
    priceNote: "※価格は変動します",
    verdict: "朝の1杯で1日の満足度が変わります。",
    pros: [
      "全自動で豆から本格コーヒーを抽出",
      "タイマー付きで起床時に淹れたてが楽しめる",
      "ミル・サーバーが取り外せて洗いやすい",
    ],
    targetUser: "忙しい朝でも本格コーヒーを楽しみたい方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",   // ← 楽天アフィリエイトURLを入力
    rakutenPriceRange: "¥8,200〜¥9,800",
    badge: "朝活に最適",
  },
  // ── モバイルバッテリー ────────────────────────────────────
  {
    id: 3,
    rank: 3,
    category: "モバイルバッテリー",
    categoryLabel: "モバイルバッテリー",
    categoryBg: "bg-green-50",
    productIcon: "🔋",
    image: "/images/sony-wf1000xm5.jpg",
    name: "Anker PowerCore モバイルバッテリー",
    maker: "Anker",
    rating: 4.6,
    reviewCount: 18000,
    priceRange: "¥2,500〜¥5,000",
    priceNote: "※容量・モデルにより異なります",
    verdict: "充電切れの不安がなくなります。",
    pros: [
      "軽量・コンパクトで毎日の持ち運びが苦にならない",
      "大容量でスマホを複数回フル充電できる",
      "Ankerの高品質・安全設計で長く安心して使える",
    ],
    targetUser: "外出先での充電切れを根本から解決したい方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",   // ← 楽天アフィリエイトURLを入力
    rakutenPriceRange: "¥2,600〜¥5,200",
    badge: "信頼のAnker",
  },
];

// ============================================================
// データ取得関数
//
// 現在は手動データをそのまま返す（同期）。
// PA-API に切り替える場合はこの関数を非同期に変更し、
// Next.js サーバーコンポーネントや generateStaticParams から呼び出す。
// ============================================================
export function getProducts(): RankingProduct[] {
  return MANUAL_PRODUCTS;
}

export const RANKING_PRODUCTS: RankingProduct[] = getProducts();
