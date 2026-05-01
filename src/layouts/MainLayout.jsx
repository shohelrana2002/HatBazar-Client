import "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
