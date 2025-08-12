import { TextureBg } from "./style";
import { FadeIn } from "@/components/animation/fadeIn/FadeIn";
import BlurText from "@/components/animation/blurText/BlurText";
import { PCMailContent as Content } from "@/components/mailContent/view/PCMailContent";
import { Button, Space } from "antd";
import { resultLogic } from "../resultLogic";
import { Helmet } from "react-helmet-async";

const PCResult = () => {
  const { textData, showBlurText, showMail, handleDownload, mailRef } =
    resultLogic();
  const { mailGetText, goFirst, download } = textData;

  return (
    <FadeIn>
      <Helmet>
        <link rel="preload" as="image" href="/img/brush_texture.webp" />
      </Helmet>
      <TextureBg>
        {showBlurText && <BlurText value={mailGetText} />}

        {showMail && <Content ref={mailRef} />}
      </TextureBg>
      {showMail && (
        <Space style={{ zIndex: 100 }}>
          <Button variant="link" color="default" href="/" size="large">
            {goFirst}
          </Button>
          <Button
            variant="link"
            color="default"
            size="large"
            onClick={handleDownload}
          >
            {download}
          </Button>
        </Space>
      )}
    </FadeIn>
  );
};

export default PCResult;
