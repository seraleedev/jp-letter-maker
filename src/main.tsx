import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import "./config/i18n.ts";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: '"Noto Serif KR", serif',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </HelmetProvider>
  </StrictMode>
);
