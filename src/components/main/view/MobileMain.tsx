import { MobilePadding } from "@/components/layout/style";
import { Flex } from "antd";
import ToggleLang from "@/components/toggleLang/ToggleLang";
import { FadeOut } from "@/components/animation/fadeout/FadeOut";
import { mainLogic } from "../logic";
import { CustomForm } from "@/components/customForm/CustomForm";
import Title from "antd/es/typography/Title";

const MobileMain = () => {
  const { textData, fadeOutDone } = mainLogic();
  const { title } = textData;

  return (
    <FadeOut animationDone={fadeOutDone}>
      <MobilePadding>
        <Flex
          style={{
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Title level={3} style={{ textAlign: "center", marginBottom: 0 }}>
            {title}
          </Title>
          <Flex justify="center" align="center" style={{ marginBottom: 10 }}>
            <ToggleLang />
          </Flex>
        </Flex>

        <CustomForm isMobile />
      </MobilePadding>
    </FadeOut>
  );
};

export default MobileMain;
