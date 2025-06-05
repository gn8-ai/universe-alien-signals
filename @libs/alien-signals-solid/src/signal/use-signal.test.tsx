/// <reference lib="dom" />

import { render } from '@solidjs/testing-library';
import { signal } from 'alien-signals';
import { expect, test } from 'bun:test';
import { createSignal, Show } from 'solid-js';
import { useSignal } from './use-signal';

/**
 * Tests that the `useSignal` hook can be used.
 */
test('Renders simple signal', () => {
  const testId = crypto.randomUUID();

  let renders = 0;

  // Define string signal component
  const stringSignal = signal('a');
  const stringComponentId = `${testId}-string`;
  function StringComponent() {
    renders += 1;
    const [string] = useSignal(stringSignal);
    return <div data-testid={stringComponentId}>{string()}</div>;
  }

  // Define number signal component
  const numberSignal = signal(0);
  const numberComponentId = `${testId}-number`;
  function NumberComponent() {
    renders += 1;
    const [number] = useSignal(numberSignal);
    return <div data-testid={numberComponentId}>{number()}</div>;
  }

  // Define wrapper component
  const wrapperDisplayTriggerId = `${testId}-wrapper-display-trigger`;
  function Wrapper() {
    const [show, setShow] = createSignal(true);
    return (
      <div data-testid="test1">
        <button
          data-testid={wrapperDisplayTriggerId}
          onClick={() => setShow(!show())}
        />
        <Show when={show()}>
          <StringComponent />
        </Show>
        <Show when={show()}>
          <NumberComponent />
        </Show>
      </div>
    );
  }

  // Render the wrapper component
  const screen = render(() => <Wrapper />);

  // Verify initial signal values
  expect(screen.getByTestId(stringComponentId).textContent).toBe('a');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('0');
  expect(renders).toBe(2);

  // Update string signal value
  stringSignal('b');

  // Verify updated string signal value
  expect(renders).toBe(2);
  expect(screen.getByTestId(stringComponentId).textContent).toBe('b');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('0');

  // Update number signal value
  numberSignal(1);

  // Verify updated number signal value
  expect(renders).toBe(2);
  expect(screen.getByTestId(stringComponentId).textContent).toBe('b');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('1');

  // Unmount components
  screen.getByTestId(wrapperDisplayTriggerId).click();

  // Verify components are unmounted
  expect(screen.queryByTestId(stringComponentId)).toBeNull();
  expect(screen.queryByTestId(numberComponentId)).toBeNull();
  expect(renders).toBe(2);

  // Update signal values while unmounted
  stringSignal('c');
  numberSignal(2);

  // Verify signal values remain unchanged while unmounted
  expect(screen.queryByTestId(stringComponentId)).toBeNull();
  expect(screen.queryByTestId(numberComponentId)).toBeNull();
  expect(renders).toBe(2);

  // Remount components
  screen.getByTestId(wrapperDisplayTriggerId).click();

  // Verify signal values after remounting
  expect(screen.getByTestId(stringComponentId).textContent).toBe('c');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('2');
  expect(renders).toBe(4);
});
