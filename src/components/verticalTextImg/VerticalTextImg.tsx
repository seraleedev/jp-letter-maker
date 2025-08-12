import { customTheme } from "@/styles/stitches.config";
import { useCallback, useEffect, useState } from "react";

interface IVerticalTextImg {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  lineHeight?: number;
  maxHeight?: number;
}

export const VerticalTextImg = ({
  text,
  fontSize = 21,
  fontFamily = "'Jaemin3-Regular',serif",
  color = `${customTheme.colors.black}`,
  lineHeight = 1.1,
  maxHeight = 600,
}: IVerticalTextImg) => {
  const [imgDataUrl, setImgDataUrl] = useState<string | null>(null);
  const scaleFactor = 2;

  const generateImage = useCallback(async () => {
    if (!text) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Prepare canvas size
    const chars = text.split("");
    const charHeight = fontSize * lineHeight;
    const charsPerColumn = Math.floor(maxHeight / charHeight);
    const columnCount = Math.ceil(chars.length / charsPerColumn);

    const baseCanvasWidth = columnCount * fontSize * 1.2;
    const baseCanvasHeight = maxHeight;

    canvas.width = baseCanvasWidth * scaleFactor;
    canvas.height = baseCanvasHeight * scaleFactor;

    // Retina 대응 (확대)
    ctx.scale(scaleFactor, scaleFactor);

    // Ensure font is loaded
    const fontToLoad = `${fontSize}px ${fontFamily}`;
    try {
      await document.fonts.load(fontToLoad);
    } catch (err) {
      console.warn("Font load failed:", err);
    }

    // Draw
    ctx.clearRect(0, 0, baseCanvasWidth, baseCanvasHeight);
    ctx.fillStyle = color;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let i = 0; i < chars.length; i++) {
      const column = Math.floor(i / charsPerColumn);
      const reversedColumn = columnCount - 1 - column;
      const row = i % charsPerColumn;

      const x = reversedColumn * fontSize * 1.2 + fontSize / 2;
      const y = row * charHeight;

      ctx.fillText(chars[i], x, y);
    }

    const dataUrl = canvas.toDataURL("image/png");
    setImgDataUrl(dataUrl);
  }, [text, fontSize, fontFamily, color, lineHeight, maxHeight]);

  useEffect(() => {
    generateImage();
  }, [generateImage]);

  if (!imgDataUrl) return null;

  return (
    <img
      src={imgDataUrl}
      alt="vertical_text"
      loading="lazy"
      style={{ width: "auto", height: `${maxHeight}px`, objectFit: "contain" }}
    />
  );
};
