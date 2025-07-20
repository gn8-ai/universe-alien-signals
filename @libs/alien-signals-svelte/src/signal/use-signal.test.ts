import { signal } from 'alien-signals';
import { afterEach, beforeEach, describe, expect, it } from 'bun:test';
import { flushSync, mount, unmount } from 'svelte';
import TestComponent from './use-signal.test.svelte';

/**
 * Type for the component instance returned by mount.
 */
type ComponentInstance = ReturnType<typeof mount>;

/**
 * Gets an element by its data-testid attribute.
 *
 * @param   container - The container element to search within
 * @param   testId    - The test ID to search for
 *
 * @returns           The found element
 *
 * @throws            If element is not found
 */
function getByTestId(container: HTMLElement, testId: string): HTMLElement {
  const element = container.querySelector(`[data-testid="${testId}"]`);
  if (!element) {
    throw new Error(`Element with data-testid="${testId}" not found`);
  }
  return element as HTMLElement;
}

/**
 * Test suite for the useSignal hook. Verifies the integration between alien-signals and Svelte's reactivity system.
 */
describe('useSignal', () => {
  let container: HTMLDivElement;
  let component: ComponentInstance | null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    component = null;
  });

  afterEach(async () => {
    if (component) await unmount(component);
    document.body.removeChild(container);
  });

  it('should bind alien-signal to Svelte reactivity', () => {
    const countSignal = signal(0);

    component = mount(TestComponent, {
      target: container,
      props: { signal: countSignal },
    });

    // Initial value
    const countDiv = getByTestId(container, 'count');
    expect(countDiv.textContent).toBe('Count: 0');

    // Update via component button (store update)
    const button = getByTestId(
      container,
      'increment-button',
    ) as HTMLButtonElement;
    button.click();
    flushSync();

    expect(countDiv.textContent).toBe('Count: 1');

    // Verify alien-signal was updated
    expect(countSignal()).toBe(1);
  });

  it('should update component when signal changes externally', () => {
    const countSignal = signal(0);

    component = mount(TestComponent, {
      target: container,
      props: { signal: countSignal },
    });

    const countDiv = getByTestId(container, 'count');
    expect(countDiv.textContent).toBe('Count: 0');

    // Update signal externally
    countSignal(5);
    flushSync();

    expect(countDiv.textContent).toBe('Count: 5');
  });

  it('should handle multiple signals', async () => {
    const countSignal1 = signal(10);
    const countSignal2 = signal(20);

    component = mount(TestComponent, {
      target: container,
      props: { signal: countSignal1 },
    });

    let countDiv = getByTestId(container, 'count');
    expect(countDiv.textContent).toBe('Count: 10');

    // Unmount and remount with different signal
    await unmount(component);

    component = mount(TestComponent, {
      target: container,
      props: { signal: countSignal2 },
    });

    // Re-query the element after remounting
    countDiv = getByTestId(container, 'count');
    expect(countDiv.textContent).toBe('Count: 20');
  });
});
