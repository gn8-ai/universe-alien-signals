<script lang="ts">
  import { signal as createSignal } from 'alien-signals';
  import { useSignal } from './use-signal';

  interface Props {
    signal: ReturnType<typeof createSignal<number>>;
  }

  let { signal }: Props = $props();
  
  const count = useSignal(signal);
  
  function handleClick() {
    count.update(n => n + 1);
  }
</script>

<div data-testid="count">Count: {$count}</div>

<button data-testid="increment-button" onclick={handleClick}>
  Increment
</button>
