import { Container } from "@/components/layout/style";
import { styled } from "@stitches/react";

export const TextureBg = styled(Container, {
  width: "100%",
  maxWidth: "1920px",
  height: "100%",
  background: `url(${import.meta.env.BASE_URL}/img/brush_texture_blue.webp) center center/100% no-repeat`,
});
