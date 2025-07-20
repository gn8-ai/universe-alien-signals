<script>
  import { useSignal } from './use-signal';

  export let signal;
  
  // React to signal prop changes
  $: count = useSignal(signal);
  
  function handleClick() {
    count.value++;
  }
</script>

<div>Count: {$count}</div>

<button onclick={handleClick}>
  Increment
</button>
