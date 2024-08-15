export const queries = {
  Mobile: "(max-width: 524px)",
  Tablet: "(min-width: 525px) and (max-width: 1024px)",
  Desktop: "(min-width: 1025px)",
  BigDesktop: "(min-width: 1400px)",
  LessThanDesktop: "(max-width: 1024px)",
  MoreThanMobile: "(min-width: 525px)"
}

type MediaQueryKeys = keyof typeof queries;
type MediaQueryObject = { [k in MediaQueryKeys as `is${k}`]: string }

export const mediaQueries = Object.fromEntries(Object.entries(queries).map(([k, v]) => [`is${k}`, `@media ${v}`])) as MediaQueryObject
