import { fadeInOutAtom } from "@/atom/useAtom";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";

export const mainLogic = () => {
  const { t } = useTranslation();
  const { fadeOut: fadeOutDone } = useAtomValue(fadeInOutAtom);
  const textData = {
    title: t("title"),
  };

  return { textData, fadeOutDone };
};
