import * as React from "react"

import { UseIsInViewProps } from "./types"

export const useIsInView = ({ ref, threshold, rootMargin }: UseIsInViewProps): boolean => {
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsInView(entry.isIntersecting)
    }, {
      threshold,
      rootMargin
    })

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, rootMargin, threshold])
  
  return isInView
}
