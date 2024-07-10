import { useEvent, useIsInView } from '@Src/hooks';
import React, { ComponentType, MouseEvent, useEffect } from 'react';
import { AnyFunction } from 'toju-basic-utils';

import { TrackEventFunction, TrackingOptions } from './types';

export const withTracking = <P extends object>(
  WrappedComponent: ComponentType<P>,
  trackEvent: TrackEventFunction,
  { 
    trackOnMount = true,
    trackOnUnmount = true,
    trackOnClick = true,
    trackOnMouseEnter = true,
    trackOnInView = true,
    additionalData = {}
  } : TrackingOptions
) => {
  const HOC: React.FC<P> = (props) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const hasMounted = React.useRef<boolean>(false);
    const hasTrackedInView = React.useRef<boolean>(false);

    const memorizedEvent: TrackEventFunction  = useEvent(trackEvent as AnyFunction);

    const isInView = useIsInView({ ref });

    useEffect(() => {
      // This run when the component mounts
      if (memorizedEvent && !hasMounted.current && trackOnMount) {
        memorizedEvent('trackOnMount', { component: WrappedComponent.name, ...additionalData });
        hasMounted.current = true;
      }
      // This run when the component unmounts
      return () => {
        if (memorizedEvent && trackOnUnmount) {
          memorizedEvent('trackOnUnmount', { component: WrappedComponent.name, ...additionalData });
          hasMounted.current = false;
        }
      };
    }, [memorizedEvent]);

    useEffect(() => {
      // This run when the component is in view
      if (memorizedEvent && isInView && !hasTrackedInView.current && trackOnInView) {
        memorizedEvent('trackOnInView', { component: WrappedComponent.name, ...additionalData });
        hasTrackedInView.current = true;
      }
    }, [isInView, memorizedEvent]);

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      if (memorizedEvent && trackOnClick) {
        memorizedEvent('trackOnClick', { component: WrappedComponent.name, event, ...additionalData });
      }
    };

    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
      if (memorizedEvent && trackOnMouseEnter) {
        memorizedEvent('trackOnMouseEnter', { component: WrappedComponent.name, event, ...additionalData });
      }
    };

    return (
      <div ref={ref} onClick={handleClick} onMouseEnter={handleMouseEnter}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return HOC;
};
