import React from 'react'

import { withTracking } from './hoc/withTracking';
import { EventName, TrackEventFunction } from './hoc/withTracking/types';
import { useIsInView } from './hooks'

const customTrackEvent: TrackEventFunction = (eventName: EventName, data) => {
  // Tu lógica de seguimiento personalizada aquí
  console.log(`Custom tracking event: ${eventName}`, data);
};

const MyComponent: React.FC<{test: boolean}> = ({ test = true }) => {
  return <button>Click me {String(test)}</button>;
}; 

const Test =  withTracking<{test: boolean}>(MyComponent, customTrackEvent, {
  // trackOnMount: false,
  // trackOnUnmount: false,
  trackOnClick: true,
  trackOnMouseEnter: true,
  trackOnInView: true,
  additionalData: { eventType: 'buttonClick' }
});

const App = () => {
  const ref = React.useRef(null)
  const isInView = useIsInView({ref, threshold: 0.5, rootMargin: '0px'})
  console.log('isInView', isInView)
  return (
    <>
    <div style={{ height: '1000px', background: 'red'}}>App</div>
    <p ref={ref}>pepe</p>
    <Test test={false} />
    </>
  )
}

export default App
