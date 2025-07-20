import { effect, signal } from 'alien-signals';
import {
  computed,
  getCurrentScope,
  onScopeDispose,
  shallowRef,
  type ShallowRef,
} from 'vue';

/**
 * Represents a writable signal type. This is the return type of the signal() function.
 *
 * @template T The type of the signal value
 */
type WritableSignal<T> = ReturnType<typeof signal<T>>;

/**
 * Vue hook returning a reactive reference for a given Alien Signal.
 *
 * @example
 *
 * ```vue
 * <script setup>
 *  import { useSignal } from '@gn8/alien-signals-vue';
 *  import { signal } from 'alien-signals';
 *
 *  const countSignal = signal(0);
 *
 *  const count = useSignal(countSignal);
 * </script>
 *
 * <template>
 *   <button @click="count++">{{ count }}</button>
 * </template>
 *
 * ```
 *
 * @template T The type of the signal value.
 *
 * @param   signal The signal to read/write.
 *
 * @returns        A reactive reference to the current value.
 */
export function useSignal<T>(signal: WritableSignal<T>) {
  const state = shallowRef(signal()) as ShallowRef<T>;

  const unsubscribe = effect(() => {
    state.value = signal();
  });

  // This is to support non-component scopes
  if (getCurrentScope()) {
    onScopeDispose(unsubscribe);
  }

  // Return a computed reference to the signal value
  return computed({
    get: () => state.value,
    set: (value) => signal(value),
  });
}
