import { FocusText } from "./style";

interface IBlurText {
  value: string;
}
const BlurText = ({ value }: IBlurText) => {
  return <FocusText>{value}</FocusText>;
};

export default BlurText;
