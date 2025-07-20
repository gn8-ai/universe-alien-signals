import './App.css';

import { useSignal } from '@gn8/alien-signals-solid';
import { signal } from 'alien-signals';

/**
 * Count signal.
 */
const countSignal = signal(0);

/**
 * Top page component.
 *
 * @jsx
 */
export default function App() {
  const [count, setCount] = useSignal(countSignal);

  return (
    <>
      <div>
        <a href="https://solidjs.com" target="_blank">
          <img class="logo solid" alt="Solid logo" src="/solid.svg" />
        </a>
      </div>
      <h1>Solid</h1>
      <div class="card">
        <button onClick={() => setCount(count() + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">Click on the Solid logo to learn more</p>
    </>
  );
}
