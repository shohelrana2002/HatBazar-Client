import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  MdDashboard,
  MdFavoriteBorder,
  MdManageAccounts,
  MdPayment,
} from "react-icons/md";
import logo from "/logo.png";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaTimes,
  FaBars,
  FaLocationArrow,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { LogOutIcon } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { logout } = useAuth();
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const { carts } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  return (
    <div className="shadow-md bg-white">
      <div className="container mx-auto px-2">
        {/* 🔝 MAIN NAV */}
        <div className="flex items-center justify-between gap-2 py-2">
          {/* 🍔 Mobile Menu */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-xl"
          >
            <FaBars />
          </button>

          {/* 🔥 Logo */}
          <Link to="/" className="shrink-0">
            <img className="w-28 md:w-36" src={logo} alt="logo" />
          </Link>

          {/* 🔍 Search */}
          <div className="flex flex-1 rounded-xl max-w-md overflow-hidden relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full px-2 font-semibold bg-blend-darken bg-black/5 border-none py-2 text-sm outline-none"
            />

            {search && (
              <button
                onClick={() => setSearch(search?.slice(0, -1))}
                className="absolute cursor-pointer right-10 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
              >
                <FaTimes />
              </button>
            )}

            <button className="bg-green-500 cursor-pointer text-white px-2 text-sm">
              <FaSearch />
            </button>
          </div>

          {user?.role !== "admin" && (
            <>
              {/* 🛒 Right */}
              <div className="flex items-center gap-4 shrink-0">
                <Link className=" flex  flex-col items-center" to="/trackOrder">
                  <FaLocationArrow />
                  <span className="hidden md:block">Track Order</span>
                </Link>
                {user ? (
                  <>
                    <Link
                      className=" flex flex-col items-center"
                      to="/user/dashboard"
                    >
                      <FaUser />
                      <span className="hidden md:block">Account</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className=" flex flex-col items-center" to="/login">
                      <FaUser />
                      <span className="hidden md:block">Sign In</span>
                    </Link>
                  </>
                )}
                <Link className=" flex flex-col items-center" to="/whitelist">
                  <MdFavoriteBorder size={24} className="font-medium" />
                  <span className="hidden md:block">Whitelist</span>
                </Link>

                <Link
                  to="/cart"
                  className="flex flex-col items-center relative"
                >
                  <FaShoppingCart />
                  <span className="absolute -top-3 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                    {carts?.length}
                  </span>
                  <span className="hidden md:block">Cart</span>
                </Link>

                {/* 🔥 MORE DROPDOWN */}
                <div className="relative group hidden md:block">
                  <span className="font-medium ">
                    <BiMenuAltLeft size={36} />
                  </span>
                  <button className="">More ▾</button>

                  <ul className="absolute right-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded w-40 z-50">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/offers">Offers</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {/* ========= Admin Routes ===== */}
          {user?.role === "admin" && (
            <>
              {/* 🛒 Right */}
              <div className="flex items-center gap-4 shrink-0">
                <Link className=" flex  flex-col items-center" to="/dashboard">
                  <MdDashboard size={24} />
                  <span className="hidden md:block">Dashboard</span>
                </Link>

                <Link className=" flex flex-col items-center" to="/whitelist">
                  <MdManageAccounts size={24} className="font-medium" />
                  <span className="hidden md:block">Manage Orders</span>
                </Link>

                <Link
                  to="/cart"
                  className="flex flex-col items-center relative"
                >
                  <MdPayment size={24} />
                  <span className="hidden md:block">Payment</span>
                </Link>

                {user ? (
                  <>
                    <button
                      type="button"
                      onClick={() => logout()}
                      className=" flex cursor-pointer flex-col items-center"
                    >
                      <LogOutIcon />
                      <span className="hidden text-red-500 md:block">
                        LogOut
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link className=" flex flex-col items-center" to="/login">
                      <FaUser />
                      <span className="hidden md:block">Sign In</span>
                    </Link>
                  </>
                )}
              </div>
            </>
          )}
        </div>

        {/*  MOBILE MENU */}
        {user?.role !== "admin" && mobileMenu && (
          <div className="md:hidden bg-white shadow-md mt-2 p-3 rounded">
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>

              {/* Mobile More */}
              <li className="border-t pt-2 font-semibold">More</li>
              <li>
                <Link to="/offers">Offers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        )}
        {/* Admin Routes Mobile Views  MOBILE MENU */}
        {user?.role === "admin" && mobileMenu && (
          <div className="md:hidden bg-white shadow-md mt-2 p-3 rounded">
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/mange-orders">Mange Orders</Link>
              </li>
              <li>
                <Link to="/mange-payments">Payments Orders</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
