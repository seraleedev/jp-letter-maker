import { useDeviceType } from "@/hooks/useDevice";
import PCResult from "@/components/result/PCResult";
import MobileResult from "@/components/result/MobileResult";
import { formAtom } from "@/atom/useAtom";
import { useAtomValue } from "jotai";
import { initialData } from "@/config/static";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ResultPage = () => {
  const inputData = useAtomValue(formAtom);
  const { isMobile } = useDeviceType();
  const isEmpty = JSON.stringify(inputData) == JSON.stringify(initialData);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEmpty) navigate("/");
  }, [isEmpty]);

  return isMobile ? <MobileResult /> : <PCResult />;
};

export default ResultPage;
