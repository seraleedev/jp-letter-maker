import { useDeviceType } from "@/hooks/useDevice";
import PCMain from "../components/main/view/PCMain";
import MobileMain from "../components/main/view/MobileMain";

const MainPage = () => {
  const { isMobile } = useDeviceType();
  return isMobile ? <MobileMain /> : <PCMain />;
};

export default MainPage;
