export type Ref = React.RefObject<Element | null>

export interface UseIsInViewProps {
  ref: Ref;
  threshold?: number;
  rootMargin?: string;
}
