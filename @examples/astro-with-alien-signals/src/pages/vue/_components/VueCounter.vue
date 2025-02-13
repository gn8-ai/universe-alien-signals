<script setup lang="ts">
import { $counter } from '../../_signals/counter';
import { useSignal } from '@gn8/alien-signals-vue';

const count = useSignal($counter);
</script>

<template>
  <button @click="count++">
    <span data-allow-mismatch>count is {{ count }}</span>
  </button>
</template>
