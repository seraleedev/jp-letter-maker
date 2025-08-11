import { customTheme } from "@/styles/stitches.config";
import { styled, keyframes } from "@stitches/react";

const mailOut = keyframes({
  "0%": { width: "500px", height: "50vh", background: `rgba(255,255,255,0.8)` },
  "30%": {
    width: "300px",
    height: "70vh",
    background: customTheme.colors.lightBlue,

    transform: "translateY(0%)",
  },
  "50%": {
    width: "300px",
    height: "70vh",
    background: customTheme.colors.lightBlue,
  },
  "100%": { transform: "translateY(-150%)" },
});

export const MailDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 3,
  boxShadow: customTheme.shadows.shadow_black,
  variants: {
    animate: {
      true: { animation: `${mailOut} 3s ease forwards` },
      false: {
        width: "500px",
        height: "auto",
        background: `rgba(255,255,255,0.8)`,
      },
    },
  },
});
