import { useState } from "react";
import { Link } from "react-router";
import { FaCartPlus } from "react-icons/fa";

import Title from "../shared/Title";

// Demo Data
const products = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Organic Product ${index + 1}`,
  image: `https://picsum.photos/500?random=${index + 1}`,
  price: Math.floor(Math.random() * 1000) + 200,
  offeredPrice: Math.floor(Math.random() * 800) + 150,
  badge: index % 2 === 0 ? "Best Selling" : "Organic",
  to: `/product/${index + 1}`,
}));

const AllProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(10);

  // Load More
  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  return (
    <div className="py-10">
      {/* Section Title */}
      <Title
        title={"Just for you"}
        toTitle={"View All Products"}
        to={"/viewAllProducts"}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Image */}
            <Link to={product.to}>
              <div className="relative overflow-hidden">
                {/* Badge */}
                <div className="absolute left-3 top-3 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  {product.badge}
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            {/* Content */}
            <div className="p-4">
              <Link to={product.to}>
                <h2 className="line-clamp-1 text-lg font-semibold transition-colors duration-300 hover:text-orange-500">
                  {product.name}
                </h2>
              </Link>

              {/* Price */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xl font-bold text-orange-500">
                  ৳ {product.offeredPrice}
                </span>

                <span className="text-sm text-gray-400 line-through">
                  ৳ {product.price}
                </span>
              </div>

              {/* Button */}
              <button className="btn btn-warning mt-4 w-full rounded-xl text-white">
                <FaCartPlus />
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < products.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="btn btn-warning rounded-full px-8 text-white hover:scale-105 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
