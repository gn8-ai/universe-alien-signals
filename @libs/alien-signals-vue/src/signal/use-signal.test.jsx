/// <reference lib="dom" />

import { render } from '@testing-library/vue';
import { signal } from 'alien-signals';
import { expect, test } from 'bun:test';
import { defineComponent, nextTick, ref } from 'vue';
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
  const StringComponent = defineComponent({
    setup() {
      renders++;
      const string = useSignal(stringSignal);
      // eslint-disable-next-line jsdoc/require-jsdoc
      return () => <div data-testid={stringComponentId}>{string.value}</div>;
    },
  });

  // Define number signal component
  const numberSignal = signal(0);
  const numberComponentId = `${testId}-number`;
  const NumberComponent = defineComponent({
    setup() {
      renders++;
      const number = useSignal(numberSignal);
      // eslint-disable-next-line jsdoc/require-jsdoc
      return () => <div data-testid={numberComponentId}>{number.value}</div>;
    },
  });

  // Define wrapper component
  const wrapperDisplayTriggerId = `${testId}-wrapper-display-trigger`;
  const Wrapper = defineComponent({
    setup() {
      const show = ref(true);

      // eslint-disable-next-line jsdoc/require-jsdoc
      return () => (
        <div data-testid="test1">
          <button
            data-testid={wrapperDisplayTriggerId}
            onClick={() => (show.value = !show.value)}
          />
          {show.value && <StringComponent />}
          {show.value && <NumberComponent />}
        </div>
      );
    },
  });

  // Render the wrapper component
  const screen = render(() => <Wrapper />);

  // Verify initial signal values
  expect(screen.getByTestId(stringComponentId).textContent).toBe('a');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('0');
  expect(renders).toBe(2);

  // Update string signal value
  stringSignal('b');
  await nextTick();

  // Verify updated string signal value
  expect(renders).toBe(2);
  expect(screen.getByTestId(stringComponentId).textContent).toBe('b');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('0');

  // Update number signal value
  numberSignal(1);
  await nextTick();

  // Verify updated number signal value
  expect(renders).toBe(2);
  expect(screen.getByTestId(stringComponentId).textContent).toBe('b');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('1');

  // Unmount components
  screen.getByTestId(wrapperDisplayTriggerId).click();
  await nextTick();
  // Verify components are unmounted
  expect(screen.queryByTestId(stringComponentId)).toBeNull();
  expect(screen.queryByTestId(numberComponentId)).toBeNull();
  expect(renders).toBe(2);

  // Update signal values while unmounted
  stringSignal('c');
  numberSignal(2);
  await nextTick();

  // Verify signal values remain unchanged while unmounted
  expect(screen.queryByTestId(stringComponentId)).toBeNull();
  expect(screen.queryByTestId(numberComponentId)).toBeNull();
  expect(renders).toBe(2);

  // Remount components
  screen.getByTestId(wrapperDisplayTriggerId).click();
  await nextTick();

  // Verify signal values after remounting
  expect(screen.getByTestId(stringComponentId).textContent).toBe('c');
  expect(screen.getByTestId(numberComponentId).textContent).toBe('2');
  expect(renders).toBe(4);
});
