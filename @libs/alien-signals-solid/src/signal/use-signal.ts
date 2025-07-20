import { effect, signal } from 'alien-signals';
import { onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';

/**
 * Represents a writable signal type. This is the return type of the signal() function.
 *
 * @template T The type of the signal value.
 */
type WritableSignal<T> = ReturnType<typeof signal<T>>;

/**
 * Represents a value or updater function that can be used to set a signal's value.\
 * Can be either a direct value or a function that receives the current value and returns a new value.
 *
 * @template T The type of the signal value.
 */
type SignalSetterValue<T> = T | ((oldVal: T) => T);

/**
 * Internal helper function to get the current value of a signal.
 *
 * @template T The type of the signal value.
 *
 * @param   signal The signal to get the value from.
 *
 * @returns        The current value of the signal.
 */
export function useSignalGetter<T>(signal: WritableSignal<T>) {
  const [state, setState] = createStore({
    value: signal(),
  });

  const unsubscribe = effect(() => {
    setState('value', signal());
  });

  onCleanup(() => unsubscribe());

  // eslint-disable-next-line jsdoc/require-jsdoc
  return () => state.value;
}

/**
 * Internal helper function to update a signal's value.
 *
 * @template T The type of the signal value.
 *
 * @param   signal The signal to update.
 *
 * @returns        A callback function that can be used to update the signal's value.
 */
export function useSignalSetter<T>(signal: WritableSignal<T>) {
  // eslint-disable-next-line jsdoc/require-jsdoc
  return (value: SignalSetterValue<T>) =>
    typeof value === 'function'
      ? signal((value as (oldVal: T) => T)(signal()))
      : signal(value);
}

/**
 * Solid hook returning `[value, setValue]` for a given Alien Signal.
 *
 * @example
 *
 * ```ts
 * import { useSignal } from '@gn8/alien-signals-solid';
 * import { signal } from 'alien-signals';
 *
 * const countSignal = signal(0);
 *
 * function Counter() {
 *   const [count, setCount] = useSignal(countSignal);
 *
 *   return (
 *     <button onClick={() => setCount(count + 1)}>
 *       {count}
 *     </button>
 *   );
 * }
 * ```
 *
 * @template T The type of the signal value.
 *
 * @param   signal The signal to read/write.
 *
 * @returns        A tuple [currentValue, setValue].
 */
export function useSignal<T>(signal: WritableSignal<T>) {
  return [useSignalGetter(signal), useSignalSetter(signal)] as const;
}
