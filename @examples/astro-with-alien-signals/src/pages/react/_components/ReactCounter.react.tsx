/** @jsxImportSource react */

import { useSignal } from '@gn8/alien-signals-react';
import { $counter } from '../../_signals/counter';

/**
 * React Counter component.
 *
 * @jsx
 */
export default function ReactCounter() {
  const [count, setCount] = useSignal($counter);

  return (
    <button onClick={() => setCount(count + 1)}>
      <span suppressHydrationWarning>count is {count}</span>
    </button>
  );
}
