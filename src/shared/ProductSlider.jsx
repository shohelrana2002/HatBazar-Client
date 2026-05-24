import { Link } from "react-router";
import { FaCartPlus, FaEye } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ products }) => {
  return (
    <div className="py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="pb-14"
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="group relative mb-6 h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              {/* Offered Badge */}
              {product?.selling?.offered && (
                <div className="absolute left-3 top-3 z-20 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white shadow">
                  offered SALE
                </div>
              )}
              {/* combo Badge */}
              {product?.badge && (
                <div className="absolute left-3 top-3 z-20 rounded-full bg-orange-500 px-3 py-1 text-xs font-medium text-white shadow">
                  {product?.badge}
                </div>
              )}
              {/* Best Selling Badge */}
              {product?.selling?.bestSelling && (
                <div className="absolute right-3 top-3 z-20 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow">
                  BEST
                </div>
              )}
              {/*saving Badge */}
              {product?.save && (
                <div className="absolute right-3 top-3 z-20 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow">
                  Save {product?.save}%
                </div>
              )}

              {/* Image */}
              <Link to={product.to}>
                <figure className="overflow-hidden bg-base-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </figure>
              </Link>

              {/* Action Buttons */}
              <div className="absolute right-3 top-20 flex translate-x-16 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <button className="btn btn-circle btn-sm border-none bg-white text-black shadow hover:bg-orange-500 hover:text-white">
                  <FaEye />
                </button>

                <button className="btn btn-circle btn-sm border-none bg-white text-black shadow hover:bg-orange-500 hover:text-white">
                  <FaCartPlus />
                </button>
              </div>

              {/* Content */}
              <div className="p-2">
                <Link to={product.to}>
                  <h2 className="line-clamp-1 text-lg font-semibold transition-colors duration-300 hover:text-orange-500">
                    {product.name}
                  </h2>
                </Link>

                {/* Price */}
                <div className="mt-3 flex items-center gap-2">
                  {product.offeredPrice ? (
                    <>
                      <span className="text-xl font-bold text-orange-500">
                        ৳ {product.offeredPrice}
                      </span>

                      <span className="text-sm text-gray-400 line-through">
                        ৳ {product.price}
                      </span>
                    </>
                  ) : (
                    <span className="text-xl font-bold text-orange-500">
                      ৳ {product.price}
                    </span>
                  )}
                </div>

                {/* Button */}
                <button className="btn btn-warning  mt-4 w-full rounded-xl text-white hover:scale-[1.01]">
                  Add To Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Style */}
      <style>
        {`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #d1d5db;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            width: 28px;
            border-radius: 999px;
            background: #f97316;
          }

          .swiper-button-next,
          .swiper-button-prev {
            color: #f97316;
            background: white;
            width: 42px;
            height: 42px;
            border-radius: 999px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 16px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default ProductSlider;
