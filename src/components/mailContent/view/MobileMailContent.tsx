import { Flex } from "antd";
import { MailText } from "@/components/typhography";
import { mailLogic } from "../mailLogic";
import { MobileMailTextArea, MobileMailWrapper } from "./style";
import { Container } from "@/components/layout/style";

export const MobileMailContent = () => {
  const { translateDate, translateData, currentLang } = mailLogic();
  const { year, month, day } = translateDate;
  const { nameText, description } = translateData;
  const langType = currentLang as any;

  return (
    <Container>
      <MobileMailWrapper>
        <MobileMailTextArea justify="space-evenly">
          <MailText langType={langType}>{nameText}</MailText>
          <Flex
            justify="center"
            gap={20}
            style={{ flexDirection: "row-reverse" }}
          >
            <MailText langType={langType}>
              {year} {month} {day}
            </MailText>
            <MailText langType={langType}>{description}</MailText>
          </Flex>
        </MobileMailTextArea>
      </MobileMailWrapper>
    </Container>
  );
};
