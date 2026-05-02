import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Oil & Ghee",
    link: "/oil",
  },
  {
    name: "Honey",
    sub: [
      "Sundarban Honey",
      "Black Seed Honey",
      "Organic Honey",
      "Premium Honey",
    ],
  },
  {
    name: "Spices",
    sub: ["Turmeric", "Chili Powder", "Cumin", "Coriander"],
  },
  {
    name: "Pickle",
    link: "/pickle",
  },
  {
    name: "Certified",
    link: "/certified",
  },
];

const SubNav = () => {
  const [openMobile, setOpenMobile] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  // 🔥 Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-black text-white transition-all  duration-300 ${
        isSticky ? "fixed top-0  left-0 w-full z-50 shadow-lg" : "relative"
      }`}
    >
      <div className="container mx-auto px-3">
        {/* 🔥 Desktop Menu */}
        <ul className="hidden lg:flex gap-6 py-3 font-medium items-center">
          {categories.map((cat, index) => (
            <li key={index} className="relative group">
              {/* Main Link */}
              {cat.link ? (
                <Link to={cat.link} className="hover:text-green-400">
                  {cat.name}
                </Link>
              ) : (
                <span className="cursor-pointer hover:text-green-400">
                  {cat.name} ▾
                </span>
              )}

              {/* 🔽 Dropdown */}
              {cat.sub && (
                <ul className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-48 z-50">
                  {cat.sub.map((item, i) => (
                    <li key={i} className="px-4 py-1 hover:bg-orange-500">
                      <Link to={`/category/${item.toLowerCase()}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu */}
        <div className="lg:hidden py-2">
          {categories.map((cat, index) => (
            <div key={index} className="border-b border-gray-700">
              {/* Main */}
              <div
                onClick={() =>
                  setOpenMobile(openMobile === index ? null : index)
                }
                className="flex justify-between items-center py-2 cursor-pointer"
              >
                <span>{cat.name}</span>
                {cat.sub && <span>▾</span>}
              </div>

              {/* Sub */}
              {openMobile === index && cat.sub && (
                <div className="pl-4 pb-2 flex flex-col gap-1 text-sm">
                  {cat.sub.map((item, i) => (
                    <Link key={i} to="#">
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNav;
