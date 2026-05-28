import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Title from "../shared/Title";
import { useEffect, useState } from "react";
import axiosPublic from "../api/axiosPublic";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

const TopSellingProducts = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axiosPublic.get("/api/products/best-selling");
        console.log(data);
        setData(data?.products || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="container mx-auto px-3 my-10">
      <Title
        title={"Top Selling Products"}
        to={"/toSeeling"}
        toTitle={"Top Seeling"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {data?.slice(0, 4).map((item) => {
          const save = item.offeredPrice && item.price - item.offeredPrice;

          const percent =
            item.offeredPrice && Math.round((save / item.price) * 100);

          return (
            <div
              key={item._id}
              className="bg-white rounded shadow hover:shadow-lg transition group relative flex flex-col lg:flex-row"
            >
              {/* 🔥 Badge */}
              {item.selling.bestSelling && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Best Selling
                </span>
              )}

              {item.selling.offered && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Offered
                </span>
              )}

              {/* ❤️ Wishlist */}
              <button className="absolute top-10 right-2 bg-white p-2 rounded shadow opacity-0 group-hover:opacity-100 transition">
                <FaHeart />
              </button>

              {/* 🖼 Image (SMALL) */}
              <Link to={item.to} className="lg:w-1/3">
                <img
                  src={item.image}
                  className="w-full h-56 p-1 md:p-6 lg:h-full object-cover rounded-t lg:rounded-l"
                  alt=""
                />
              </Link>

              {/* 📦 Content */}
              <div className="p-3 flex flex-col justify-between lg:w-2/3">
                {/* 🔹 Title */}
                <h3 className="text-sm md:text-base font-medium">
                  {item.name}
                </h3>

                {/* 💰 Price */}
                <div className="mt-1 flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    {item.offeredPrice ? (
                      <>
                        <span className="text-green-600  text-xl font-bold">
                          ৳{item.offeredPrice}
                        </span>
                        <span className="line-through text-orange-300 font-medium">
                          ৳{item.price}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold">৳{item.price}</span>
                    )}
                  </div>

                  {/*  Save */}
                  {item.offeredPrice && (
                    <span className="text-xs text-red-500">
                      Save ৳{save} ({percent}% OFF)
                    </span>
                  )}
                </div>

                {/* 🛒 Buttons */}
                <div className="mt-1 flex gap-1">
                  {/* Add to Cart */}
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="flex-1 border border-orange-400 hover:bg-orange-400 text-orange-400 cursor-pointer text-or py-1 hover:text-white rounded flex items-center justify-center gap-2 text-[16.7px]"
                  >
                    <FaShoppingCart />
                    Cart
                  </button>

                  {/* Buy Now */}
                  <button className="flex-1 border border-orange-400 bg-orange-400 hover:bg-black text-white text-or py-1  rounded flex items-center justify-center gap-2 text-[16.7px]">
                    <FaShoppingCart />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSellingProducts;
