import { useDate } from "@/hooks/useDate";
import { customTheme } from "@/styles/stitches.config";
import { Button, Flex, Form } from "antd";
import { DateSelect } from "../dateSelect/DateSelect";
import { startYear } from "@/config/static";
import { formLogic } from "./logic";
import {
  CustomInput,
  CustomLabel,
  CustomTextArea,
  PCFormWrapper,
  MobileFormWrapper,
} from "./style";

interface ICustomForm {
  isMobile: boolean;
}
export const CustomForm = ({ isMobile }: ICustomForm) => {
  const { yearOption, monthOption, dayOption } = useDate();

  const {
    onChangeInput,
    onSelectDate,
    onClickSend,
    translate,
    inputData,
    initialValues,
    inputRules,
    form,
  } = formLogic();

  const {
    nameLabel,
    namePlaceholder,
    dateLabel,
    yearLabel,
    monthLabel,
    dayLabel,
    descLabel,
    descPlaceholder,
    sendText,
  } = translate;

  const fontSize = isMobile
    ? `${customTheme.space.md}`
    : `${customTheme.space.sm}`;

  const dateFlexStyle = isMobile
    ? { vertical: true, gap: 20 }
    : { justify: "space-between" };

  const content = (
    <Form
      layout="vertical"
      requiredMark={false}
      form={form}
      initialValues={initialValues}
      size={isMobile ? "large" : "middle"}
    >
      <Form.Item
        label={<CustomLabel css={{ fontSize }}>{nameLabel}</CustomLabel>}
        name="name"
        rules={inputRules.nameRules}
      >
        <CustomInput
          css={{ fontSize }}
          autoComplete="off"
          maxLength={20}
          variant="underlined"
          placeholder={namePlaceholder}
          value={inputData.name}
          onChange={(event) => onChangeInput(event.target.value, "name")}
        />
      </Form.Item>

      <Form.Item
        style={{ marginBottom: 50 }}
        label={<CustomLabel css={{ fontSize }}>{dateLabel}</CustomLabel>}
        name="date"
        rules={inputRules.dateRules}
      >
        <Flex {...dateFlexStyle}>
          <DateSelect
            options={yearOption}
            onChangeFn={(value) => onSelectDate(value, "year")}
            labelName={yearLabel}
            placeholder={startYear.toString()}
            value={inputData.date.year?.toString()}
            style={{ width: isMobile ? "100%" : 120, fontSize }}
          />

          <DateSelect
            options={monthOption}
            onChangeFn={(value) => onSelectDate(value, "month")}
            labelName={monthLabel}
            placeholder="1"
            value={inputData.date.month?.toString()}
            style={{ width: isMobile ? "100%" : 80, fontSize }}
          />

          <DateSelect
            options={dayOption}
            onChangeFn={(value) => onSelectDate(value, "day")}
            labelName={dayLabel}
            disabled={dayOption.length < 1}
            placeholder="1"
            value={inputData.date.day?.toString()}
            style={{ width: isMobile ? "100%" : 80, fontSize }}
          />
        </Flex>
      </Form.Item>

      <Form.Item
        label={<CustomLabel css={{ fontSize }}>{descLabel}</CustomLabel>}
        name="description"
        rules={inputRules.decRules}
      >
        <CustomTextArea
          css={{ fontSize }}
          showCount
          autoComplete="off"
          maxLength={100}
          placeholder={descPlaceholder}
          style={{ resize: "none" }}
          value={inputData.description}
          onChange={(event) => onChangeInput(event.target.value, "description")}
        />
      </Form.Item>

      <Form.Item style={{ margin: "40px 0 0" }}>
        <Flex justify="center" align="center">
          <Button
            color="primary"
            size="large"
            block
            onClick={onClickSend}
            variant="solid"
          >
            {sendText}
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
  return isMobile ? (
    <MobileFormWrapper>{content}</MobileFormWrapper>
  ) : (
    <PCFormWrapper>{content}</PCFormWrapper>
  );
};
