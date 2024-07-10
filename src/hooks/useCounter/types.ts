export interface UseCounterProps {
  initialValue?: number;
}

export interface UseCounterReturn {
  value: number;
  reset: () => void;
  increment: (value?: number) => void;
  decrement: (value?: number) => void;
}
