import { effect, signal } from 'alien-signals';
// eslint-disable-next-line import/no-duplicates
import { onDestroy } from 'svelte';
// eslint-disable-next-line import/no-duplicates
import { writable, type Writable } from 'svelte/store';

/**
 * Represents a writable signal type.
 *
 * @template T The type of the signal value.
 */
type WritableSignal<T> = ReturnType<typeof signal<T>>;

/**
 * Svelte hook that returns a writable store for a given alien-signal.
 *
 * @example
 *
 * ```svelte
 * <script>
 *   import { useSignal } from '@gn8/alien-signals-svelte';
 *   import { signal } from 'alien-signals';
 *
 *   const countSignal = signal(0);
 *   const count = useSignal(countSignal);
 * </script>
 *
 * <button on:click={() => $count++}>
 *   count is {$count}
 * </button>
 * ```
 *
 * @template T The type of the signal value.
 *
 * @param   signal The signal to read/write.
 *
 * @returns        A Svelte writable store that syncs with the alien-signal.
 */
export function useSignal<T>(signal: WritableSignal<T>): Writable<T> {
  const store = writable<T>(signal());

  const unsubscribe = effect(() => {
    store.set(signal());
  });

  const storeUnsubscribe = store.subscribe((value) => {
    signal(value);
  });

  onDestroy(() => {
    unsubscribe();
    storeUnsubscribe();
  });

  return store;
}
