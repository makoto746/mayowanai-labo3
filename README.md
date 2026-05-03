# 迷わない買い物ラボ

Amazon商品を紹介して収益化するレビュー・ランキングサイトのLPです。

## 起動方法

```bash
# 依存パッケージのインストール（初回のみ）
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 を開くと確認できます。

```bash
# 本番ビルド
npm run build

# 本番サーバーの起動
npm run start
```

---

## ファイル構成

```
mayowanai-labo/
├── app/
│   ├── layout.tsx          # ページ全体のレイアウト（タイトル・メタ情報）
│   ├── page.tsx            # トップページ（セクションを並べているだけ）
│   └── globals.css         # 全体のCSSスタイル・ブランドカラー定義
│
├── components/lp/          # LPの各セクション
│   ├── Hero.tsx            # ① ファーストビュー
│   ├── Problem.tsx         # ② 悩み・課題の提示
│   ├── ServiceOverview.tsx # ③ サービス概要
│   ├── Features.tsx        # ④ 特徴・強み
│   ├── CaseStudies.tsx     # ⑤ 実績・事例
│   ├── Flow.tsx            # ⑥ 利用の流れ
│   ├── FAQ.tsx             # ⑦ よくある質問
│   ├── CTA.tsx             # ⑧ CTA（行動喚起）
│   └── Footer.tsx          # ⑨ フッター
│
├── constants/
│   └── index.ts            # ★ 文言・データの一元管理
│
└── public/
    └── images/             # 画像を置く場所
```

---

## 文言を編集したいとき

**`constants/index.ts`** を開いてください。サイト全体で使うテキストがまとまっています。

| 変数名 | 内容 |
|--------|------|
| `SITE` | サービス名・LINEのURL・お問い合わせURLなど |
| `HERO` | ファーストビューのキャッチコピー・ボタンテキスト |
| `PROBLEMS` | 悩み・課題のカード内容 |
| `OVERVIEW` | サービス概要の説明文 |
| `FEATURES` | 特徴・強みの3つの項目 |
| `CASE_STUDIES` | 実績の数字・お客様の声 |
| `FLOW` | 利用の流れ（ステップ） |
| `FAQS` | よくある質問と回答 |
| `CTA` | ページ下部のCTAボタン |
| `FOOTER` | フッターのリンク・コピーライト |

---

## 画像を追加したいとき

1. `public/images/` フォルダに画像を入れる（例：`hero.jpg`）
2. コンポーネント内でパスを指定する

```tsx
// 例：Hero.tsx での使い方
import Image from "next/image";

<Image src="/images/hero.jpg" alt="ヒーロー画像" width={800} height={600} />
```

---

## デザインを変えたいとき

**ブランドカラー** は `app/globals.css` の `@theme` ブロックで定義されています。

```css
@theme {
  --color-navy-700: oklch(34% 0.1 240);  /* メインの紺色 */
}
```

Tailwind CSSのクラス名（例：`bg-navy-700`, `text-amber-500`）でそのまま使えます。

---

## LINE・問い合わせの設定

`constants/index.ts` の `SITE` オブジェクトを編集してください。

```ts
export const SITE = {
  lineUrl: "https://line.me/ti/p/XXXXXXXXXXXX", // ← LINEのURLに変更
  contactUrl: "/contact",                         // ← 問い合わせページのパス
};
```

---

## 次にやること

### すぐにやること

- [ ] `constants/index.ts` の文言を実際の内容に書き換える
- [ ] `SITE.lineUrl` をLINE公式アカウントのURLに変更する
- [ ] `public/images/` に使用する画像を追加する
- [ ] `app/layout.tsx` のメタ情報（title, description）を確認・調整する

### 機能追加（必要に応じて）

- [ ] 問い合わせフォームページ（`app/contact/page.tsx`）を作成する
- [ ] 商品ランキングページ（`app/ranking/page.tsx`）を作成する
- [ ] プライバシーポリシーページを作成する
- [ ] Google Analytics（GA4）を設定する
- [ ] OGP画像（SNSシェア用）を設定する

### 本番公開のとき

- [ ] Vercel または任意のホスティングサービスにデプロイする
- [ ] 独自ドメインを設定する
- [ ] Amazonアソシエイトプログラムに申請・承認を受ける

---

## 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | Next.js 16（App Router） |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| デプロイ推奨 | Vercel |

---

## Amazonアフィリエイトについて

当サイトはAmazonアソシエイト・プログラムへの参加を前提としています。フッターとFAQにその旨の開示文を記載済みです。Amazonアソシエイトの審査通過後、各商品リンクにトラッキングIDを付与してください。
