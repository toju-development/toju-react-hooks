import { fireEvent, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useWindowsResize } from '..';

describe('useWindowsResize', () => {

  it('should return initial window size', () => {
    const { result } = renderHook(() => useWindowsResize());

    expect(result.current.width).toBe(window.innerWidth);
    expect(result.current.height).toBe(window.innerHeight);

  });

  it('should update size on window resize', () => {
    const { result } = renderHook(() => useWindowsResize());

    window.innerWidth = 500;
    window.innerHeight = 500;
    fireEvent.resize(window);

    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);
  });

  it('should add and remove resize event listener', () => {
    vi.spyOn(window, 'addEventListener').mockImplementation(() => {});
    vi.spyOn(window, 'removeEventListener').mockImplementation(() => {});

    const { unmount } = renderHook(() => useWindowsResize());

    expect(window.addEventListener).toHaveBeenCalledWith('resize', expect.any(Function));

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
