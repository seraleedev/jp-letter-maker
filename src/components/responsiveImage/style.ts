import { styled } from "@stitches/react";
import { customTheme } from "@/styles/stitches.config";

export const RatioBox = styled("div", {
  position: "relative",
  overflow: "hidden",
  aspectRatio: "1000 / 727",
  boxShadow: `${customTheme.shadows.shadow_black}`,
});

export const RatioImage = styled("img", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
