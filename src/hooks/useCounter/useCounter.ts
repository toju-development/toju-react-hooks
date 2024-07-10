import * as React from 'react';

import { UseCounterProps, UseCounterReturn } from './types';

export const useCounter = ({initialValue = 0}: UseCounterProps): UseCounterReturn => {
  const [value, setValue] = React.useState<number>(initialValue);

  const reset = () => setValue(initialValue);
  const increment = (value: number = 1) => setValue((prev) => prev + value);
  const decrement = (value: number = 1) => setValue((prev) => prev - value);

  return {
    value,
    reset,
    increment,
    decrement,
  };
}

