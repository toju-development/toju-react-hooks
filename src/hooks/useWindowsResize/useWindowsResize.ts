import * as React from 'react';

import { UseWindowsResizeReturn } from './types';

export const useWindowsResize = (): UseWindowsResizeReturn => {
  const [windowsResize, setWindowsResize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowsResize({
      width: window.innerWidth,
      height: window.innerHeight,
    }); 
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowsResize.width,
    height: windowsResize.height,
  };
}
