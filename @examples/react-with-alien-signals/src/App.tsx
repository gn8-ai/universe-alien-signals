import './App.css';

import { useSignal } from '@gn8/alien-signals-react';
import { signal } from 'alien-signals';

/**
 * Count signal.
 */
const $count = signal(0);

/**
 * Top page component.
 *
 * @jsx
 */
export default function App() {
  const [count, setCount] = useSignal($count);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img className="logo react" alt="React logo" src="/react.svg" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the React logo to learn more</p>
    </>
  );
}
