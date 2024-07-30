import { useEvent } from "@Src/hooks/useEvent";
import { type AnyFunction, debounce } from "toju-basic-utils";

export const useDebounce = <T extends AnyFunction>(fn: T, delay: number)=> {
  const event = useEvent(fn)
  return debounce(event, delay)
}
