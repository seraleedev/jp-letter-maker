import type { ReactNode } from "react";
import { WaveSection } from "./style";

interface IWave {
  children: ReactNode;
}
export const Wave = ({ children }: IWave) => {
  return (
    <WaveSection>
      <div className="wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="content">{children}</div>
    </WaveSection>
  );
};
