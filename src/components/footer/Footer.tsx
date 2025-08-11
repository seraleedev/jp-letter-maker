import { Container } from "../layout/style";
import { FooterContainer } from "./style";
import { useTranslation } from "react-i18next";
import { useDeviceType } from "@/hooks/useDevice";
import type { CSSProperties } from "@stitches/react";
import Paragraph from "antd/es/typography/Paragraph";

const Footer = () => {
  const { t } = useTranslation();
  const { isMobile } = useDeviceType();
  const containerStyle: CSSProperties = isMobile
    ? {}
    : { position: "fixed", bottom: 0, zIndex: 100 };
  return (
    <Container style={containerStyle}>
      <FooterContainer>
        <Paragraph>{t("resolutionNotice")}</Paragraph>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
