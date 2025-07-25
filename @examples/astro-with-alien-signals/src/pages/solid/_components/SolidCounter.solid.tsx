/** @jsxImportSource solid-js */

import { useSignal } from '@gn8/alien-signals-solid';
import { counterSignal } from '../../_signals/counter';

/**
 * Solid Counter component.
 *
 * @jsx
 */
export default function SolidCounter() {
  const [count, setCount] = useSignal(counterSignal);

  return (
    <button onClick={() => setCount(count() + 1)}>
      <span>count is {count()}</span>
    </button>
  );
}
