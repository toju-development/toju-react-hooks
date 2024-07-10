import * as React from 'react';
import { AnyFunction } from 'toju-basic-utils';

// Custom hook to memorize event handlers
export const useEvent = <T extends AnyFunction>(callback: T) => {
  const callbackRef = React.useRef<AnyFunction>(() => { })

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return React.useCallback((...args: Parameters<AnyFunction>) => callbackRef.current(...args), [])
}

/*
  coonst onClick = useEvent(() => {
    console.log('click');
  }
*/

