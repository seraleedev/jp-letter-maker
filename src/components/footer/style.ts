import { customTheme } from "@/styles/stitches.config";
import { styled } from "@stitches/react";

export const FooterContainer = styled("footer", {
  width: "100%",
  padding: "10px 0",
  fontSize: `${customTheme.space.xs}`,
  textAlign: "center",
});
