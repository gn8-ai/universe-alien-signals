# Alien Signals Solid

<!-- ![License](https://img.shields.io/github/license/gn8-ai/alien-signals-framework-integrations) -->
<!-- ![npm](https://img.shields.io/npm/v/alien-signals-framework-integrations) -->

[![English Documents](https://img.shields.io/badge/Documents-English-blue)](README.md)

[Alien Signals](https://github.com/stackblitz/alien-signals) の状態管理システムを Solid で扱うことができるライブラリ。

> [!WARNING]
> 一般的な利用では問題なく利用できると思いますが、完全なテストはされていません。利用の際はご注意ください。

<br />

## 🛸 特徴

- **Simple**: 最小限のコードで簡単に導入可能
- **Flexible**: 単一のシグナルを複数のフレームワークで再利用可能
- **Type Safe**: TypeScript による完全な型サポート
- **Best Reactivity**: Alien Signals の効率的なシグナル管理をそのまま活用
- **Tree Shakable**: 必要なコードだけをバンドル

<br />

## 🔌 ステータス

| Framework | Status | SSR Support | Repo                         |
| --------- | ------ | ----------- | ---------------------------- |
| React     | ✅     | ⚠️          | [🔗](../alien-signals-react) |
| Solid     | ✅     | ⚠️          | [🔗](../alien-signals-solid) |
| Vue       | ✅     | ⚠️          | [🔗](../alien-signals-vue)   |
| Svelte    | 🛑     | ⚠️          | ⌛️                           |

- ✅: 実装済み
- 🛑: 未実装
- ⚠️: 未検証
- ⌛️: 準備中

<br />

## 💻 使い方

### インストール

```sh
npm install alien-signals @gn8/alien-signals-solid
```

### サンプルコード

<!-- prettier-ignore -->
```tsx
import { useSignal } from '@gn8/alien-signals-solid';
import { signal } from 'alien-signals';

const $count = signal(0);

export default function Counter() {
  const [count, setCount] = useSignal($count);

  return (
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
}
```

### 使用例

- [Solid + Vite](../../@examples/solid-with-alien-signals)

<br />

## 📚 ロードマップ

以下の機能やサポートを順次追加していく予定です。

- [ ] SSR の検証と対応
- [ ] テストコードの拡充
- [ ] Astro フレームワークの使用例作成

<br />

## 💡 インスピレーション

このプロジェクトは以下の素晴らしいライブラリからインスピレーションを得ています。

### [Nanostores](https://github.com/nanostores/nanostores)

私は以前から Astro で Nanostores を愛用しており、その使いやすさに感銘を受けていました。Alien Signals の登場を知ったとき、 Nanostores のような使い勝手で Alien Signals のリアクティビティを流用したいと考え、このライブラリを開発しました。

Nanostores の優れた実装アプローチのおかげで、各フレームワークへの対応を迅速に進めることができました。コードの構造や設計パターンの多くは、Nanostores から学ばせていただいた知見を基にしています。

このプロジェクトを始めるきっかけと知識を与えてくれた Nanostores チームに深く感謝いたします。

<br />

## 🎉 感謝

### [Alien Signals](https://github.com/stackblitz/alien-signals)

このライブラリの大部分は Alien Signals のパワーです。
Alien Signals の開発者の方々に感謝いたします。
