import { H1 } from "@/components/typhography";
import { customTheme } from "@/styles/stitches.config";
import { styled, keyframes } from "@stitches/react";

const focusInOut = keyframes({
  "0%": { "-webkit-filter": "blur(12px)", filter: "blur(12px)", opacity: 0 },
  "20%": { "-webkit-filter": "blur(0px)", filter: "blur(0px)", opacity: 1 },
  "80%": { "-webkit-filter": "blur(0px)", filter: "blur(0px)", opacity: 1 },
  "100%": {
    "-webkit-filter": "blur(12px)",
    filter: "blur(12px)",
    opacity: 0,
    display: "none",
  },
});

export const FocusText = styled(H1, {
  fontWeight: 600,
  color: customTheme.colors.blue,
  textShadow: `${customTheme.shadows.shadow_blue}`,
  animation: `${focusInOut} 2.5s ease-in both`,
});
