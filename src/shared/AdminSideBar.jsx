import {
  FaChartPie,
  FaBoxOpen,
  FaShoppingBag,
  FaUsers,
  FaTags,
  FaTicketAlt,
  FaMoneyCheckAlt,
  FaCog,
  FaHome,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router";

const AdminSidebar = () => {
  const menus = [
    {
      title: "Dashboard",
      icon: <FaChartPie />,
      path: "/dashboard",
    },
    {
      title: "Manage Orders",
      icon: <FaBoxOpen />,
      path: "/dashboard/mange-orders",
    },
    {
      title: "Add Product",
      icon: <FaTags />,
      path: "/dashboard/add-product",
    },
    {
      title: "Orders",
      icon: <FaShoppingBag />,
      path: "/dashboard/orders",
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/dashboard/users",
    },
    {
      title: "Coupons",
      icon: <FaTicketAlt />,
      path: "/dashboard/coupons",
    },
    {
      title: "Payments",
      icon: <FaMoneyCheckAlt />,
      path: "/dashboard/payments",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside className="relative flex h-full w-72 flex-col bg-slate-900 text-white">
      {/* Mobile Close Button */}
      <div className="flex items-center justify-between border-b border-slate-700 p-6 lg:hidden">
        <h1 className="text-2xl font-bold text-warning">HatBazar</h1>

        <label
          htmlFor="dashboard-drawer"
          className="btn btn-ghost btn-circle text-white"
        >
          <FaTimes />
        </label>
      </div>

      {/* Desktop Logo */}
      <div className="hidden border-b border-slate-700 p-6 lg:block">
        <h1 className="text-3xl font-bold text-warning">HatBazar</h1>

        <p className="mt-1 text-sm text-slate-400">Admin Dashboard</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            end={menu.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-warning font-semibold text-black"
                  : "text-slate-300 hover:bg-slate-800 hover:text-warning"
              }`
            }
          >
            <span className="text-lg">{menu.icon}</span>

            <span>{menu.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-slate-700 p-4">
        <NavLink
          to="/"
          className="mb-3 flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-warning"
        >
          <FaHome />
          Back to Website
        </NavLink>

        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500 px-4 py-3 font-semibold transition hover:bg-red-600">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
