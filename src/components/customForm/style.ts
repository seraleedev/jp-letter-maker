import { customTheme } from "@/styles/stitches.config";
import { styled } from "@stitches/react";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export const PCFormWrapper = styled("div", {
  width: "100%",
  padding: "50px 30px 30px",
});

export const MobileFormWrapper = styled("div", {
  padding: 15,
  marginBottom: 10,
});

export const CustomLabel = styled("label", {
  fontSize: customTheme.space.sm,
  fontWeight: 600,
});

export const CustomInput = styled(Input, {
  fontSize: customTheme.space.sm,
  padding: "5px 0",
});

export const CustomTextArea = styled(TextArea, {
  position: "relative",
  height: "120px",
  fontSize: customTheme.space.sm,

  ".ant-input-data-count": {
    fontSize: customTheme.space.xs,
    position: "absolute",
    bottom: "-24px",
    right: "0",
  },

  "&::-webkit-scrollbar": {
    width: "4px",
  },
  // Firefox
  scrollbarWidth: "thin",
});

export const NotDataFound = styled("p", {
  textAlign: "center",
  fontWeight: 600,
  fontSize: `${customTheme.space.sm}`,
});
