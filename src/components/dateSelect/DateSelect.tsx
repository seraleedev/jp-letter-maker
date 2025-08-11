import { Flex, Select } from "antd";
import { type IDateOption } from "@/hooks/useDate";
import { NotDataFound } from "./style";
import type { SelectValue } from "antd/es/select";
import type { CSSProperties } from "@stitches/react";

interface IDateSelect {
  options: IDateOption[];
  onChangeFn: (value: SelectValue) => void;
  labelName: string;
  disabled?: boolean;
  showSearch?: boolean;
  placeholder?: string;
  value?: string;
  style?: CSSProperties;
}

export const DateSelect = ({
  options,
  onChangeFn,
  labelName,
  disabled,
  showSearch = true,
  placeholder,
  value,
  style,
}: IDateSelect) => {
  return (
    <Flex gap={7} justify="center" align="center">
      <Select
        disabled={disabled}
        showSearch={showSearch}
        placeholder={placeholder}
        value={value}
        style={{
          ...style,
        }}
        options={options}
        variant="underlined"
        onChange={onChangeFn}
        notFoundContent={
          <NotDataFound>
            결과가
            <br />
            없습니다.
          </NotDataFound>
        }
      />
      <span>{labelName}</span>
    </Flex>
  );
};
