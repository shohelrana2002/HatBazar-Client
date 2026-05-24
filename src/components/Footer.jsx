import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-amber-100/60">
      {/* Top Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-black text-orange-500">HaatBazar</h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Fresh organic products directly from trusted farmers. Quality,
            freshness, and healthy living — all in one place.
          </p>

          {/* Social */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow transition-all duration-300 hover:bg-orange-500 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Shop
            </Link>

            <Link
              to="/about"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Contact
            </Link>

            <Link
              to="/blogs"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Blogs
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold">Categories</h3>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/category/mango"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Mango
            </Link>

            <Link
              to="/category/honey"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Honey
            </Link>

            <Link
              to="/category/khejur"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Khejur
            </Link>

            <Link
              to="/category/ghee"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Deshi Ghee
            </Link>

            <Link
              to="/category/spices"
              className="transition-all duration-300 hover:text-orange-500 hover:translate-x-1"
            >
              Organic Spices
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold">Contact Info</h3>

          <div className="mt-5 flex flex-col gap-5 text-sm">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-orange-500" />

              <p>Kaliganj, Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-500" />

              <p>+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />

              <p>support@haatbazar.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-base-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} HaatBazar. All Rights Reserved.</p>

          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-orange-500">
              Privacy Policy
            </Link>

            <Link to="/terms-condition" className="hover:text-orange-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
