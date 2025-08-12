import { customTheme } from "@/styles/stitches.config";
import { styled } from "@stitches/react";

export const H1 = styled("h1", {
  fontSize: customTheme.space.lg,
});

export const MailText = styled("p", {
  writingMode: "vertical-rl",
  fontSize: customTheme.space.mdLarge,
  color: customTheme.colors.black,
  margin: 0,
  whiteSpace: "pre-line",
  variants: {
    langType: {
      ko: {
        fontFamily: `"Jaemin3-Regular", serif`,
      },
      ja: {
        fontFamily: `"Noto Serif JP", "Noto Serif KR", serif`,
      },
    },
  },
});
