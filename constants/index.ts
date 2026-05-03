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
  headline: "「これで決まり！」が見つかる\nAmazon商品レビュー＆ランキング",
  subheadline:
    "忙しい毎日の中で「いい買い物」を増やしたい。\n専門家が実際に使って選んだ商品だけを、正直にレビューします。",
  ctaPrimary: "人気ランキングを見る →",
  ctaSecondary: "まずは無料で読む",
  ctaPrimaryUrl: "/ranking",
  ctaSecondaryUrl: "#overview",
};

export const PROBLEMS = {
  title: "こんなお悩み、ありませんか？",
  items: [
    {
      icon: "😰",
      title: "商品が多すぎて選べない",
      description: "レビュー数が多すぎて、どれが本当にいいのか分からない…",
    },
    {
      icon: "⏰",
      title: "比較する時間がない",
      description: "忙しくて、じっくりリサーチできない。気づいたら何も買えていない。",
    },
    {
      icon: "😖",
      title: "買って後悔したくない",
      description: "お金をムダにしたくない。失敗してガッカリしたくない。",
    },
    {
      icon: "🤔",
      title: "口コミが信用できない",
      description: "サクラレビューが混ざっていそうで不安。本当の評価が知りたい。",
    },
  ],
  resolution: "そのお悩み、私たちが解決します！",
};

export const OVERVIEW = {
  title: "迷わない買い物ラボとは？",
  description:
    "生活雑貨・家電・美容・食品など、あらゆるカテゴリのAmazon商品を実際に購入・使用して、コスパ・品質・使いやすさを徹底比較。本当に「買ってよかった」と思える商品だけをランキング＆レビューで紹介するメディアです。",
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
  productIcon: string;
  name: string;
  maker: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  verdict: string;
  pros: string[];
  targetUser: string;       // 「こんな人におすすめ」
  monthlyPurchases: string; // 「今月X人が購入」の数字部分
  amazonUrl: string;
  badge?: string;
  saleLabel?: string;       // 「⚡ セール中」など。不要なら削除でOK
};

export const RANKING_CATEGORIES = [
  "すべて",
  "家電・ガジェット",
  "日用品",
  "美容・健康",
  "キッチン",
  "食品・飲料",
];

export const RANKING_PRODUCTS: RankingProduct[] = [
  {
    id: 1,
    rank: 1,
    category: "家電・ガジェット",
    categoryLabel: "家電・ガジェット",
    categoryBg: "bg-blue-50",
    productIcon: "🤖",
    name: "全自動ロボット掃除機 Pro S",
    maker: "CleanBot",
    rating: 4.8,
    reviewCount: 3241,
    priceRange: "¥45,000〜60,000",
    verdict: "「床掃除をやめた」という読者の声が多数。自動ゴミ収集で週1メンテが不要になり、忙しい共働き家庭に最適です。",
    pros: [
      "自動ゴミ収集で週1メンテだけでOK",
      "マッピング精度が高く家具を避けてくれる",
      "静音モードで夜間・在宅中も気にならない",
    ],
    targetUser: "共働きで掃除の時間が取れない方",
    monthlyPurchases: "1,247人",
    amazonUrl: "#",
    badge: "編集部イチオシ",
    saleLabel: "🔥 今週急上昇",
  },
  {
    id: 2,
    rank: 2,
    category: "日用品",
    categoryLabel: "日用品",
    categoryBg: "bg-gray-50",
    productIcon: "🌀",
    name: "コードレスサイクロン掃除機 V20",
    maker: "PowerVac",
    rating: 4.7,
    reviewCount: 5892,
    priceRange: "¥55,000〜75,000",
    verdict: "吸引力が衰えないサイクロン方式。カーペットから畳まで対応し、軽量で女性でも扱いやすいと高評価です。",
    pros: [
      "吸引力がずっと変わらない",
      "本体重量わずか2.4kgで軽々扱える",
      "付属アタッチメントで布団・車内にも対応",
    ],
    targetUser: "吸引力にこだわりたい方・ペットを飼っている方",
    monthlyPurchases: "892人",
    amazonUrl: "#",
    badge: "売れ筋No.1",
  },
  {
    id: 3,
    rank: 3,
    category: "家電・ガジェット",
    categoryLabel: "家電・ガジェット",
    categoryBg: "bg-blue-50",
    productIcon: "🎧",
    name: "ノイズキャンセリングイヤホン Pro 5",
    maker: "SoundMax",
    rating: 4.6,
    reviewCount: 8104,
    priceRange: "¥28,000〜38,000",
    verdict: "ノイキャン性能で業界最高クラス。通勤中の騒音が「ほぼ消える」レベル。音質も良く一日中着けていられる装着感です。",
    pros: [
      "業界最高クラスのノイズキャンセリング",
      "最大30時間の長時間再生",
      "外音取り込みが自然で安全に使える",
    ],
    targetUser: "通勤・テレワーク中に集中したい方",
    monthlyPurchases: "2,103人",
    amazonUrl: "#",
  },
  {
    id: 4,
    rank: 4,
    category: "キッチン",
    categoryLabel: "キッチン",
    categoryBg: "bg-orange-50",
    productIcon: "☕",
    name: "全自動コーヒーメーカー Brew Master",
    maker: "CaféPro",
    rating: 4.6,
    reviewCount: 2478,
    priceRange: "¥15,000〜22,000",
    verdict: "豆から挽きたてを1杯分ずつ。カフェ品質のコーヒーが毎朝ボタン1つで飲めます。タイマー予約機能も便利。",
    pros: [
      "豆から全自動でカフェ品質の味",
      "タイマー予約で起床時に淹れたてが飲める",
      "洗いやすい設計でメンテが楽",
    ],
    targetUser: "毎朝コーヒーを飲む方・カフェ代を節約したい方",
    monthlyPurchases: "534人",
    amazonUrl: "#",
    badge: "コスパ最強",
    saleLabel: "⚡ セール中",
  },
  {
    id: 5,
    rank: 5,
    category: "美容・健康",
    categoryLabel: "美容・健康",
    categoryBg: "bg-pink-50",
    productIcon: "🪥",
    name: "音波式電動歯ブラシ SmileCare Pro",
    maker: "OralTech",
    rating: 4.5,
    reviewCount: 6321,
    priceRange: "¥7,000〜12,000",
    verdict: "3ヶ月で歯医者に「歯茎の状態がよくなった」と言われた読者続出。歯科衛生士監修の磨き方ガイド機能付き。",
    pros: [
      "3ヶ月で歯茎ケア効果を実感する声が多数",
      "強さ3段階・3つのモードで敏感な方にも",
      "1回充電で最大3週間使用可能",
    ],
    targetUser: "歯茎の健康が気になる方・歯科代を減らしたい方",
    monthlyPurchases: "1,089人",
    amazonUrl: "#",
  },
  {
    id: 6,
    rank: 6,
    category: "キッチン",
    categoryLabel: "キッチン",
    categoryBg: "bg-orange-50",
    productIcon: "🍳",
    name: "セラミックコーティングフライパン 26cm",
    maker: "KitchenPro",
    rating: 4.5,
    reviewCount: 4532,
    priceRange: "¥4,500〜7,000",
    verdict: "油少なめでもくっつかない。テフロンより安全なセラミックコーティングで家族の健康も守れる一品です。",
    pros: [
      "油なしでも焦げ付かないコーティング",
      "PFOA・PTFE不使用で安心・安全",
      "IH・ガス対応でどんな家庭にも使える",
    ],
    targetUser: "家族の食事の安全にこだわる方",
    monthlyPurchases: "763人",
    amazonUrl: "#",
  },
  {
    id: 7,
    rank: 7,
    category: "食品・飲料",
    categoryLabel: "食品・飲料",
    categoryBg: "bg-green-50",
    productIcon: "💪",
    name: "ホエイプロテイン ゴールドスタンダード",
    maker: "NutriPower",
    rating: 4.4,
    reviewCount: 12047,
    priceRange: "¥4,500〜7,000",
    verdict: "プロテイン市場で10年以上の定番商品。溶けやすく味も美味しい。「続けやすい」という声が圧倒的に多いです。",
    pros: [
      "溶けが良くダマにならない",
      "チョコレート味が美味しく飽きにくい",
      "1食あたりのコストが安く続けやすい",
    ],
    targetUser: "プロテインを初めて買う方・続けやすさ重視の方",
    monthlyPurchases: "3,412人",
    amazonUrl: "#",
    badge: "定番人気",
  },
  {
    id: 8,
    rank: 8,
    category: "美容・健康",
    categoryLabel: "美容・健康",
    categoryBg: "bg-pink-50",
    productIcon: "💊",
    name: "マルチビタミン＆ミネラル デイリーケア",
    maker: "VitaLab",
    rating: 4.4,
    reviewCount: 3876,
    priceRange: "¥2,500〜3,500",
    verdict: "1粒で20種以上の栄養素を補給。食事が不規則な忙しいビジネスパーソンに人気。錠剤が小さくて飲みやすいと評判。",
    pros: [
      "1粒で20種以上の栄養素をカバー",
      "小さくて飲みやすい錠剤サイズ",
      "国内製造・第三者機関で品質検査済み",
    ],
    targetUser: "忙しくて食事が偏りがちな方",
    monthlyPurchases: "421人",
    amazonUrl: "#",
  },
  {
    id: 9,
    rank: 9,
    category: "日用品",
    categoryLabel: "日用品",
    categoryBg: "bg-gray-50",
    productIcon: "🧺",
    name: "濃縮液体洗濯洗剤 クリーンプラス",
    maker: "WashCare",
    rating: 4.3,
    reviewCount: 9234,
    priceRange: "¥1,000〜1,800",
    verdict: "少量でしっかり汚れが落ちるコスパ抜群の洗剤。柔軟剤不要でタオルがふっくら仕上がると主婦に大人気です。",
    pros: [
      "1本で約80回分、コスパが圧倒的",
      "柔軟剤なしでもふんわり仕上がる",
      "蛍光増白剤・合成着色料不使用で安心",
    ],
    targetUser: "洗剤代を節約したい方・肌が敏感な家族がいる方",
    monthlyPurchases: "2,891人",
    amazonUrl: "#",
  },
];

export const FEATURES = {
  title: "選ばれる3つの理由",
  items: [
    {
      number: "01",
      title: "実際に買って試している",
      description:
        "編集部が商品を自費で購入し、実際に使用した上でレビューを作成。体験に基づいた正直な評価をお届けします。",
      highlight: "体験済みだから、信頼できる",
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
      title: "忙しい人向けに解説",
      description:
        "「結局どれがいいの？」に答える結論ファーストの構成。長い文章を読まなくても、すぐに判断できます。",
      highlight: "3分で買い物上手になれる",
    },
  ],
};

export const CASE_STUDIES = {
  title: "みんなが使っています",
  stats: [
    { value: "500点以上", label: "紹介商品数" },
    { value: "12万人", label: "月間読者数" },
    { value: "96%", label: "「参考になった」率" },
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
        "編集部が実際に商品を購入・使用した上でレビューを作成しています。メーカーから提供された商品をレビューする場合は、記事内に必ず「提供品」と明記しています。",
    },
    {
      question: "新しい情報をいち早く知るには？",
      answer:
        "LINE公式アカウントを登録していただくと、新着ランキングやお得なセール情報をいち早くお届けします。",
    },
  ],
};

export const CTA = {
  title: "さっそく読んでみませんか？",
  subtitle: "無料・登録不要でランキングをチェックできます",
  primaryButton: "人気ランキングを見る →",
  primaryUrl: "/ranking",
  lineButton: "LINEで最新情報を受け取る",
  lineSubtext: "LINE登録でセール情報を先行配信",
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
