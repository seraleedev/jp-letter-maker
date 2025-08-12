import { globalStyles } from "./styles/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import ResultPage from "./pages/ResultPage";

function App() {
  globalStyles();

  return (
    <BrowserRouter basename="/jp-letter-maker">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
