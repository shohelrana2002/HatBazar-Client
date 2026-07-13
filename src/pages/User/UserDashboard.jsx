import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import SubNav from "../../components/SubNav";
import Footer from "../../components/Footer";
import UserDashboardSidebar from "./UserDashboardSidebar";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <SubNav />

      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        {/* Main Content */}
        <div className="drawer-content flex flex-col min-h-screen bg-base-200">
          {/* Mobile Menu Button */}
          <div className="lg:hidden p-4">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-primary drawer-button"
            >
              ☰ Menu
            </label>
          </div>

          <main className="flex-1 p-4 lg:p-8">
            <Outlet />
          </main>

          <Footer />
        </div>

        {/* Sidebar */}
        <div className="drawer-side z-50">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <UserDashboardSidebar />
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
