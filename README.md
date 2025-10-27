# BadUI - アカウント作成フロー

「悪いUI」を体験できる、アカウント作成シミュレーションプロジェクトです。

## 🎯 概要

このプロジェクトは、意図的に使いづらいUIパターンを実装した教育的なデモです。以下のような「Bad UI」パターンを体験できます:

### 実装された「Bad UI」要素

1. **ログイン画面**
   - どのような入力でも「存在しないユーザー」エラーが表示される

2. **基本情報入力**
   - Enterキーを押すと「Enter」という文字列が入力される
   - 複雑なパスワード要件（大文字・小文字・数字・記号すべて必須）

3. **利用規約確認**
   - ページ全体のスクロール + 本文内のスクロールの両方が必要
   - すべてスクロールしないとチェックボックスが有効化されない

4. **プライバシーポリシー確認**
   - 縦スクロール + 横スクロールが必要
   - 本文の途中にもチェックボックスがある

5. **パスワード設定**
   - メールアドレスに含まれる文字が使用禁止

6. **年齢設定**
   - 生年月日入力で年のみスライダー（B.C.6 ～ A.D.10000）
   - 年齢と生年月日が一致しないとエラー
   - 1909年8月21日より前はエラー
   - エラー時は最初からやり直し

7. **全体的な特徴**
   - テキスト選択が無効化（入力欄は除く）
   - 複雑な入力フロー

## 🛠️ 技術スタック

- **Vite** - ビルドツール
- **React 19** - UIライブラリ
- **TypeScript** - 型安全性
- **Tailwind CSS v4** - スタイリング

## 📦 セットアップ

### 必要要件

- Node.js 20以上
- pnpm

### インストール

```bash
pnpm install
```

### 開発サーバー起動

```bash
pnpm run dev
```

ブラウザで `http://localhost:5173/BadUI/` を開きます。

### ビルド

```bash
pnpm run build
```

### プレビュー

```bash
pnpm run preview
```

## 🚀 デプロイ

GitHub Pagesへの自動デプロイが設定されています。

1. GitHubリポジトリの Settings > Pages
2. Source を "GitHub Actions" に設定
3. `main` ブランチにプッシュすると自動的にデプロイされます

## 📁 プロジェクト構造

```
src/
  components/
    elements/          # 再利用可能な基本コンポーネント
      TextInput.tsx
      SubmitButton.tsx
      BackButton.tsx
      ErrorText.tsx
    layouts/           # レイアウトコンポーネント
      Header.tsx
      Footer.tsx
      FormWrapper.tsx
  pages/               # 各ステップのページコンポーネント
    InitialPage.tsx
    LoginPage.tsx
    SignUpStep1.tsx
    SignUpStepConfirm.tsx
    TermsOfServicePage.tsx
    PrivacyPolicyPage.tsx
    PasswordSettingPage.tsx
    AgeSettingPage.tsx
    SignUpComplete.tsx
  App.tsx              # メインアプリケーション（ステート管理）
  main.tsx             # エントリーポイント
```

## 🎓 学習のポイント

このプロジェクトから学べること:

1. **UIデザインのアンチパターン** - 何が使いにくいUIを作るのか
2. **React Hooks** - useState によるステート管理
3. **TypeScript** - 型安全なコンポーネント設計
4. **Tailwind CSS** - ユーティリティファーストCSS
5. **フォームバリデーション** - 複雑な検証ロジック

## 📝 改善案

実際のプロダクトで避けるべきパターン:

- ✅ 明確で達成可能なバリデーション要件
- ✅ ユーザーフレンドリーなエラーメッセージ
- ✅ 合理的なスクロール要件
- ✅ 標準的なキーボード操作
- ✅ 適切なテキスト選択の許可
- ✅ 進捗状況の明確な表示
- ✅ エラー時の適切なリカバリー手段

## ⚠️ 注意

このプロジェクトは教育目的のものです。実際のプロダクトでこれらのパターンを使用しないでください！

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

Issue や Pull Request を歓迎します。さらに「悪い」UIのアイデアがあればぜひ提案してください!
