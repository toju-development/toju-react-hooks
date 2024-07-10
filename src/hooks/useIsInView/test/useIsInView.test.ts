
import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { useIsInView } from '../';

const intersectionObserverMock = () => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
});
// Mocking IntersectionObserver
window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock);


describe('useIsInView hook', () => {
  
  it('should return false when element is in view', () => {
    const mockRef = { current: document.createElement('div') };

    const { result } = renderHook(() => useIsInView({ ref: mockRef, threshold: 0.1, rootMargin: '0px' }));

    expect(result.current).toBe(false);
  });
});
