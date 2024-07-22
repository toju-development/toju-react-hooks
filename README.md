# toju-react-hooks

toju-react-hooks library is a tool designed to facilitate React application development by providing a series of custom hooks. These hooks are designed to address common problems and frequent usage patterns in application development, allowing developers to manage state, side effects, context, and more, efficiently and with less boilerplate code. The library focuses on improving code readability, component reusability, and performance optimization, ensuring that React applications are more maintainable and scalable.

## Key features of toju-react-hooks include:


- View detection hook: useIsInView allows you to detect when an element is in the viewport, enabling you to perform actions such as lazy loading images or triggering animations only when elements are visible on the screen.
- Throttling hook: useThrottle helps manage performance by limiting the number of times a function is called over time, which is particularly useful for handling high-frequency events like scrolling or window resizing efficiently.
- Event handling hook: useEvent simplifies the process of adding and removing event listeners, ensuring that your components respond to user interactions and other events smoothly and without memory leaks.
Easy to use: Each hook is designed to be simple and intuitive, making it easy to integrate into any React project.
Whether you're building a complex web application or a straightforward React component, toju-react-hooks can help you create more responsive, performant, and maintainable code.

## Installation

```bash
npm install toju-react-hooks
```

## Hooks List

Function                                  | Description                         
------------------------------------------|-------------------------------         
[`useCounter(options)`](#usecounter)      | Manage numeric state with increment, decrement, and reset capabilities
[`useEvent(callback)`](#useevent)         | Memorize and optimize event handlers 
[`useIsInView(options)`](#useisinview)    | Determine if a referenced element is within the viewport
[`useThrottle(fn, delay)`](#usethrottle)  | Throttle a function execution to limit how often it can be called            
[`useWindowsResize()`](#usewindowsresize) | Track window resize events and provide the current window dimensions


## HOC List

Function                                                                | Description                         
------------------------------------------------------------------------|-------------------------------
[`withTracking(WrappedComponent, trackEvent, options)`](#withtracking)  | Enhance a component with automatic event tracking capabilities

## API

### `useCounter`

Custom hook for managing numeric state with increment, decrement, and reset capabilities.

#### Parameters

- `options`: Object with the following property:
  - `initialValue` (optional, default = 0): The initial value of the counter.

#### Returns

`UseCounterReturn`: An object containing:
- `value` (number): The current value of the counter.
- `reset` (function): Resets the counter to its initial value.
- `increment` (function): Increments the counter by a specified value (default is 1).
- `decrement` (function): Decrements the counter by a specified value (default is 1).

#### Example Usage

```typescript
const { value, reset, increment, decrement } = useCounter({ initialValue: 10 });

// Increment the counter
increment();

// Decrement the counter
decrement();

// Reset the counter to the initial value
reset();
```

### `useEvent`

Custom hook to memorize and optimize event handlers.

#### Parameters

- `callback`: Function to be memorized and called by the event handler.

#### Returns

- A memorized callback function that can be used as an event handler.

#### Example Usage

```typescript
const onClick = useEvent(() => {
  console.log('Clicked');
});

return <button onClick={onClick}>Click me</button>;
```

### `useIsInView`

Custom hook that determines if a referenced element is within the viewport using the Intersection Observer API.

#### Parameters

- `options`: Object with the following properties:
  - `ref` (React.RefObject): A React ref attached to the element you want to check for visibility.
  - `threshold` (number | number[], optional): A single number or an array of numbers indicating at what percentage of the target's visibility the observer's callback should be executed.
  - `rootMargin` (string, optional): A string representing the margin around the root. Allows the callback to execute even if the target is not in the viewport but within this margin.

#### Returns

- `isInView` (boolean): A boolean value indicating whether the referenced element is in the viewport.

#### Example Usage

```typescript
import React, { useRef } from 'react';
import { useIsInView } from './useIsInView';

const Component = () => {
  const ref = useRef(null);
  const isInView = useIsInView({ ref, threshold: 0.1 });

  return (
    <div ref={ref}>
      {isInView ? 'In view!' : 'Not in view!'}
    </div>
  );
};
```

### `useThrottle`

Custom hook to throttle a function execution, limiting how often it can be called.

#### Parameters

- `fn`: The function to be throttled.
- `delay`: The time (in milliseconds) to wait before the next function call can be executed.

#### Returns

- A throttled version of the passed function that respects the specified delay between calls.

#### Example Usage

```typescript
import React, { useState } from 'react';
import { useThrottle } from './useThrottle';

const ThrottledComponent = () => {
  const [count, setCount] = useState(0);
  const throttledIncrement = useThrottle(() => setCount(count + 1), 1000);

  return (
    <div>
      <p>{count}</p>
      <button onClick={throttledIncrement}>Increment</button>
    </div>
  );
};
```

### `useWindowsResize`

Custom hook to track window resize events and provide the current window dimensions.

#### Returns

`UseWindowsResizeReturn`: An object containing:
- `width` (number): The current width of the window.
- `height` (number): The current height of the window.

#### Example Usage

```typescript
import React from 'react';
import { useWindowsResize } from './useWindowsResize';

const Component = () => {
  const { width, height } = useWindowsResize();

  return (
    <div>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </div>
  );
};
```


### withTracking

Higher-order component (HOC) designed to enhance a component with tracking capabilities. It allows tracking events such as mounting, unmounting, clicking, mouse entering, and being in view.

#### Parameters

- `WrappedComponent (ComponentType<P>)`: The component to be enhanced with tracking functionality.
- `trackEvent (TrackEventFunction)`: Function to execute when tracking an event.
- `options (TrackingOptions)`: Configuration object for tracking behavior. Includes:
  - `trackOnMount (boolean, optional)`: If true, tracks when the component mounts.
  - `trackOnUnmount (boolean, optional)`: If true, tracks when the component unmounts.
  - `trackOnClick (boolean, optional)`: If true, tracks when the component is clicked.
  - `trackOnMouseEnter (boolean, optional)`: If true, tracks when the mouse enters the component.
  - `trackOnInView (boolean, optional)`: If true, tracks when the component is in view.
  - `additionalData (object, optional)`: Additional data to be sent with the tracking event.

#### Returns

`React.FC<P>`: A functional component that wraps the WrappedComponent with added tracking functionality.

#### Example Usage

```typescript
import React from 'react';
import { withTracking } from './withTracking';
import MyComponent from './MyComponent';

const trackEvent = (eventName, data) => {
  console.log(`Event: ${eventName}`, data);
};

const TrackingOptions = {
  trackOnMount: true,
  trackOnUnmount: true,
  trackOnClick: true,
  trackOnMouseEnter: true,
  trackOnInView: true,
  additionalData: { extraInfo: 'moreData' }
};

const TrackedMyComponent = withTracking(MyComponent, trackEvent, TrackingOptions);

const App = () => (
  <div>
    <TrackedMyComponent />
  </div>
);
```

## Contributions

Contributions are welcome. Please open an issue or pull request to suggest changes or improvements.

This README file provides an overview of the package, installation instructions, usage examples for each feature, instructions for running the tests and an invitation to contribute.
