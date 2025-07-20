<script setup lang="ts">
import { useSignal } from '@gn8/alien-signals-vue';
import { signal } from 'alien-signals';

/**
 * Count signal.
 */
const countSignal = signal(0);

/**
 * Count vue signal.
 */
const count = useSignal(countSignal);
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img class="logo vue" alt="Vue logo" src="/vue.svg" />
    </a>
  </div>
  <h1>Vue</h1>
  <div class="card">
    <button @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>src/App.vue</code>
      and save to test HMR
    </p>
  </div>
  <p class="read-the-docs">Click on the Vue logo to learn more</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
