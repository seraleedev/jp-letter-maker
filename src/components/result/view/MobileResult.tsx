import { FadeIn } from "@/components/animation/fadeIn/FadeIn";
import BlurText from "@/components/animation/blurText/BlurText";
import { Button } from "antd";
import { resultLogic } from "../resultLogic";
import { MobileMailContent } from "@/components/mailContent/view/MobileMailContent";
import { MobilePadding } from "@/components/layout/style";
import Paragraph from "antd/es/typography/Paragraph";
import { customTheme } from "@/styles/stitches.config";

const MobileResult = () => {
  const { textData, showBlurText, showMail } = resultLogic();
  const { mailGetText, goFirst, downloadNotice } = textData;

  return (
    <FadeIn>
      {showBlurText && <BlurText value={mailGetText} />}
      {showMail && (
        <>
          <Paragraph style={{ color: `${customTheme.colors.gray}` }}>
            {downloadNotice}
          </Paragraph>
          <MobilePadding>
            <MobileMailContent />
          </MobilePadding>

          <Button
            variant="link"
            color="default"
            href="/"
            size="large"
            block
            style={{ marginTop: 20 }}
          >
            {goFirst}
          </Button>
        </>
      )}
    </FadeIn>
  );
};

export default MobileResult;
