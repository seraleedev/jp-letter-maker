import { type ReactNode } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { fadeInOutAtom, formAtom, animationAtom } from "@/atom/useAtom";
import { FadeOutWrapper } from "./style";
import { initialData } from "@/config/static";

interface IFadeOut {
  animationDone: boolean;
  children: ReactNode;
}

export const FadeOut = ({ animationDone, children }: IFadeOut) => {
  const navigate = useNavigate();
  const [fadeInOut, setFadeInOut] = useAtom(fadeInOutAtom);
  const { fadeOut } = fadeInOut;
  const setIsAnimate = useSetAtom(animationAtom);
  const formData = useAtomValue(formAtom);
  const isEmpty = JSON.stringify(formData) == JSON.stringify(initialData);

  const onTransitionEnd = () => {
    if (fadeOut && !isEmpty) {
      setFadeInOut({ ...fadeInOut, fadeOut: false });
      setIsAnimate(false);
      navigate("/result");
    }
  };

  useEffect(() => {
    if (animationDone) {
      setFadeInOut({ ...fadeInOut, fadeOut: true });
    }
  }, [animationDone]);

  return (
    <FadeOutWrapper fadeOut={fadeOut} onTransitionEnd={onTransitionEnd}>
      {children}
    </FadeOutWrapper>
  );
};
