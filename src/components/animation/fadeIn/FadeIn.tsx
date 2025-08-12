import { useState, type ReactNode } from "react";
import { useEffect } from "react";
import { FadeInWrapper } from "./style";
import { useSetAtom, useAtom } from "jotai";
import { AlreadyAnimatedBlur, fadeInOutAtom } from "@/atom/useAtom";

interface IFadeIn {
  children?: ReactNode;
}

export const FadeIn = ({ children }: IFadeIn) => {
  const [fadeInOut, setFadeInOut] = useAtom(fadeInOutAtom);
  const [fadeInTrigger, setFadeInTrigger] = useState(false);
  const setAlreadyBlurAnimation = useSetAtom(AlreadyAnimatedBlur);

  const onTransitionEnd = () => {
      setFadeInOut({...fadeInOut,fadeIn:true});
    // 블러 애니메이션 2.5초에 맞춰서 실행
    setTimeout(() => setAlreadyBlurAnimation(true), 3000);
  };

  useEffect(() => {
    setFadeInTrigger(true);
  }, []);

  useEffect(() => {
    if (fadeInTrigger && !fadeInOut.fadeIn) {
      const timeout = setTimeout(() => {
        onTransitionEnd();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [fadeInTrigger]);

  return (
    <FadeInWrapper fadeIn={fadeInTrigger} onTransitionEnd={onTransitionEnd}>
      {children}
    </FadeInWrapper>
  );
};
