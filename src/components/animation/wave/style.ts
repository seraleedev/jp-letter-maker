import { customTheme } from "@/styles/stitches.config";
import { styled, keyframes } from "@stitches/react";

const waveAnimating = keyframes({
  "0%": { transform: "translate(-50%, -80%) rotate(0deg)" },
  "100%": { transform: "translate(-50%, -80%) rotate(360deg)" },
});

export const WaveSection = styled("section", {
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",

  ".wave": {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "100%",
    background: customTheme.colors.blue,
    transition: "0.5s",
  },

  ".wave span": {
    content: "",
    position: "absolute",
    width: "440vh",
    height: "440vh",
    top: "-15%",
    left: "50%",
    transform: "translate(-50%, -75%)",
    background: "#fff",
  },

  ".content": {
    position: "relative",
  },

  ".wave span:nth-child(1)": {
    borderRadius: "45%",
    background: "rgba(255, 255, 255, 1)",
    animation: `${waveAnimating} 20s linear infinite`,
  },

  ".wave span:nth-child(2)": {
    borderRadius: "40%",
    background: "rgba(255, 255, 255, 0.5)",
    animation: `${waveAnimating} 25s linear infinite`,
  },
  ".wave span:nth-child(3)": {
    borderRadius: "42.5%",
    background: "rgba(255, 255, 255, 0.5)",
    animation: `${waveAnimating} 30s linear infinite`,
  },
});
