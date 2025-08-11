import { mainLogic } from "../logic";
import { FadeOut } from "@/components/animation/fadeout/FadeOut";
import { Wave } from "@/components/animation/wave/Wave";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";

const PCMain = () => {
  const { textData, fadeOutDone } = mainLogic();
  const { title } = textData;
  return (
    <FadeOut animationDone={fadeOutDone}>
      <Wave>
        <Flex justify="center" align="center" gap={50}>
          <div style={{ textAlign: "center", width: 300 }}>
            <Title style={{ margin: 0 }} level={2}>
              {title}
            </Title>
          </div>

          <Flex
            justify="center"
            align="center"
            style={{
              width: 500,
              minHeight: "100vh",
            }}
          ></Flex>
        </Flex>
      </Wave>
    </FadeOut>
  );
};

export default PCMain;
