import { RatioBox, RatioImage } from "./style";

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  maxWidth,
  maxHeight,
}: ImageProps) => {
  return (
    <RatioBox style={{ width, height: height || "auto", maxWidth, maxHeight }}>
      <RatioImage src={src} alt={alt} decoding="async" loading="lazy" />
    </RatioBox>
  );
};

export default ResponsiveImage;
