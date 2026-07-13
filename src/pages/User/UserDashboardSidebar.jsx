import { NavLink } from "react-router";
import {
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaMapMarkerAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const UserDashboardSidebar = () => {
  const { logout } = useAuth();
  const menus = [
    {
      name: "Dashboard",
      path: "/user/dashboard",
      icon: <FaHome />,
    },
    {
      name: "My Orders",
      path: "/user/dashboard/my-orders",
      icon: <FaShoppingBag />,
    },
    {
      name: "Wishlist",
      path: "/user/dashboard/wishlist",
      icon: <FaHeart />,
    },
    {
      name: "Address",
      path: "/user/dashboard/address",
      icon: <FaMapMarkerAlt />,
    },
    {
      name: "Profile",
      path: "/user/dashboard/profile",
      icon: <FaUser />,
    },
    {
      name: "Settings",
      path: "/user/dashboard/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-base-100 border-r shadow-xl flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b">
        <h2 className="text-2xl font-bold text-primary">User Panel</h2>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="menu w-full gap-2">
          {menus.map((menu) => (
            <li key={menu.path}>
              <NavLink
                to={menu.path}
                end={menu.path === "/user/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "active bg-primary text-white rounded-lg"
                    : "rounded-lg hover:bg-base-200"
                }
              >
                {menu.icon}
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div className="border-t p-4">
        <button
          onClick={() => logout()}
          className="btn btn-error w-full text-white"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default UserDashboardSidebar;
