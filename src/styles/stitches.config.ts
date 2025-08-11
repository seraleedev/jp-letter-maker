import { createStitches } from "@stitches/react";

export const {
  styled,
  theme: customTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      black: "#333",
      blue: "#44C3FF",
    },
    space: {
      xs: "clamp(1.2rem, 1vw, 1.2rem);",
      sm: "clamp(1.2rem, 1.5vw, 1.6rem);",
      md: "clamp(1.4rem, 2vw, 2rem);",
      mdLarge: "clamp(2rem, 2.5vw, 2.4rem)",
      lg: "clamp(2.4rem, 5vw, 4.8rem)",
    },
    shadows: {
      shadow_black: "0 0 10px rgba(0,0,0,0.8)",
    },
  },
});
