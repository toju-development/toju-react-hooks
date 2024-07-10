import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useCounter } from '../';

describe('useCounter', () => {

  it('should use counter with initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));
    expect(result.current.value).toBe(10);
  });

  it('should increment counter value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0 }));
    act(() => {
      result.current.increment();
    });
    expect(result.current.value).toBe(1);
  });

  it('should decrement counter value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 0 }));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.value).toBe(-1);
  });

  it('should reset counter to initial value', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));
    act(() => {
      result.current.increment(10);
    });
    act(() => {
      result.current.reset();
    });
    expect(result.current.value).toBe(5);
  });

});
