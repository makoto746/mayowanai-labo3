// ============================================================
// サイト全体のテキスト・データをここで管理します
// 文言を変えたいときはこのファイルを編集してください
// ============================================================

export const SITE = {
  name: "迷わない買い物ラボ",
  tagline: "「これで決まり！」が見つかる",
  description: "Amazon商品レビュー＆ランキングサイト",
  url: "https://mayowanai-labo.example.com",
  lineUrl: "https://line.me/ti/p/XXXXXXXXXXXX", // ← LINE公式アカウントのURLに変更
  contactUrl: "/contact",
};

export const HERO = {
  headline: "もう迷わない。\n結論から選べる買い物。",
  subheadline:
    "忙しくて比較できない人のために、実際に使って「良かったものだけ」をわかりやすくまとめました。",
  ctaPrimary: "もう迷わないランキングを見る",
  ctaSecondary: "失敗しない選び方を読む",
  ctaPrimaryUrl: "/ranking",
  ctaSecondaryUrl: "#overview",
};

export const PROBLEMS = {
  title: "こんなお悩み、ありませんか？",
  items: [
    {
      icon: "😰",
      title: "商品が多すぎて選べない",
      description: "レビュー数が多すぎて、結局どれが本当にいいのか分からない…",
    },
    {
      icon: "⏰",
      title: "比較する時間がない",
      description: "仕事・家事・育児で忙しくて、じっくり調べる時間がない…",
    },
    {
      icon: "😖",
      title: "買って後悔したくない",
      description: "安いと思って買ったのに、使いにくくて結局買い直したくない…",
    },
    {
      icon: "🤔",
      title: "口コミが信用できない",
      description: "高評価なのに微妙だった経験がある。サクラレビューっぽくて不安…",
    },
  ],
  resolution: "そのお悩み、私たちが解決します！",
};

export const OVERVIEW = {
  storyHeading: "安さだけで選んで、何度も失敗しました。",
  storyBody:
    "最初は、Amazonで評価が高いものや安いものをなんとなく選んでいました。\nでも実際に使ってみると、思ったより使いにくかったり、すぐに買い直したくなったり…。\nだからこのサイトでは、価格だけでなく、使いやすさ・口コミ・コスパ・後悔しにくさまで見て、「結局どれがいいの？」に答える形で紹介しています。",
  title: "迷わない買い物ラボとは？",
  description:
    "生活雑貨・家電・美容・食品など、あらゆるカテゴリのAmazon商品を数千件のレビューとデータで徹底リサーチ。コスパ・品質・使いやすさを多角的に比較して、本当に価値ある商品だけをランキング＆レビューで紹介するメディアです。",
  points: [
    {
      icon: "🏆",
      title: "カテゴリ別ランキング",
      description: "家電・日用品・美容・食品など、目的別に最適な一品を厳選してご紹介します。",
    },
    {
      icon: "✅",
      title: "正直レビュー",
      description: "良い点だけでなく、気になる点も包み隠さずお伝えします。",
    },
    {
      icon: "💴",
      title: "コスパ重視の選定",
      description: "価格と品質のバランスを重視。高いだけでは選びません。",
    },
  ],
};

// ============================================================
// ランキングデータ
// ※ 商品を追加・変更するときはここを編集してください
// ※ amazonUrl に実際のAmazonリンク（アソシエイトタグ付き）を設定してください
// ============================================================

export type RankingProduct = {
  id: number;
  rank: number;
  category: string;
  categoryLabel: string;
  categoryBg: string;
  productIcon: string;      // 画像なし時のemoji代替
  image?: string;           // Amazon商品画像URL（空の場合はemoji表示）
  name: string;
  maker: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  priceNote?: string;       // 「※価格は変動します」など
  verdict: string;
  pros: string[];
  targetUser: string;
  amazonUrl: string;
  rakutenUrl?: string;
  rakutenPriceRange?: string;
  badge?: string;
  saleLabel?: string;
  // 旧フィールド（後方互換・UI非表示）
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
// 商品データの入力方法
// 1. image    : Amazonの商品ページ → 画像を右クリック → 「画像アドレスをコピー」
// 2. amazonUrl: Amazonアソシエイトで取得したアフィリエイトリンク
// 3. rakutenUrl: 楽天アフィリエイトで取得したリンク
// imageが空("")の場合、そのカードは自動的に非表示になります
// ============================================================

export const RANKING_PRODUCTS: RankingProduct[] = [
  // ── ノイズキャンセリングイヤホン ──────────────────────────
  {
    id: 1,
    rank: 1,
    category: "ノイズキャンセリングイヤホン",
    categoryLabel: "ノイズキャンセリングイヤホン",
    categoryBg: "bg-purple-50",
    productIcon: "🎧",
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
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
    image: "",        // ← Amazon画像URLを入力
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
    amazonUrl: "",  // ← AmazonアフィリエイトURLを入力
    rakutenUrl: "",
    rakutenPriceRange: "¥8,200〜¥9,800",
    badge: "エントリーモデル",
  },
];

export const FEATURES = {
  title: "選ばれる3つの理由",
  items: [
    {
      number: "01",
      title: "徹底リサーチで厳選",
      description:
        "数千件のレビュー・販売データ・専門家の評価を多角的に分析。本当に価値ある商品だけを厳選してご紹介します。",
      highlight: "データと口コミで裏付けされた選定",
    },
    {
      number: "02",
      title: "コスパで選ぶ",
      description:
        "高いだけでは選びません。「この価格でこの品質はすごい」という商品を重点的にご紹介しています。",
      highlight: "お財布にも、クオリティにも優しい",
    },
    {
      number: "03",
      title: "\"結局どれ？\"に答えます",
      description:
        "長い比較記事を読まなくても、あなたに合う商品がすぐ判断できるように、結論ファーストで紹介します。",
      highlight: "3分で買い物上手になれる",
    },
  ],
};

export const CASE_STUDIES = {
  title: "選ぶ基準をわかりやすく",
  criteria: [
    { icon: "📦", label: "日用品・家電・美容・食品など幅広く調査" },
    { icon: "🔍", label: "口コミ、価格、使いやすさを比較" },
    { icon: "✅", label: "買って後悔しにくい商品を厳選" },
  ],
  testimonials: [
    {
      text: "比較記事を見て、迷わずに買い物できるようになりました。本当に助かっています！",
      name: "Yさん（30代・会社員）",
    },
    {
      text: "忙しくて調べる時間がないので、まとめてくれているのがとても嬉しい。信頼しています。",
      name: "Kさん（40代・主婦）",
    },
    {
      text: "コスパ重視で選んでくれるのが自分の感覚と合っていて、外れが少なくなりました。",
      name: "Tさん（50代・男性）",
    },
  ],
};

export const SHOP_COMPARISON = {
  label: "Amazon vs 楽天",
  title: "Amazonと楽天、結局どっちがお得？",
  description:
    "急ぎで欲しいならAmazon。ポイントを重視するなら楽天。商品によって正解は変わります。迷わない買い物ラボでは、価格だけでなく、配送スピード・ポイント還元・買いやすさまで比較して紹介します。",
  cards: [
    {
      icon: "🚀",
      accent: "amazon",
      title: "急ぎならAmazon",
      body: "すぐ欲しい人、配送の早さを重視する人におすすめ。",
      button: "Amazonで見る",
      href: "/ranking",
    },
    {
      icon: "🎁",
      accent: "rakuten",
      title: "ポイント重視なら楽天",
      body: "買い回りやポイント還元を活用したい人におすすめ。",
      button: "楽天で見る",
      href: "/ranking",
    },
    {
      icon: "⚖️",
      accent: "compare",
      title: "迷ったら比較レビュー",
      body: "価格・口コミ・使いやすさを見て、どちらで買うべきか結論から紹介します。",
      button: "比較ランキングを見る",
      href: "/ranking",
    },
  ],
} as const;

export const FLOW = {
  title: "ご利用の流れ",
  subtitle: "4ステップで、買い物の迷いがなくなります",
  steps: [
    {
      step: "Step 1",
      title: "カテゴリを選ぶ",
      description: "家電・日用品・美容など、探したいジャンルを選びます。",
    },
    {
      step: "Step 2",
      title: "ランキングを確認する",
      description: "コスパ順・人気順など、目的に合わせてチェックします。",
    },
    {
      step: "Step 3",
      title: "レビューを読む",
      description: "実際の使い心地・長所・短所をわかりやすく解説します。",
    },
    {
      step: "Step 4",
      title: "AmazonでGET！",
      description: "気に入った商品をAmazonカートに追加して購入するだけ。",
    },
  ],
};

export const FAQS = {
  title: "よくある質問",
  items: [
    {
      question: "本当に無料で読めますか？",
      answer:
        "はい、すべてのレビュー・ランキングは無料でご覧いただけます。会員登録も不要です。",
    },
    {
      question: "どんな商品を紹介していますか？",
      answer:
        "生活雑貨・家電・美容・食品・育児グッズなど幅広いカテゴリを扱っています。月に数十点の新しい商品を追加しています。",
    },
    {
      question: "Amazonアフィリエイトを利用していますか？",
      answer:
        "はい、当サイトはAmazonアソシエイト・プログラムに参加しています。商品リンクをクリックしてご購入いただくと、当サイトに紹介料が入る場合があります。ただし、それによって商品の評価を歪めることはありません。",
    },
    {
      question: "レビューの信頼性はどうやって担保していますか？",
      answer:
        "数千件のレビュー・販売データ・専門家の評価を多角的に分析した上でレビューを作成しています。特定のメーカーからの依頼で掲載した商品がある場合は、記事内に明記しています。",
    },
    {
      question: "新しい情報をいち早く知るには？",
      answer:
        "LINE公式アカウントを登録していただくと、新着ランキングやお得なセール情報をいち早くお届けします。",
    },
  ],
};

export const CTA = {
  title: "もう、買ってから後悔しない。",
  subtitle: "ランキングと比較レビューを見て、自分に合う商品をサクッと選べます。",
  primaryButton: "失敗しないランキングを見る",
  primaryUrl: "/ranking",
  lineButton: "LINEでお得情報を受け取る",
  lineSubtext: "セール情報や買い時をLINEで受け取る",
};

export const FOOTER = {
  description:
    "忙しい30〜50代のために、本当にいいAmazon商品を正直にレビューするメディアです。",
  links: [
    { label: "プライバシーポリシー", url: "/privacy" },
    { label: "お問い合わせ", url: "/contact" },
    { label: "Amazonアソシエイト開示", url: "/associate-disclosure" },
  ],
  copyright: `© ${new Date().getFullYear()} 迷わない買い物ラボ`,
};
