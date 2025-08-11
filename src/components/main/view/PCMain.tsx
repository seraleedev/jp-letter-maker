import { mainLogic } from "../logic";
import { FadeOut } from "@/components/animation/fadeout/FadeOut";
import { Wave } from "@/components/animation/wave/Wave";
import MailAnimation from "@/components/animation/mail/MailAnimation";
import { CustomForm } from "@/components/customForm/CustomForm";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { useAtomValue } from "jotai";
import { animationAtom } from "@/atom/useAtom";
import ToggleLang from "@/components/toggleLang/ToggleLang";
import Paragraph from "antd/es/typography/Paragraph";

const PCMain = () => {
  const isAnimating = useAtomValue(animationAtom);
  const { textData, fadeOutDone } = mainLogic();
  const { title } = textData;
  return (
    <FadeOut animationDone={fadeOutDone}>
      <Wave>
        <Flex justify="center" align="center" gap={50}>
          <div style={{ textAlign: "center", width: 300 }}>
            <Title level={2}>{title}</Title>
            <ToggleLang />
          </div>

          <Flex
            justify="center"
            align="center"
            style={{
              width: 500,
              minHeight: "100vh",
            }}
          >
            <MailAnimation isAnimating={isAnimating}>
              {isAnimating ? <></> : <CustomForm isMobile={false} />}
            </MailAnimation>
          </Flex>
        </Flex>
      </Wave>
    </FadeOut>
  );
};

export default PCMain;
