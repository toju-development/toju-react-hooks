
import { queries } from "./types";
import { useMediaQuery } from "./useMediaQuery";

export const useMedia = () => {
  const isMobile = useMediaQuery(queries.Mobile);
  const isTablet = useMediaQuery(queries.Tablet);
  const isDesktop = useMediaQuery(queries.Desktop);
  const isBigDesktop = useMediaQuery(queries.BigDesktop);
  const isLessThanDesktop = useMediaQuery(queries.LessThanDesktop);
  const isMoreThanMobile = useMediaQuery(queries.MoreThanMobile);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isBigDesktop,
    isLessThanDesktop,
    isMoreThanMobile
  };
};
