import * as React from 'react';
 
export const useMediaQuery = (query: string): boolean => {

  const getMatches = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  }, [query]);

  const [matches, setMatches] = React.useState<boolean>(getMatches)

  const handleChange = React.useCallback(() => {
    setMatches(getMatches());
  }, [getMatches]);

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query)

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
