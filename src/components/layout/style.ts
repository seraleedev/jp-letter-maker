import { styled } from "@stitches/react";
import { Flex } from "antd";

export const Container = styled(Flex, {
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

export const MobilePadding = styled("article", {
  width: "100%",
  padding: "0 17px",
  overflowY: "auto",
});

export const MainLayout = styled("main", {
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
