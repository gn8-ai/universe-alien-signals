import { fireEvent, render } from '@testing-library/svelte';
import { signal } from 'alien-signals';
import { describe, expect, it } from 'bun:test';
import { tick } from 'svelte';
import TestComponent from './use-signal.test.svelte';

/**
 * Test suite for the useSignal hook. Verifies the integration between alien-signals and Svelte's reactivity system.
 */
describe('useSignal', () => {
  it('should bind alien-signal to Svelte reactivity', async () => {
    const countSignal = signal(0);
    const { getByText, getByRole } = render(TestComponent, {
      signal: countSignal,
    });

    // Initial value
    expect(getByText('Count: 0')).toBeInTheDocument();

    // Update via component button (store update)
    const button = getByRole('button');
    await fireEvent.click(button);

    // Wait for update
    await tick();
    expect(getByText('Count: 1')).toBeInTheDocument();

    // Verify alien-signal was updated
    expect(countSignal()).toBe(1);
  });

  it('should update component when signal changes externally', async () => {
    const countSignal = signal(0);
    const { getByText } = render(TestComponent, { signal: countSignal });

    expect(getByText('Count: 0')).toBeInTheDocument();

    // Update signal externally
    countSignal(5);
    await tick();

    expect(getByText('Count: 5')).toBeInTheDocument();
  });

  it('should handle multiple signals', async () => {
    const countSignal1 = signal(10);
    const countSignal2 = signal(20);

    const { getByText, rerender } = render(TestComponent, {
      signal: countSignal1,
    });
    expect(getByText('Count: 10')).toBeInTheDocument();

    // Switch to different signal
    await rerender({ signal: countSignal2 });
    expect(getByText('Count: 20')).toBeInTheDocument();
  });
});
