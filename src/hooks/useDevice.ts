import { mobilePoint } from "@/config/static";
import { useMediaQuery } from "react-responsive";

export const useDeviceType = () => {
  const isMobile = useMediaQuery({ query: `(max-width:${mobilePoint}px)` });

  return { isMobile };
};
