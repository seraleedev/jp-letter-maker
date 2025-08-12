import ResponsiveImage from "../../responsiveImage/ResponsiveImage";
import { MailTextArea, MailSection, MailTextGroup, MailWrapper } from "./style";
import { forwardRef } from "react";
import { VerticalTextImg } from "../../verticalTextImg/VerticalTextImg";
import { mailLogic } from "../mailLogic";
import { Helmet } from "react-helmet-async";

export const PCMailContent = forwardRef<HTMLDivElement, {}>((_, ref) => {
  const { fontFamilyForImg, translateDate, translateData } = mailLogic();
  const { year, month, day } = translateDate;
  const { nameText, description } = translateData;

  return (
    <MailWrapper ref={ref}>
      <MailTextArea>
        <MailSection>
          <VerticalTextImg fontFamily={fontFamilyForImg} text={nameText} />
        </MailSection>
        <MailSection>
          <MailTextGroup>
            <VerticalTextImg
              fontFamily={fontFamilyForImg}
              text={`${year} ${month} ${day}`}
            />
            <VerticalTextImg fontFamily={fontFamilyForImg} text={description} />
          </MailTextGroup>
        </MailSection>
        {/* 공백 채우기용 */}
        <MailSection>
          <div></div>
        </MailSection>
      </MailTextArea>

      <Helmet>
        <link rel="preload" as="image" href="/img/bg_mail.webp" />
      </Helmet>
      <ResponsiveImage
        src={`/img/bg_mail.webp`}
        alt="mail_background"
        width={"100%"}
        height="auto"
        maxWidth="1000px"
        maxHeight="727px"
      />
    </MailWrapper>
  );
});

export default PCMailContent;
