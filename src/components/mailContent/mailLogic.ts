import { useTranslation } from "react-i18next";
import { formAtom } from "@/atom/useAtom";
import { convertEra } from "@/atom/useSelector";
import { useAtomValue } from "jotai";
import { convertChinese } from "@/util";

export const mailLogic = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { name, description } = useAtomValue(formAtom);
  const { eraName, eraYear, eraMonth, eraDay } = useAtomValue(convertEra);

  const translateData = {
    nameText: `${t("addressee")} ${name}`,
    description,
  };

  const translateDate = {
    year: `${t(`${eraName}`)} ${eraYear == 1 ? t("origin") : convertChinese(eraYear)}${t("yearLabel")}`,
    month: `${eraMonth}${t("monthLabel")}`,
    day: `${eraDay}${t("dayLabel")}`,
  };
  const fontFamilyForImg =
    currentLang == "ko" ? "'Jaemin3-Regular',serif" : "'Noto Serif JP',serif";

  return { fontFamilyForImg, translateDate, translateData, currentLang };
};
