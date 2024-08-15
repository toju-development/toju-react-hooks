import { renderHook } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';

import { useMediaQuery } from '../';

describe('useMediaQuery', () => {
  beforeAll(() => {
    // Mocking matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(min-width: 600px)',
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });
  });

  it('should return true if the query matches', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'));
    expect(result.current).toBe(true);
  });

  it('should return false if the query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1200px)'));
    expect(result.current).toBe(false);
  });
});
