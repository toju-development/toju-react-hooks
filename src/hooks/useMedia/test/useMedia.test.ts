import { renderHook } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { useMedia } from '../';
import { queries } from '../types';

describe('useMedia', () => {
  beforeAll(() => {
    // Mocking matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === queries.Mobile || query === queries.Tablet,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });
  });

  it('should return correct media query matches', () => {
    const { result } = renderHook(() => useMedia());

    expect(result.current.isMobile).toBe(true);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);
    expect(result.current.isBigDesktop).toBe(false);
    expect(result.current.isLessThanDesktop).toBe(false);
    expect(result.current.isMoreThanMobile).toBe(false);
  });
});
