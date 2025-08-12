import { AlreadyAnimatedBlur, fadeInOutAtom } from "@/atom/useAtom";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export const resultLogic = () => {
  const { t } = useTranslation();
  const fadeInOut = useAtomValue(fadeInOutAtom);
  const { fadeIn: fadeInDone } = fadeInOut;
  const alreadyBlur = useAtomValue(AlreadyAnimatedBlur);
  const showBlurText = fadeInDone && !alreadyBlur;
  const showMail = fadeInDone && alreadyBlur;
  const mailRef = useRef<HTMLDivElement>(null);
  const textData = {
    mailGetText: t("mailGetText"),
    goFirst: t("goFirst"),
    download: t("download"),
    downloadNotice: t("downloadNotice"),
  };

  const handleDownload = async () => {
    if (!mailRef.current) return;
    const capture = mailRef.current;

    try {
      const canvas = await html2canvas(capture, {
        width: 1000,
        height: 727,
        scale: 2,
        useCORS: true,
      });
      canvas.toBlob((blob) => {
        if (blob !== null) saveAs(blob, "your_mail.png");
      });
    } catch (error) {
      console.log(error);
      alert("Image saving is fail.");
    }
  };

  return { textData, showBlurText, showMail, handleDownload, mailRef };
};
