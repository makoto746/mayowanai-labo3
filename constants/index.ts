// ============================================================
// サイト全体のテキスト・データをここで管理します
// 文言を変えたいときはこのファイルを編集してください
// ============================================================

// 商品データ・型定義は constants/products.ts で管理
export type { RankingProduct } from "./products";
export { RANKING_CATEGORIES, RANKING_PRODUCTS, getProducts } from "./products";

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
