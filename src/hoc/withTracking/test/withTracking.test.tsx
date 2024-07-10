import { render, screen } from '@testing-library/react';
import { describe, it,vi } from 'vitest';

import { withTracking } from '../withTracking';

const intersectionObserverMock = () => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
});

window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock);

const customTrackEvent = vi.fn();
const MyMockComponent = () => <div>MyMockComponent</div>;

describe('withTracking', () => {

  it ('should render the wrapped component', () => {
    const Test = withTracking(MyMockComponent, customTrackEvent, {
      trackOnMount: false,
      trackOnUnmount: false,
      trackOnClick: false,
      trackOnMouseEnter: false,
      trackOnInView: true,
      additionalData: { eventType: 'mock data' }
    });

    render(<Test />);
    screen.getByText('MyMockComponent');
  })

})
