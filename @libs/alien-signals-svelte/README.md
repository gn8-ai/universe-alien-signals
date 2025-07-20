# `alien-signals` for Svelte

[![npm](https://img.shields.io/npm/v/@gn8/alien-signals-svelte)](https://www.npmjs.com/package/@gn8/alien-signals-svelte)
[![license](https://img.shields.io/github/license/gn8-ai/universe-alien-signals)](https://github.com/gn8-ai/universe-alien-signals/blob/main/LICENSE.md)
[![japanese documents](https://img.shields.io/badge/documents-Japanese-blue)](README.ja.md)

A library that enables the use of the [alien-signals](https://github.com/stackblitz/alien-signals) state management system in Svelte 5+ with runes.

<br />

## 🛸 Features

- **Simple**: Easy to implement with minimal code
- **Flexible**: Reuse a single signal across multiple frameworks
- **Type Safe**: Full TypeScript support
- **Best Reactivity**: Leverages alien-signals efficient signal management
- **Tree Shakable**: Bundle only the code you need
- **Runes Support**: Native integration with Svelte 5's runes system

<br />

## 🔌 Status

| Framework | Status | SSR Support | Repo                          |
| --------- | ------ | ----------- | ----------------------------- |
| React     | ✅     | 🔼          | [🔗](../alien-signals-react)  |
| Solid     | ✅     | 🔼          | [🔗](../alien-signals-solid)  |
| Vue       | ✅     | 🔼          | [🔗](../alien-signals-vue)    |
| Svelte    | ✅     | 🔼          | [🔗](../alien-signals-svelte) |

- ✅: Implemented
- 🔼: Avoidable
- ⚠️: Unverified
- ⌛️: Coming Soon

<br />

## 💻 Guide

### Installation

```sh
npm install alien-signals @gn8/alien-signals-svelte
```

### Sample Code

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

### Examples

- [Svelte](../../@examples/svelte-with-alien-signals) (Coming Soon)

<br />

## 📚 Roadmap

The following features and support will be added sequentially:

- [ ] Documentation and solutions for handling SSR hydration errors
- [ ] Enhancement of test coverage
- [ ] Creation of Svelte 5 usage examples
- [ ] Integration with SvelteKit

<br />

## 🙏 Acknowledgments

The development of this library was influenced by:

- [alien-signals](https://github.com/stackblitz/alien-signals) - The core signal library
- [Svelte](https://svelte.dev/) - The progressive JavaScript framework
