import { FaBars, FaBell, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";

const DashboardNavbar = () => {
  const { user } = useSelector((state) => state.user);
  const { logout } = useAuth();
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <div className="navbar border-b bg-base-100 block md:hidden px-5 shadow-sm">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost btn-circle lg:hidden"
          >
            <FaBars size={20} />
          </label>
        </div>

        <div>
          <h1 className=" text-xl md:text-2xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500">Welcome back 👋</p>
        </div>
      </div>

      {/* Center */}
      <div className="hidden lg:flex">
        <label className="input input-bordered flex w-80 items-center gap-2">
          <FaSearch className="text-gray-400" />
          <input type="text" className="grow" placeholder="Search..." />
        </label>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FaBell size={20} />
            <span className="badge badge-warning badge-xs indicator-item"></span>
          </div>
        </button>

        {/* User */}
        <div className="flex items-center gap-1">
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-warning ring-offset-2">
              <img
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="Admin"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold">{user?.name}</h3>
            <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => logout()}
          className="btn btn-error btn-sm text-white"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
