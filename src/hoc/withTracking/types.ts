export interface TrackingOptions {
  trackOnMount?: boolean;
  trackOnUnmount?: boolean;
  trackOnClick?: boolean;
  trackOnMouseEnter?: boolean;
  trackOnInView?: boolean;
  additionalData?: Record<string, unknown>;
}

export type EventName = 'trackOnMount' | 'trackOnUnmount' | 'trackOnClick' | 'trackOnMouseEnter' | 'trackOnInView';

export type TrackEventFunction = (eventName: EventName, data: Record<string, unknown>) => void;
