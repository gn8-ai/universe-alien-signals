# Universe `alien-signals`

[![license](https://img.shields.io/github/license/gn8-ai/universe-alien-signals)](https://github.com/gn8-ai/universe-alien-signals/blob/main/LICENSE.md)
[![english documents](https://img.shields.io/badge/documents-English-blue)](README.md)

[alien-signals](https://github.com/stackblitz/alien-signals) の状態管理システムをモダンなフロントエンドフレームワークで扱うことができるライブラリ。

<br />

## 🛸 特徴

- **Simple**: 最小限のコードで簡単に導入可能
- **Flexible**: 単一のシグナルを複数のフレームワークで再利用可能
- **Type Safe**: TypeScript による完全な型サポート
- **Best Reactivity**: alien-signals の効率的なシグナル管理をそのまま活用
- **Tree Shakable**: 必要なコードだけをバンドル

<br />

## 🔌 ステータス

| Framework | Status | SSR Support | Usage        | Repo                              |
| --------- | ------ | ----------- | ------------ | --------------------------------- |
| React     | ✅     | 🔼          | [🔗](#react) | [🔗](./@libs/alien-signals-react) |
| Solid     | ✅     | 🔼          | [🔗](#solid) | [🔗](./@libs/alien-signals-solid) |
| Vue       | ✅     | 🔼          | [🔗](#vue)   | [🔗](./@libs/alien-signals-vue)   |
| Svelte    | ✅     | 🔼          | [🔗](#svelte) | [🔗](./@libs/alien-signals-svelte) |

- ✅: 実装済み
- 🔼: 回避可能
- ⚠️: 未検証
- ⌛️: 準備中

<br />

## 💻 使い方

### React

#### インストール

```sh
npm install alien-signals @gn8/alien-signals-react
```

#### サンプルコード

<!-- prettier-ignore -->
```tsx
import { useSignal } from '@gn8/alien-signals-react';
import { signal } from 'alien-signals';

const countSignal = signal(0);

export default function Counter() {
  const [count, setCount] = useSignal(countSignal);

  return (
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  );
}
```

<br />

### Solid

#### インストール

```sh
npm install alien-signals @gn8/alien-signals-solid
```

#### サンプルコード

<!-- prettier-ignore -->
```tsx
import { useSignal } from '@gn8/alien-signals-solid';
import { signal } from 'alien-signals';

const countSignal = signal(0);

export default function Counter() {
  const [count, setCount] = useSignal(countSignal);

  return (
    <button onClick={() => setCount(count() + 1)}>
      count is {count()}
    </button>
  );
}
```

<br />

### Vue

#### インストール

```sh
npm install alien-signals @gn8/alien-signals-vue
```

#### サンプルコード

<!-- prettier-ignore -->
```vue
<script setup>
import { useSignal } from '@gn8/alien-signals-vue';
import { signal } from 'alien-signals';

const countSignal = signal(0);

const count = useSignal(countSignal);
</script>

<template>
  <button @click="count++">
    count is {{ count }}
  </button>
</template>
```

<br />

### Svelte

#### インストール

```sh
npm install alien-signals @gn8/alien-signals-svelte
```

#### サンプルコード

<!-- prettier-ignore -->
```svelte
<script>
  import { useSignal } from '@gn8/alien-signals-svelte';
  import { signal } from 'alien-signals';

  const countSignal = signal(0);

  const count = useSignal(countSignal);
</script>

<button on:click={() => $count++}>
  count is {$count}
</button>
```

<br />

## 📚 ロードマップ

以下の機能やサポートを順次追加していく予定です。

- [ ] SSR ハイドレーション時のエラー回避方法の検証とドキュメント化
- [ ] テストコードの拡充
- [x] `@gn8/alien-signals-svelte` の実装
- [x] Astro フレームワークの使用例作成

<br />

## 💡 インスピレーション

このプロジェクトは以下の素晴らしいライブラリからインスピレーションを得ています。

### [Nanostores](https://github.com/nanostores/nanostores)

Astro で Nanostores を使い始めて以来、その使いやすさにとても魅力を感じてきました。alien-signals の登場を知ったとき、 Nanostores のような使い勝手で alien-signals のリアクティビティを流用したいと考え、このライブラリを開発しました。

Nanostores の優れた実装アプローチのおかげで、各フレームワークへの対応を迅速に進めることができました。コードの構造や設計パターンの多くは、Nanostores から学ばせていただいた知見を基にしています。

このプロジェクトを始めるきっかけと知識を与えてくれた Nanostores チームに深く感謝いたします。

<br />

## 🎉 感謝

### [alien-signals](https://github.com/stackblitz/alien-signals)

このライブラリの大部分は、alien-signals の強力な機能に支えられています。alien-signals の開発者の皆様に感謝申し上げます。
