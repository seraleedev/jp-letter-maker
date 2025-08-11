import { styled } from "@stitches/react";

export const FadeOutWrapper = styled("div", {
  width: "100%",
  transition: "opacity 0.5s ease",
  opacity: 1,

  variants: {
    fadeOut: {
      true: {
        opacity: 0,
      },
    },
  },
});
