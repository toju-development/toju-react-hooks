import { useEvent } from "@Src/hooks/useEvent";
import { type AnyFunction, throttle } from "toju-basic-utils";

export const useThrottle = <T extends AnyFunction>(fn: T, delay: number)=> {
  const event = useEvent(fn)
  return throttle(event, delay)
}
