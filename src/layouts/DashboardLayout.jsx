import { Outlet } from "react-router";
import AdminSidebar from "../shared/AdminSideBar";
import DashboardNavbar from "../shared/DashboardNavbar";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <Toaster position="top-center" reverseOrder={false} />
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <DashboardNavbar />

        <main className="p-5">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <AdminSidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;
