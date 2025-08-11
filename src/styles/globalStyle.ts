import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "@import": `url("https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&family=Noto+Serif+KR:wght@200..900&display=swap")`,

  /*global */
  ":root": {
    fontFamily: `"Noto Serif KR","Noto Serif JP", serif`,
    "--app-font": `"Noto Serif KR","Noto Serif JP", serif`,
    "--app-color": "#fff",
  },
  html: {
    fontFamily: `"Noto Serif KR","Noto Serif JP", serif`,
    boxSizing: "border-box",
    fontSize: "10px",
  },
  body: {
    fontSize: "10px",
    margin: 0,
    padding: 0,
    background: "inherit",
    color: "inherit",
    fontFamily: `"Noto Serif KR","Noto Serif JP", serif`,
    overflowX: "hidden",
    "-webkit-font-smoothing": " antialiased",
    textRendering: "optimizeLegibility",
  },

  "*": { boxSizing: "inherit" },
  "*::before": { boxSizing: "inherit" },
  "*::after": { boxSizing: "inherit" },

  a: { color: "inherit", textDecoration: "none" },
});
