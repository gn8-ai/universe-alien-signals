<script lang="ts">
  import { useSignal } from '@gn8/alien-signals-svelte';
  import { counterSignal } from '../../_signals/counter';

  const countSignal = useSignal(counterSignal);
</script>

<button on:click={() => $countSignal++}>
  <span>count is {$countSignal}</span>
</button>

