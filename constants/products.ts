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
//     body: JSON.stringify({ Keywords: "掃除機", ... }),
//   });
//   const data = await res.json();
//   return data.ItemsResult.Items.map(transformPAAPIItem);
// }
// ============================================================

// 商品データの型定義（全コンポーネントはここから import）
export type RankingProduct = {
  id: number;
  rank: number;
  category: string;
  categoryLabel: string;
  categoryBg: string;
  productIcon: string;      // 将来使用の絵文字代替（現在は no-image.svg で代替）
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
  amazonUrl: string;
  rakutenUrl?: string;
  rakutenPriceRange?: string;
  badge?: string;
  saleLabel?: string;
  monthlyPurchases?: string;
};

export const RANKING_CATEGORIES = [
  "すべて",
  "ロボット掃除機",
  "コードレス掃除機",
  "ノイズキャンセリングイヤホン",
  "コーヒーメーカー",
];

// ============================================================
// 手動登録商品データ
//
// image    : Amazonの商品ページ → 画像を右クリック → 「画像アドレスをコピー」して貼り付け
// amazonUrl: Amazonアソシエイトで取得したアフィリエイトリンク
// rakutenUrl: 楽天アフィリエイトで取得したリンク
//
// ※ image が空 ("") の場合、/images/no-image.svg が表示されます（カードは消えません）
// ============================================================
const MANUAL_PRODUCTS: RankingProduct[] = [
  // ── ノイズキャンセリングイヤホン ──────────────────────────
  {
    id: 1,
    rank: 1,
    category: "ノイズキャンセリングイヤホン",
    categoryLabel: "ノイズキャンセリングイヤホン",
    categoryBg: "bg-purple-50",
    productIcon: "🎧",
    image: "/images/sony-wf1000xm5.png",
    name: "Sony WF-1000XM5",
    maker: "Sony",
    rating: 4.5,
    reviewCount: 5200,
    priceRange: "¥33,000〜¥39,800",
    priceNote: "※価格は変動します",
    verdict: "業界最高クラスのノイズキャンセリングと高音質LDAC対応が両立。通勤・在宅ワーク・旅行まであらゆるシーンで使える万能イヤホンとして圧倒的な支持を集めています。",
    pros: [
      "業界最高クラスのノイズキャンセリング性能",
      "LDAC対応で高解像度の音質を楽しめる",
      "最大36時間の長時間再生（ケース込み）",
    ],
    targetUser: "音質と遮音性の両方を最高レベルで求める方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥34,000〜¥40,800",
    badge: "最高峰NC",
  },
  {
    id: 2,
    rank: 2,
    category: "ノイズキャンセリングイヤホン",
    categoryLabel: "ノイズキャンセリングイヤホン",
    categoryBg: "bg-purple-50",
    productIcon: "🎧",
    image: "/images/sony-wf1000xm5.png",
    name: "Apple AirPods Pro（第2世代）",
    maker: "Apple",
    rating: 4.6,
    reviewCount: 12000,
    priceRange: "¥35,800〜¥39,800",
    priceNote: "※価格は変動します",
    verdict: "H2チップによるアダプティブNCがiPhoneとシームレスに連携。Apple製品との圧倒的な親和性と自然な装着感で、iPhoneユーザーに最もおすすめのイヤホンです。",
    pros: [
      "iPhoneとの瞬時ペアリング・シームレス連携",
      "アダプティブオーディオで周囲の状況に自動対応",
      "MagSafe対応ケースでワイヤレス充電も簡単",
    ],
    targetUser: "iPhoneユーザーで最高の体験を求める方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥36,500〜¥41,000",
    badge: "iPhone最適",
  },
  // ── コードレス掃除機 ──────────────────────────────────────
  {
    id: 3,
    rank: 3,
    category: "コードレス掃除機",
    categoryLabel: "コードレス掃除機",
    categoryBg: "bg-gray-50",
    productIcon: "🌀",
    image: "/images/sony-wf1000xm5.png",
    name: "Dyson V15 Detect Absolute",
    maker: "Dyson",
    rating: 4.4,
    reviewCount: 2100,
    priceRange: "¥89,800〜¥108,800",
    priceNote: "※価格は変動します",
    verdict: "グリーンレーザーで目に見えない微細なゴミを可視化し、吸引力を5段階で自動調整。最大60分稼働で大きな家でも一度の充電でしっかりカバーできます。",
    pros: [
      "グリーンレーザーで見えないゴミを可視化",
      "吸引力を自動調整するインテリジェントモード",
      "最大60分の長時間稼働",
    ],
    targetUser: "清潔さにこだわり、妥協したくない方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥91,800〜¥112,000",
    badge: "Dyson最上位",
  },
  // ── ロボット掃除機 ──────────────────────────────────────
  {
    id: 4,
    rank: 4,
    category: "ロボット掃除機",
    categoryLabel: "ロボット掃除機",
    categoryBg: "bg-blue-50",
    productIcon: "🤖",
    image: "/images/sony-wf1000xm5.png",
    name: "Roborock S8 Pro Ultra",
    maker: "Roborock",
    rating: 4.3,
    reviewCount: 1500,
    priceRange: "¥119,800〜¥139,800",
    priceNote: "※価格は変動します",
    verdict: "掃除・モップがけ・ゴミ収集・モップ洗浄・乾燥がすべて全自動。ロボット掃除機の最高峰で「床掃除から完全解放された」という声が続出しています。",
    pros: [
      "ゴミ収集・モップ洗浄・乾燥まで完全自動",
      "超音波でカーペットを認識しモップを自動回避",
      "精密3Dマッピングで家具を正確に避けて走行",
    ],
    targetUser: "床掃除を完全に自動化したい共働き世帯",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥122,000〜¥145,000",
    badge: "全自動最上位",
  },
  {
    id: 5,
    rank: 5,
    category: "ロボット掃除機",
    categoryLabel: "ロボット掃除機",
    categoryBg: "bg-blue-50",
    productIcon: "🤖",
    image: "/images/sony-wf1000xm5.png",
    name: "iRobot Roomba j7+",
    maker: "iRobot",
    rating: 4.1,
    reviewCount: 3200,
    priceRange: "¥69,800〜¥89,800",
    priceNote: "※価格は変動します",
    verdict: "AIカメラがペットのフン・靴・充電ケーブルなどを自動回避。世界シェアNo.1ブランドの信頼性と自動ゴミ収集で、ペットのいる家庭に特に人気のモデルです。",
    pros: [
      "AIカメラで障害物を自動認識・回避",
      "自動ゴミ収集で60日間ゴミ捨て不要",
      "スマートマッピングで部屋ごとの設定が可能",
    ],
    targetUser: "ペットのいる家庭・初めてのロボット掃除機に",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥71,800〜¥92,000",
    badge: "世界シェアNo.1",
  },
  {
    id: 6,
    rank: 6,
    category: "ノイズキャンセリングイヤホン",
    categoryLabel: "ノイズキャンセリングイヤホン",
    categoryBg: "bg-purple-50",
    productIcon: "🎧",
    image: "/images/sony-wf1000xm5.png",
    name: "Bose QuietComfort Earbuds II",
    maker: "Bose",
    rating: 4.2,
    reviewCount: 1200,
    priceRange: "¥27,000〜¥33,000",
    priceNote: "※価格は変動します",
    verdict: "耳の形状を測定してパーソナライズされるノイズキャンセリングが特徴。Bose独自のサウンドで豊かな低音と広い音場が楽しめる本格派イヤホンです。",
    pros: [
      "耳の形を測定してNCをパーソナライズ",
      "Boseらしい豊かな低音と広い音場",
      "6時間＋ケース込み最大24時間再生",
    ],
    targetUser: "音楽を深く楽しみたい方・強力なNCを求める方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥28,000〜¥34,500",
    badge: "パーソナライズNC",
  },
  {
    id: 7,
    rank: 7,
    category: "コードレス掃除機",
    categoryLabel: "コードレス掃除機",
    categoryBg: "bg-gray-50",
    productIcon: "🌀",
    image: "/images/sony-wf1000xm5.png",
    name: "Dyson V12 Detect Slim Fluffy",
    maker: "Dyson",
    rating: 4.4,
    reviewCount: 1800,
    priceRange: "¥59,800〜¥79,800",
    priceNote: "※価格は変動します",
    verdict: "V15より軽量・コンパクトながらレーザー検知機能を搭載。2.35kgの軽さで女性でも扱いやすく、毎日の掃除が苦にならないと評判の人気モデルです。",
    pros: [
      "レーザーでゴミを可視化（V15と同機能）",
      "本体重量2.35kgで軽く扱いやすい",
      "最大50分稼働でワンフロアを十分カバー",
    ],
    targetUser: "軽さと高性能を両立したい方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥61,800〜¥82,000",
    badge: "軽量モデル",
  },
  // ── コーヒーメーカー ──────────────────────────────────────
  {
    id: 8,
    rank: 8,
    category: "コーヒーメーカー",
    categoryLabel: "コーヒーメーカー",
    categoryBg: "bg-orange-50",
    productIcon: "☕",
    image: "/images/sony-wf1000xm5.png",
    name: "デロンギ マグニフィカ エボ ECAM29062WST",
    maker: "De'Longhi（デロンギ）",
    rating: 4.3,
    reviewCount: 820,
    priceRange: "¥59,800〜¥74,800",
    priceNote: "※価格は変動します",
    verdict: "エスプレッソからラテ・カプチーノまで全自動で本格的な味が楽しめる。豆の挽き具合・粉量・抽出温度を細かくカスタマイズでき、自宅でカフェの味を再現できます。",
    pros: [
      "豆から挽きたてのエスプレッソを全自動抽出",
      "ラテ・カプチーノなどミルクメニューも対応",
      "挽き具合・粉量・温度をカスタマイズ可能",
    ],
    targetUser: "自宅でカフェ品質のラテやカプチーノを楽しみたい方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥61,800〜¥77,000",
    badge: "本格カフェ品質",
  },
  {
    id: 9,
    rank: 9,
    category: "ロボット掃除機",
    categoryLabel: "ロボット掃除機",
    categoryBg: "bg-blue-50",
    productIcon: "🤖",
    image: "/images/sony-wf1000xm5.png",
    name: "Eufy RoboVac X9 Pro SES",
    maker: "eufy（Anker）",
    rating: 4.2,
    reviewCount: 980,
    priceRange: "¥64,800〜¥79,800",
    priceNote: "※価格は変動します",
    verdict: "LiDARセンサーによる精密マッピングと自動モップ洗浄ステーションを搭載しながら、Roborock S8より手頃な価格が魅力。コスパ重視派に人気のモデルです。",
    pros: [
      "LiDARで精密なルート設定と障害物回避",
      "モップの自動洗浄・乾燥ステーション付き",
      "Roborock S8より手頃でコスパの高い選択肢",
    ],
    targetUser: "コスパを重視してロボット掃除機を選びたい方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥66,800〜¥82,000",
    badge: "コスパ最強",
  },
  {
    id: 10,
    rank: 10,
    category: "コーヒーメーカー",
    categoryLabel: "コーヒーメーカー",
    categoryBg: "bg-orange-50",
    productIcon: "☕",
    image: "/images/sony-wf1000xm5.png",
    name: "siroca 全自動コーヒーメーカー SC-C252",
    maker: "siroca（シロカ）",
    rating: 4.2,
    reviewCount: 1600,
    priceRange: "¥19,800〜¥24,800",
    priceNote: "※価格は変動します",
    verdict: "豆・粉どちらにも対応し4カップ分を一度に抽出できる全自動モデル。デロンギの半額以下で全自動コーヒーメーカーが手に入り、コスパで選ぶなら一番の選択肢です。",
    pros: [
      "豆・粉どちらも使える全自動設計",
      "4カップ分を一度に抽出できる",
      "コンパクトで置き場所を選ばないサイズ感",
    ],
    targetUser: "全自動コーヒーメーカーを手頃な価格で試したい方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥20,800〜¥26,000",
    badge: "コスパモデル",
  },
  {
    id: 11,
    rank: 11,
    category: "コードレス掃除機",
    categoryLabel: "コードレス掃除機",
    categoryBg: "bg-gray-50",
    productIcon: "🌀",
    image: "/images/sony-wf1000xm5.png",
    name: "マキタ 充電式クリーナー CL108FDZW",
    maker: "マキタ（Makita）",
    rating: 4.4,
    reviewCount: 3500,
    priceRange: "¥8,800〜¥12,800",
    priceNote: "※価格は変動します",
    verdict: "本体重量約0.9kgの超軽量設計で、片手でさっと使えるシンプルさが魅力。Dysonの10分の1以下の価格で長く使えるプロ仕様の耐久性が人気の理由です。",
    pros: [
      "本体重量約0.9kgの超軽量・コンパクト設計",
      "シンプルな設計で故障しにくく長く使える",
      "カプセル式でゴミ捨てが簡単・清潔",
    ],
    targetUser: "シンプルさと価格を重視する方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥9,200〜¥13,500",
    badge: "超軽量",
  },
  {
    id: 12,
    rank: 12,
    category: "コーヒーメーカー",
    categoryLabel: "コーヒーメーカー",
    categoryBg: "bg-orange-50",
    productIcon: "☕",
    image: "/images/sony-wf1000xm5.png",
    name: "アイリスオーヤマ 全自動コーヒーメーカー CMK-720",
    maker: "アイリスオーヤマ",
    rating: 4.1,
    reviewCount: 623,
    priceRange: "¥8,000〜¥9,500",
    priceNote: "※価格は変動します",
    verdict: "豆から全自動で本格コーヒーを抽出できるエントリーモデル。タイマー機能で起床時に淹れたてが楽しめ、ミルやサーバーが取り外して洗えるため毎日続けやすいと好評です。",
    pros: [
      "豆から全自動で本格コーヒーを抽出",
      "タイマー機能で起床時に淹れたてが楽しめる",
      "ミル・サーバーが取り外せて洗いやすい",
    ],
    targetUser: "忙しい朝でも美味しいコーヒーを飲みたい方",
    amazonUrl: "",    // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥8,200〜¥9,800",
    badge: "エントリーモデル",
  },
];

// ============================================================
// データ取得関数
//
// 現在: 手動登録データをそのまま返す（同期）
//
// PA-API への切り替え時は、この関数を非同期に変更し、
// Next.js のサーバーコンポーネントや generateStaticParams から呼び出す：
//
// export async function getProducts(): Promise<RankingProduct[]> {
//   const res = await fetch("https://webservices.amazon.co.jp/paapi5/searchitems", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       // PA-API 認証ヘッダー...
//     },
//     body: JSON.stringify({
//       PartnerTag: "YOUR-ASSOCIATE-TAG",
//       PartnerType: "Associates",
//       Marketplace: "www.amazon.co.jp",
//       Resources: ["Images.Primary.Large", "Offers.Listings.Price", "CustomerReviews.Count"],
//       // ...
//     }),
//     next: { revalidate: 3600 }, // 1時間キャッシュ
//   });
//   const data = await res.json();
//   return data.ItemsResult.Items.map(transformPAAPIItem);
// }
// ============================================================
export function getProducts(): RankingProduct[] {
  return MANUAL_PRODUCTS;
}

export const RANKING_PRODUCTS: RankingProduct[] = getProducts();
