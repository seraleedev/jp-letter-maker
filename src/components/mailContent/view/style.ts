import { styled } from "@stitches/react";
import { Flex } from "antd";

export const MailWrapper = styled(Flex, {
  width: "1000px",
  height: "727px",
  position: "relative",
});

export const MobileMailWrapper = styled(Flex, {
  width: "100%",
  background: `url(${import.meta.env.BASE_URL}/img/bg_paper.webp) center center/cover no-repeat`,
  padding: "30px 0",
  minHeight: "60vh",
});

export const MailTextArea = styled(Flex, {
  width: "100%",
  position: "absolute",
  top: 0,
  flexDirection: "row-reverse",
  zIndex: 50,
  aspectRatio: "1000 / 727",
  variants: { screen: { small: { width: "70%" }, large: { width: "50%" } } },
});

export const MobileMailTextArea = styled(Flex, {
  width: "100%",
  flexDirection: "row-reverse",
  maxHeight: "450px",
});

export const MailSection = styled(Flex, {
  flexGrow: 1,
  flexBasis: "33%",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "clamp(10px, 5vw, 60px) 0",
});

export const MailTextGroup = styled(Flex, {
  gap: 10,
  flexDirection: "row-reverse",
  height: "100%",
  width: "100%",
  justifyContent: "center",
});
