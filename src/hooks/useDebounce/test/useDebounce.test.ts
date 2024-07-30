import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useDebounce } from '..';

describe('useDebounce', () => {

  it('should debounce the event', () => {

    vi.mock('toju-basic-utils', () => ({
      debounce: vi.fn().mockImplementation((fn) => fn),
    }));
    
    const mockCallback = vi.fn();
    const { result } = renderHook(() => useDebounce(mockCallback, 1000));

    act(() => {
      result.current('test argument');
    });

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith('test argument');
  })

})
