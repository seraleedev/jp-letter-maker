import { styled } from "@stitches/react";

export const FadeInWrapper = styled("div", {
  width: "100%",
  height: "calc(100vh - 90px)",
  overflow: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  transition: "opacity 1s ease",
  opacity: 0,
  variants: {
    fadeIn: {
      true: {
        opacity: 1,
      },
    },
  },
});
