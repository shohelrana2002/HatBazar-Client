import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Title = ({ title, to, toTitle }) => {
  return (
    <div className="mb-8">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-3">
        {/* Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-base-content">
            {title}
          </h2>
        </div>
        {/*  */}
        {/* Button */}
        <Link
          to={to}
          className="group flex items-center gap-2 text-sm md:text-base font-semibold text-orange-500 hover:text-orange-600 transition-all duration-300"
        >
          <span className="underline underline-offset-4">{toTitle}</span>

          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Stylish Line */}
      <div className="flex items-center">
        {/* Orange Line */}
        <div className="w-28 md:w-36 h-1 bg-orange-500 rounded-full"></div>

        {/* Gray Line */}
        <div className="flex-1 h-0.5 bg-base-300 -ml-0.5"></div>
      </div>
    </div>
  );
};

export default Title;
