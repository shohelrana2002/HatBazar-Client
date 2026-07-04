import { useEffect, useState } from "react";
import { Link } from "react-router";
import Title from "../shared/Title";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/features/cart/cartSlice";
import axiosPublic from "../api/axiosPublic";

const AllProducts = () => {
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const allDataGet = async () => {
      try {
        setLoading(true);
        const { data } = await axiosPublic.get("/api/products");
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    allDataGet();
  }, []);

  const [visibleProducts, setVisibleProducts] = useState(10);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };
  if (loading) {
    return <div className="py-10 text-center">Loading products...</div>;
  }

  if (!products?.length) {
    return (
      <div className="py-10 text-center text-gray-500">No Products Found</div>
    );
  }
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
        {products.slice(0, visibleProducts).map((product) => {
          const cartItem = carts.find((item) => item._id === product._id);

          return (
            <div
              key={product._id}
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

                {cartItem ? (
                  // Quantity Controller
                  <div className="mt-4 flex items-center justify-between rounded-xl border border-orange-400 px-3 py-2">
                    <button
                      type="button"
                      onClick={() => dispatch(decreaseQuantity(product._id))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-lg font-bold text-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      -
                    </button>

                    <span className="text-lg font-bold">
                      {cartItem.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => dispatch(increaseQuantity(product._id))}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-lg font-bold text-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  // Add To Cart Button
                  <button
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                    className="btn btn-warning mt-4 w-full rounded-xl text-white hover:scale-[1.01]"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
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
