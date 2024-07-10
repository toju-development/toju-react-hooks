import { act,renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useEvent } from '..';

describe('useEvent', () => {
  it('should call the event handler with the correct arguments', () => {
    const mockCallback = vi.fn();
    const { result } = renderHook(() => useEvent(mockCallback));

    act(() => {
      result.current('test argument');
    });

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith('test argument');
  });

  it('should memorize the hundler', () => {
    const mockCallback = vi.fn();
    const { result, rerender } = renderHook(() => useEvent(mockCallback));

    const eventHandlerOne = result.current;
    rerender();
    const eventHandlerTwo = result.current;

    expect(eventHandlerOne).toBe(eventHandlerTwo);
    expect(eventHandlerOne).toStrictEqual(eventHandlerTwo);
   });
});
