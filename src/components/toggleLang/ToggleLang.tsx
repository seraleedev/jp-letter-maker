import { Radio } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import { useTranslation } from "react-i18next";

const ToggleLang = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const langOptions: CheckboxGroupProps<string>["options"] = [
    { label: "한국어", value: "ko" },
    { label: "日本語", value: "ja" },
  ];

  const onChangeLanguage = (value: string) => {
    const newLang = value;
    i18n.changeLanguage(newLang);
  };

  return (
    <Radio.Group
      style={{ marginTop: 20, fontWeight: 600 }}
      options={langOptions}
      defaultValue={currentLang}
      optionType="button"
      onChange={(e) => onChangeLanguage(e.target.value)}
    />
  );
};
export default ToggleLang;
