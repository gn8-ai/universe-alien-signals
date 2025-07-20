<script setup lang="ts">
import { useSignal } from '@gn8/alien-signals-vue';
import { counterSignal } from '../../_signals/counter';

const counter = useSignal(counterSignal);
</script>

<template>
  <button @click="counter++">
    <span data-allow-mismatch>count is {{ counter }}</span>
  </button>
</template>
