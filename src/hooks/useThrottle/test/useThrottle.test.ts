import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useThrottle } from '..';

describe('useThrottle', () => {

  it('should throttle the event', () => {

    vi.mock('toju-basic-utils', () => ({
      throttle: vi.fn().mockImplementation((fn) => fn),
    }));
    
    const mockCallback = vi.fn();
    const { result } = renderHook(() => useThrottle(mockCallback, 1000));

    act(() => {
      result.current('test argument');
    });

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith('test argument');
  })

})
