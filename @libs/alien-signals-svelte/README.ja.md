# `alien-signals` for Svelte

[![npm](https://img.shields.io/npm/v/@gn8/alien-signals-svelte)](https://www.npmjs.com/package/@gn8/alien-signals-svelte)
[![license](https://img.shields.io/github/license/gn8-ai/universe-alien-signals)](https://github.com/gn8-ai/universe-alien-signals/blob/main/LICENSE.md)
[![english documents](https://img.shields.io/badge/documents-English-blue)](README.md)

Svelte 5+のrunesシステムで[alien-signals](https://github.com/stackblitz/alien-signals)状態管理システムを使用できるようにするライブラリです。

<br />

## 🛸 特徴

- **シンプル**: 最小限のコードで簡単に実装
- **柔軟性**: 複数のフレームワーク間で単一のシグナルを再利用
- **型安全**: 完全なTypeScriptサポート
- **最高のリアクティビティ**: alien-signalsの効率的なシグナル管理を活用
- **Tree Shakable**: 必要なコードのみをバンドル
- **Runesサポート**: Svelte 5のrunesシステムとのネイティブ統合

<br />

## 🔌 状況

| フレームワーク | 状況 | SSRサポート | リポジトリ                    |
| -------------- | ---- | ----------- | ----------------------------- |
| React          | ✅   | 🔼          | [🔗](../alien-signals-react)  |
| Solid          | ✅   | 🔼          | [🔗](../alien-signals-solid)  |
| Vue            | ✅   | 🔼          | [🔗](../alien-signals-vue)    |
| Svelte         | ✅   | 🔼          | [🔗](../alien-signals-svelte) |

- ✅: 実装済み
- 🔼: 回避可能
- ⚠️: 未検証
- ⌛️: 準備中

<br />

## 💻 ガイド

### インストール

```sh
npm install alien-signals @gn8/alien-signals-svelte
```

### サンプルコード

<!-- prettier-ignore -->
```svelte
<script>
  import { useSignal } from '@gn8/alien-signals-svelte';
  import { signal } from 'alien-signals';

  const countSignal = signal(0);

  const count = useSignal(countSignal);
</script>

<button on:click={() => $count++}>
  カウント: {$count}
</button>
```

### 使用例

- [Svelte](../../@examples/svelte-with-alien-signals) (近日公開)

<br />

## 📚 ロードマップ

以下の機能とサポートが順次追加される予定です：

- [ ] SSRハイドレーションエラーの処理に関するドキュメントとソリューション
- [ ] テストカバレッジの強化
- [ ] Svelte 5の使用例の作成
- [ ] SvelteKitとの統合

<br />

## 🙏 謝辞

このライブラリの開発は以下に影響を受けました：

- [alien-signals](https://github.com/stackblitz/alien-signals) - コアシグナルライブラリ
- [Svelte](https://svelte.dev/) - プログレッシブJavaScriptフレームワーク
