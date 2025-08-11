import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { MainLayout } from "./style";

const Layout = () => {
  return (
    <MainLayout>
      <Outlet />
      <Footer />
    </MainLayout>
  );
};

export default Layout;
