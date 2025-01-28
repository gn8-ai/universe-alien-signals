/// <reference lib="dom" />

import { act, render, screen } from '@testing-library/react';
import { signal } from 'alien-signals';
import { expect, test } from 'bun:test';
import { useState } from 'react';
import { useSignal } from './use-signal';

/**
 * Tests that the `useSignal` hook can be used.
 */
test('Renders simple signal', async () => {
  const testId = crypto.randomUUID();

  let renders = 0;

  // Define string signal component
  const stringSignal = signal('a');
  const stringComponentId = `${testId}-string`;
  function StringComponent() {
    renders += 1;
    const [string] = useSignal(stringSignal);
    return <div data-testid={stringComponentId}>{string}</div>;
  }

  // Define number signal component
  const numberSignal = signal(0);
  const numberComponentId = `${testId}-number`;
  function NumberComponent() {
    renders += 1;
    const [number] = useSignal(numberSignal);
    return <div data-testid={numberComponentId}>{number}</div>;
  }

  // Define wrapper component
  const wrapperDisplayTriggerId = `${testId}-wrapper-display-trigger`;
  function Wrapper() {
    const [show, setShow] = useState(true);
    return (
      <div>
        <button
          data-testid={wrapperDisplayTriggerId}
          onClick={() => setShow(!show)}
        />
        {show && <StringComponent />}
        {show && <NumberComponent />}
      </div>
    );
  }

  // Render the wrapper component
  render(<Wrapper />);

  // Verify initial signal values
  expect(screen.getByTestId(stringComponentId).textContent).toBe('a');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('0');
  expect(renders).toBe(2);

  // Update string signal value
  await act(() => {
    stringSignal('b');
  });

  // Verify updated string signal value
  expect(renders).toBe(4);
  expect(screen.getByTestId(stringComponentId).textContent).toBe('b');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('0');

  // Update number signal value
  await act(() => {
    numberSignal(1);
  });

  // Verify updated number signal value
  expect(renders).toBe(6);
  expect(screen.getByTestId(stringComponentId).textContent).toBe('b');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('1');

  // Unmount components
  await act(() => screen.getByTestId(wrapperDisplayTriggerId).click());

  // Verify components are unmounted
  expect(screen.queryByTestId(stringComponentId)).toBeNull();
  expect(screen.queryByTestId(numberComponentId)).toBeNull();
  expect(renders).toBe(6);

  // Update signal values while unmounted
  await act(() => {
    stringSignal('c');
    numberSignal(2);
  });

  // Verify signal values remain unchanged while unmounted
  expect(screen.queryByTestId(stringComponentId)).toBeNull();
  expect(screen.queryByTestId(numberComponentId)).toBeNull();
  expect(renders).toBe(6);

  // Remount components
  await act(() => screen.getByTestId(wrapperDisplayTriggerId).click());
  expect(screen.getByTestId(stringComponentId).textContent).toBe('c');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('2');
  expect(renders).toBe(8);
});
