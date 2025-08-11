import type { ReactNode } from "react";
import { MailDiv } from "./style";
import { useAtom } from "jotai";
import { fadeInOutAtom } from "@/atom/useAtom";

interface IMailAnimation {
  isAnimating: boolean;
  children: ReactNode;
}

const MailAnimation = ({ isAnimating, children }: IMailAnimation) => {
  const [fadeInOut, setFadeInOut] = useAtom(fadeInOutAtom);

  const handleAnimatingEnd = () => {
    if (isAnimating) {
      setFadeInOut({ ...fadeInOut, fadeOut: true });
    }
  };

  return (
    <MailDiv animate={isAnimating} onAnimationEnd={handleAnimatingEnd}>
      {children}
    </MailDiv>
  );
};

export default MailAnimation;
