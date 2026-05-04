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
  rakutenUrl?: string;
  rakutenPriceRange?: string;
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
    rakutenUrl: "#",
    rakutenPriceRange: "¥47,000〜62,000",
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
  {
    id: 10,
    rank: 10,
    category: "家電・ガジェット",
    categoryLabel: "家電・ガジェット",
    categoryBg: "bg-blue-50",
    productIcon: "🔋",
    name: "3-in-1 ワイヤレス充電スタンド",
    maker: "ChargePad",
    rating: 4.5,
    reviewCount: 4821,
    priceRange: "¥3,500〜5,500",
    verdict: "スマホ・ワイヤレスイヤホン・スマートウォッチを1台で同時充電。卓上がスッキリして「充電ケーブルの煩わしさから解放された」という声が多数。",
    pros: [
      "3デバイスを1台で同時充電",
      "MagSafe・Qi2対応で高速充電",
      "コンパクトでデスクの邪魔にならない",
    ],
    targetUser: "デスク周りのケーブルをすっきりさせたい方",
    monthlyPurchases: "1,523人",
    amazonUrl: "#",
    badge: "売れ筋No.1",
  },
  {
    id: 11,
    rank: 11,
    category: "日用品",
    categoryLabel: "日用品",
    categoryBg: "bg-gray-50",
    productIcon: "🗂️",
    name: "マグネット式キッチンウォールシェルフ 3段",
    maker: "HomeOrder",
    rating: 4.4,
    reviewCount: 7234,
    priceRange: "¥2,800〜4,200",
    verdict: "冷蔵庫横の「もったいないスペース」を収納に。スパイスやラップが取り出しやすい位置に収まり、「料理が楽しくなった」という声が続出しています。",
    pros: [
      "工具不要で冷蔵庫横に簡単設置",
      "耐荷重3kgで調味料もしっかり支える",
      "シンプルデザインでどのキッチンにも馴染む",
    ],
    targetUser: "キッチンの収納スペースを増やしたい方",
    monthlyPurchases: "989人",
    amazonUrl: "#",
  },
  {
    id: 12,
    rank: 12,
    category: "美容・健康",
    categoryLabel: "美容・健康",
    categoryBg: "bg-pink-50",
    productIcon: "✨",
    name: "ビタミンC誘導体美容液 20%高濃度配合",
    maker: "DermaClear",
    rating: 4.4,
    reviewCount: 5103,
    priceRange: "¥3,800〜5,500",
    verdict: "3ヶ月継続で「シミが薄くなった」「くすみが取れた」の声が続出。皮膚科医監修の高濃度ビタミンC配合で、朝のスキンケアに定着しやすい使いやすさです。",
    pros: [
      "高濃度20%配合でシミ・くすみにアプローチ",
      "サラサラテクスチャーで重ね付けしやすい",
      "全成分無添加・敏感肌テスト済み",
    ],
    targetUser: "シミ・くすみが気になり始めた30〜40代の方",
    monthlyPurchases: "734人",
    amazonUrl: "#",
    badge: "皮膚科医監修",
  },
  {
    id: 13,
    rank: 13,
    category: "キッチン",
    categoryLabel: "キッチン",
    categoryBg: "bg-orange-50",
    productIcon: "🥤",
    name: "真空断熱タンブラー 500ml",
    maker: "ThermoMax",
    rating: 4.3,
    reviewCount: 11203,
    priceRange: "¥2,500〜4,000",
    verdict: "保温・保冷6時間以上を実現。結露ゼロで書類や机を濡らさず、在宅ワークのお供として圧倒的人気。「1本買ったらもう安い水筒には戻れない」の声が多数。",
    pros: [
      "保温・保冷どちらも6時間以上持続",
      "外側が結露しないのでデスクで安心",
      "食洗機対応でお手入れが楽",
    ],
    targetUser: "在宅ワーク・オフィス勤務でデスクに飲み物を置く方",
    monthlyPurchases: "2,204人",
    amazonUrl: "#",
  },
  {
    id: 14,
    rank: 14,
    category: "食品・飲料",
    categoryLabel: "食品・飲料",
    categoryBg: "bg-green-50",
    productIcon: "🫒",
    name: "有機JAS認定 エキストラバージンオリーブオイル",
    maker: "GreenLeaf",
    rating: 4.3,
    reviewCount: 3890,
    priceRange: "¥1,800〜2,800",
    verdict: "農薬不使用のスペイン産オリーブを低温圧搾。フルーティな香りと深いコクが市販品と一線を画します。サラダ・カルパッチョにかけると絶品との声多数。",
    pros: [
      "有機JAS認定・農薬不使用で安心",
      "低温圧搾製法で栄養成分を保持",
      "遮光ボトルで酸化しにくい設計",
    ],
    targetUser: "食の安全にこだわる方・料理の質を上げたい方",
    monthlyPurchases: "457人",
    amazonUrl: "#",
    badge: "有機JAS認定",
  },
  {
    id: 15,
    rank: 15,
    category: "食品・飲料",
    categoryLabel: "食品・飲料",
    categoryBg: "bg-green-50",
    productIcon: "🌱",
    name: "ソイプロテイン ナチュラル 1kg",
    maker: "NaturePower",
    rating: 4.2,
    reviewCount: 4567,
    priceRange: "¥2,200〜3,200",
    verdict: "動物性不使用で女性・ベジタリアンに大人気。ホエイより消化が緩やかで満腹感が続くため、間食代わりのダイエット活用でリピーターが急増中。",
    pros: [
      "植物性100%で乳製品アレルギーでも安心",
      "消化がゆっくりで腹持ちが良い",
      "無添加・国内製造で品質管理が徹底",
    ],
    targetUser: "ダイエット中の方・植物性プロテインを探している方",
    monthlyPurchases: "671人",
    amazonUrl: "#",
    badge: "植物性100%",
  },
  {
    id: 16,
    rank: 16,
    category: "家電・ガジェット",
    categoryLabel: "家電・ガジェット",
    categoryBg: "bg-blue-50",
    productIcon: "💡",
    name: "スマートLED電球 調光・調色対応 4個セット",
    maker: "LightSmart",
    rating: 4.4,
    reviewCount: 6203,
    priceRange: "¥3,200〜4,800",
    verdict: "スマホアプリで明るさ・色温度を自由に調整。朝は白色・夜は電球色と切り替えることで生活リズムが整ったとの声が多数。工事不要で賃貸でも使えます。",
    pros: [
      "アプリ・声でオン/オフ・調光が自由自在",
      "タイマー設定で自動点灯・消灯が可能",
      "一般電球ソケットにそのまま取り付けOK",
    ],
    targetUser: "スマートホームを手軽に始めたい方",
    monthlyPurchases: "1,102人",
    amazonUrl: "#",
  },
  {
    id: 17,
    rank: 17,
    category: "日用品",
    categoryLabel: "日用品",
    categoryBg: "bg-gray-50",
    productIcon: "🛁",
    name: "珪藻土バスマット Lサイズ",
    maker: "NaturalDry",
    rating: 4.3,
    reviewCount: 8912,
    priceRange: "¥2,000〜3,500",
    verdict: "足を置いた瞬間にサッと水を吸収。タオル地マットのように洗濯不要で衛生的。「カビが全くない」「梅雨でも快適」と浴室まわりのストレスを一掃します。",
    pros: [
      "踏んだ瞬間に水分を即吸収",
      "洗濯不要・天日干しで繰り返し使える",
      "抗菌・防カビ効果でいつも清潔",
    ],
    targetUser: "浴室の衛生・お手入れを楽にしたい方",
    monthlyPurchases: "1,834人",
    amazonUrl: "#",
    badge: "洗濯不要",
  },
  {
    id: 18,
    rank: 18,
    category: "美容・健康",
    categoryLabel: "美容・健康",
    categoryBg: "bg-pink-50",
    productIcon: "🌡️",
    name: "EMS腹筋ベルト AbsToner Pro",
    maker: "FitBody",
    rating: 4.1,
    reviewCount: 5437,
    priceRange: "¥5,500〜8,000",
    verdict: "テレビを見ながら装着するだけで腹筋にアプローチ。強度15段階調整で初心者から上級者まで対応。3ヶ月継続で「お腹が引き締まってきた」の声が続出です。",
    pros: [
      "ながら時間に腹筋ケアができる",
      "強度15段階で自分に合ったレベルで使える",
      "USB充電式で電池交換不要",
    ],
    targetUser: "運動時間が取れないが体型が気になる方",
    monthlyPurchases: "589人",
    amazonUrl: "#",
  },
  {
    id: 19,
    rank: 19,
    category: "キッチン",
    categoryLabel: "キッチン",
    categoryBg: "bg-orange-50",
    productIcon: "🍱",
    name: "電子レンジ対応ガラス製保存容器 5点セット",
    maker: "FreshKeep",
    rating: 4.5,
    reviewCount: 7823,
    priceRange: "¥3,500〜5,000",
    verdict: "プラスチックと違い臭い移りゼロ・電子レンジOKのガラス製。作り置きおかずをそのまま温めてそのまま食卓へ。「洗い物が激減した」という声が絶えません。",
    pros: [
      "電子レンジ・オーブン・食洗機すべてに対応",
      "臭い・色移りがなく清潔に使い続けられる",
      "5サイズセットで用途に合わせて使い分けられる",
    ],
    targetUser: "作り置き・お弁当を習慣にしたい方",
    monthlyPurchases: "1,347人",
    amazonUrl: "#",
    badge: "食洗機対応",
  },
  {
    id: 20,
    rank: 20,
    category: "食品・飲料",
    categoryLabel: "食品・飲料",
    categoryBg: "bg-green-50",
    productIcon: "🍵",
    name: "国産有機抹茶パウダー 100g",
    maker: "KyotoMatcha",
    rating: 4.6,
    reviewCount: 2934,
    priceRange: "¥1,500〜2,500",
    verdict: "京都宇治産の有機認定抹茶。鮮やかな緑色と上品な甘みが市販品とは段違いとリピーター続出。ラテ・スイーツ作りにも使えて「自宅がカフェになった」という声が多数。",
    pros: [
      "有機JAS認定・農薬不使用で安心",
      "鮮度を保つ個包装・遮光パッケージ",
      "料理・ドリンクどちらにも使える万能さ",
    ],
    targetUser: "抹茶ラテ・お菓子作りを楽しみたい方",
    monthlyPurchases: "812人",
    amazonUrl: "#",
    badge: "国産有機",
  },
  {
    id: 21,
    rank: 21,
    category: "家電・ガジェット",
    categoryLabel: "家電・ガジェット",
    categoryBg: "bg-blue-50",
    productIcon: "📷",
    name: "超広角Webカメラ 4K対応 オートフォーカス",
    maker: "ClearVision",
    rating: 4.4,
    reviewCount: 3671,
    priceRange: "¥8,000〜12,000",
    verdict: "テレワーク・オンライン会議の映像品質を劇的に改善。4K解像度と低照度補正で暗い部屋でも顔がクリアに映ります。「プレゼンの印象が変わった」との声が多数。",
    pros: [
      "4K解像度で顔の細部まで鮮明に映る",
      "オートフォーカスで動いても常にピントが合う",
      "USBさすだけのプラグ&プレイ対応",
    ],
    targetUser: "テレワーク・オンライン会議の多い方",
    monthlyPurchases: "743人",
    amazonUrl: "#",
  },
  {
    id: 22,
    rank: 22,
    category: "日用品",
    categoryLabel: "日用品",
    categoryBg: "bg-gray-50",
    productIcon: "🪴",
    name: "自動給水植木鉢 スマートプランター",
    maker: "GreenLife",
    rating: 4.2,
    reviewCount: 4102,
    priceRange: "¥2,800〜4,200",
    verdict: "水やりを忘れがちな方でも植物を枯らさない。土の乾燥を自動で感知して必要なときだけ給水。「観葉植物が初めて1年以上育てられた」という初心者の声が多数。",
    pros: [
      "土の水分を自動感知して過不足なく給水",
      "最大2週間分の水を貯められるタンク付き",
      "シンプルデザインでどんな部屋にも馴染む",
    ],
    targetUser: "植物を育てたいが水やりを忘れてしまう方",
    monthlyPurchases: "528人",
    amazonUrl: "#",
  },
  {
    id: 23,
    rank: 23,
    category: "美容・健康",
    categoryLabel: "美容・健康",
    categoryBg: "bg-pink-50",
    productIcon: "💆",
    name: "ネック＆ショルダーマッサージャー",
    maker: "RelaxPro",
    rating: 4.5,
    reviewCount: 9248,
    priceRange: "¥6,000〜9,000",
    verdict: "3Dもみ玉が首から肩甲骨まで360度ほぐしてくれる。ヒーター機能付きで筋肉が深部から温まり、「デスクワーク後のコリが激減した」と大人気のアイテムです。",
    pros: [
      "3Dもみ玉が首・肩・背中を本格マッサージ",
      "ヒーター機能で深部から温めてコリをほぐす",
      "コードレスで場所を選ばずどこでも使える",
    ],
    targetUser: "デスクワークで肩こり・首こりに悩む方",
    monthlyPurchases: "2,156人",
    amazonUrl: "#",
    badge: "ヒーター付き",
    saleLabel: "⚡ セール中",
  },
  {
    id: 24,
    rank: 24,
    category: "キッチン",
    categoryLabel: "キッチン",
    categoryBg: "bg-orange-50",
    productIcon: "🔪",
    name: "セラミック包丁 3本セット（ケース付き）",
    maker: "SharpEdge",
    rating: 4.3,
    reviewCount: 5876,
    priceRange: "¥3,000〜5,000",
    verdict: "金属臭がなく食材の味を損なわないセラミック刃。切れ味が長続きしてサビない。「野菜のみじん切りが半分の時間でできる」と料理初心者から熟練者まで高評価です。",
    pros: [
      "サビ知らずで衛生的・長期間切れ味が続く",
      "金属臭がなく食材本来の味を活かせる",
      "軽量で手が疲れにくく女性にも扱いやすい",
    ],
    targetUser: "毎日料理をする方・切れ味にこだわりたい方",
    monthlyPurchases: "891人",
    amazonUrl: "#",
  },
  {
    id: 25,
    rank: 25,
    category: "食品・飲料",
    categoryLabel: "食品・飲料",
    categoryBg: "bg-green-50",
    productIcon: "🫚",
    name: "MCTオイル 中鎖脂肪酸100% 360g",
    maker: "KetoFuel",
    rating: 4.3,
    reviewCount: 6521,
    priceRange: "¥2,000〜3,000",
    verdict: "コーヒーに入れるだけで集中力・持久力アップが期待できるとビジネスパーソンに爆発的人気。無味無臭でどんな食事にも混ぜやすく、糖質制限中の強い味方です。",
    pros: [
      "無味無臭でコーヒー・サラダ・スムージーに混ぜやすい",
      "ケトン体エネルギーで午前中の集中力を維持",
      "コヤシ油不使用・ヤシ油100%の高品質",
    ],
    targetUser: "糖質制限中の方・集中力を高めたいビジネスパーソン",
    monthlyPurchases: "1,203人",
    amazonUrl: "#",
    badge: "中鎖脂肪酸100%",
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
