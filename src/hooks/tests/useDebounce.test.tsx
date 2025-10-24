import { describe, it, expect, vi } from "vitest";
import { useDebounce } from "../useDebounce";
import { renderHook } from "@testing-library/react";

describe('useDebounce', () => {
  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce<string>('test', 1000));
    expect(result.current).toBe('test');
  });

  it('should return the debounced value after the delay', async () => {
    // Use fake timers to control time
    vi.useFakeTimers();

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce<string>(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 }
      }
    );

    // Initial value should be set immediately
    expect(result.current).toBe('initial');

    // Change the value
    rerender({ value: 'updated', delay: 500 });

    // Value should NOT change immediately
    expect(result.current).toBe('initial');

    // Advance time by less than the delay
    vi.advanceTimersByTime(300);
    expect(result.current).toBe('initial');

    // Advance time to complete the delay and run pending timers
    await vi.advanceTimersByTimeAsync(200);
    
    // Now the value should be updated
    expect(result.current).toBe('updated');

    vi.useRealTimers();
  });

  it('should reset the timer when value changes', async () => {
    vi.useFakeTimers();

    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce<string>(value, delay),
      {
        initialProps: { value: 'first', delay: 500 }
      }
    );

    expect(result.current).toBe('first');

    // Change value
    rerender({ value: 'second', delay: 500 });
    vi.advanceTimersByTime(300);
    
    // Change value again before delay expires
    rerender({ value: 'third', delay: 500 });
    
    // After original delay, value should still be 'first'
    vi.advanceTimersByTime(200);
    expect(result.current).toBe('first');

    // After the new full delay, value should be 'third' (not 'second')
    await vi.advanceTimersByTimeAsync(300);
    expect(result.current).toBe('third');

    vi.useRealTimers();
  });
});