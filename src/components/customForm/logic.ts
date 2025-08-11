import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { useAtom, useSetAtom } from "jotai";
import { formAtom, animationAtom, type IDate } from "@/atom/useAtom";
import type { SelectValue } from "antd/es/select";
import type { RuleObject } from "antd/es/form";
import { useDeviceType } from "@/hooks/useDevice";
import { fadeInOutAtom } from "@/atom/useAtom";

export interface IFormValues {
  name: string;
  date: IDate;
  description: string;
}

export const formLogic = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<IFormValues>();
  const [inputData, setInputData] = useAtom(formAtom);
  const setIsAnimating = useSetAtom(animationAtom);
  const [fadeInOut, setfadeInOut] = useAtom(fadeInOutAtom);

  const { isMobile } = useDeviceType();

  const translate = {
    nameLabel: t("nameLabel"),
    nameAlert: t("nameAlert"),
    namePlaceholder: t("namePlaceholder"),
    dateLabel: t("dateLabel"),
    dateAlert: t("dateAlert"),
    yearLabel: t("yearLabel"),
    monthLabel: t("monthLabel"),
    dayLabel: t("dayLabel"),
    descLabel: t("descLabel"),
    descAlert: t("descAlert"),
    descPlaceholder: t("descPlaceholder"),
    sendText: t("sendText"),
  };

  const initialValues = {
    name: inputData.name,
    date: inputData.date,
    description: inputData.description,
  };

  const inputRules = {
    nameRules: [{ required: true, message: translate.nameAlert }],
    dateRules: [
      {
        required: true,
        validator: (_: RuleObject, value: any) => {
          const dataIsExist =
            inputData.date.year && inputData.date.month && inputData.date.day;
          if (value == "") return Promise.resolve();
          if (value && dataIsExist) {
            return Promise.resolve();
          }
          return Promise.reject(new Error(translate.dateAlert));
        },
        message: translate.dateAlert,
      },
    ],
    decRules: [{ required: true, message: translate.descAlert }],
  };

  // text input 핸들러
  const onChangeInput = (value: string, type: "name" | "description") => {
    setInputData((prev) => {
      return { ...prev, [type]: value };
    });
  };

  // 날짜 셀렉트 핸들러
  const onSelectDate = (value: SelectValue, type: "year" | "month" | "day") => {
    setInputData((prev) => {
      return { ...prev, date: { ...prev.date, [type]: Number(value) } };
    });
    const prevDate = form.getFieldValue(["date"]) || {};
    const newDate = {
      ...JSON.parse(JSON.stringify(prevDate)),
      [type]: Number(value),
    };
    form.setFieldsValue({ date: newDate });
  };

  // 보내기 버튼 클릭,fadeOut 애니메이션 활성화
  const onClickSend = async () => {
    const checkValue = await form.validateFields();
    try {
      if (checkValue) {
        if (isMobile) {
          return setfadeInOut({ ...fadeInOut, fadeOut: true });
        }
        setIsAnimating(true);
      }
    } catch (error) {
      return;
    }
  };

  return {
    onChangeInput,
    onSelectDate,
    onClickSend,
    translate,
    inputData,
    initialValues,
    inputRules,
    form,
  };
};
