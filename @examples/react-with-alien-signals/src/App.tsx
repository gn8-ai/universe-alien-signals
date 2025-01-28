import { useSignal } from '@gn8/alien-signals-react';
import { signal } from 'alien-signals';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';

/**
 * Count signal.
 */
const $count = signal(0);

/**
 * Top page component.
 *
 * @returns React Node.
 */
export default function App() {
  const [count, setCount] = useSignal($count);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
