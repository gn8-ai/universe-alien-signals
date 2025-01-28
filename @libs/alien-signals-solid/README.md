# Alien Signals Solid

<!-- ![License](https://img.shields.io/github/license/gn8-ai/alien-signals-framework-integrations) -->
<!-- ![npm](https://img.shields.io/npm/v/alien-signals-framework-integrations) -->

[![English Documents](https://img.shields.io/badge/Documents-English-blue)](README.md)

A library that enables the use of the [Alien Signals](https://github.com/stackblitz/alien-signals) state management system in Solid.

> [!WARNING]
> While it should work fine for general use, it hasn't been fully tested. Please use with caution.

<br />

## 🛸 Features

- **Simple**: Easy to implement with minimal code
- **Flexible**: Reuse a single signal across multiple frameworks
- **Type Safe**: Full TypeScript support
- **Best Reactivity**: Leverages Alien Signals' efficient signal management
- **Tree Shakable**: Bundle only the code you need

<br />

## 🔌 Status

| Framework | Status | SSR Support | Repo                         |
| --------- | ------ | ----------- | ---------------------------- |
| React     | ✅     | ⚠️          | [🔗](../alien-signals-react) |
| Solid     | ✅     | ⚠️          | [🔗](../alien-signals-solid) |
| Vue       | ✅     | ⚠️          | [🔗](../alien-signals-vue)   |
| Svelte    | 🛑     | ⚠️          | ⌛️                           |

- ✅: Implemented
- 🛑: Not Implemented
- ⚠️: Not Verified
- ⌛️: Coming Soon

<br />

## 💻 Guide

### Installation

```sh
npm install alien-signals @gn8/alien-signals-solid
```

### Sample Code

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

### Examples

- [Solid + Vite](../../@examples/solid-with-alien-signals)

<br />

## 📚 Roadmap

The following features and support will be added sequentially:

- [ ] SSR verification and support
- [ ] Enhancement of test coverage
- [ ] Creation of Astro framework usage examples

<br />

## 💡 Inspiration

This project is inspired by the following amazing library:

### [Nanostores](https://github.com/nanostores/nanostores)

I have been a long-time user of Nanostores with Astro and was impressed by its ease of use. When I learned about Alien Signals, I wanted to utilize its reactivity with the same user experience as Nanostores, which led to the development of this library.

Thanks to Nanostores' excellent implementation approach, we were able to quickly progress with support for various frameworks. Much of our code structure and design patterns are based on insights learned from Nanostores.

We deeply thank the Nanostores team for providing the inspiration and knowledge to start this project.

<br />

## 🎉 Acknowledgments

### [Alien Signals](https://github.com/stackblitz/alien-signals)

Most of this library's power comes from Alien Signals.
We thank the developers of Alien Signals.
