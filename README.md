# Universe `alien-signals`

[![license](https://img.shields.io/github/license/gn8-ai/universe-alien-signals)](https://github.com/gn8-ai/universe-alien-signals/blob/main/LICENSE.md)
[![japanese documents](https://img.shields.io/badge/documents-Japanese-blue)](README.ja.md)

A library that enables simple use of the [alien-signals](https://github.com/stackblitz/alien-signals) state management system in modern frontend frameworks.

<br />

## 🛸 Features

- **Simple**: Easy to implement with minimal code
- **Flexible**: Reuse a single signal across multiple frameworks
- **Type Safe**: Full TypeScript support
- **Best Reactivity**: Leverages alien-signals efficient signal management
- **Tree Shakable**: Bundle only the code you need

<br />

## 🔌 Status

| Framework | Status | SSR Support | Usage         | Repo                               |
| --------- | ------ | ----------- | ------------- | ---------------------------------- |
| React     | ✅     | 🔼          | [🔗](#react)  | [🔗](./@libs/alien-signals-react)  |
| Solid     | ✅     | 🔼          | [🔗](#solid)  | [🔗](./@libs/alien-signals-solid)  |
| Vue       | ✅     | 🔼          | [🔗](#vue)    | [🔗](./@libs/alien-signals-vue)    |
| Svelte    | ✅     | 🔼          | [🔗](#svelte) | [🔗](./@libs/alien-signals-svelte) |

- ✅: Implemented
- 🔼: Avoidable
- ⚠️: Unverified
- ⌛️: Coming Soon

<br />

## 💻 Usage

### React

#### Installation

```sh
npm install alien-signals @gn8/alien-signals-react
```

#### Sample Code

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

#### Installation

```sh
npm install alien-signals @gn8/alien-signals-solid
```

#### Sample Code

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

#### Installation

```sh
npm install alien-signals @gn8/alien-signals-vue
```

#### Sample Code

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

#### Installation

```sh
npm install alien-signals @gn8/alien-signals-svelte
```

#### Sample Code

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

## 📚 Roadmap

The following features and support will be added sequentially:

- [ ] Documentation and solutions for handling SSR hydration errors
- [ ] Enhancement of test coverage
- [x] Implementation of `@gn8/alien-signals-svelte`
- [x] Creation of Astro framework usage examples

<br />

## 💡 Inspiration

This project is inspired by the following amazing library:

### [Nanostores](https://github.com/nanostores/nanostores)

I have been a long-time user of Nanostores with Astro and was impressed by its ease of use. When I learned about alien-signals, I wanted to utilize its reactivity with the same user experience as Nanostores, which led to the development of this library.

Thanks to Nanostores' excellent implementation approach, we were able to quickly progress with support for various frameworks. Much of our code structure and design patterns are based on insights learned from Nanostores.

We deeply thank the Nanostores team for providing the inspiration and knowledge to start this project.

<br />

## 🎉 Acknowledgments

### [alien-signals](https://github.com/stackblitz/alien-signals)

Most of this library's power comes from alien-signals.
We thank the developers of alien-signals.
