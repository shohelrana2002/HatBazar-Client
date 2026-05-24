import { FaQuoteLeft, FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const customerReviews = [
  {
    id: 1,
    name: "Rahim Ahmed",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    location: "Dhaka",
    rating: 5,
    review:
      "Amazing quality products! The honey and ghee were super fresh. Delivery was also very fast.",
  },

  {
    id: 2,
    name: "Fatema Islam",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    location: "Chattogram",
    rating: 4,
    review:
      "I ordered mangoes for pre-order and received them exactly on time. Taste was excellent.",
  },

  {
    id: 3,
    name: "Nusrat Jahan",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    location: "Rajshahi",
    rating: 5,
    review:
      "Best organic grocery shop online. Packaging was neat and all items were authentic.",
  },

  {
    id: 4,
    name: "Sabbir Hasan",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    location: "Khulna",
    rating: 5,
    review:
      "Very satisfied with the combo offers. Prices are reasonable and product quality is premium.",
  },

  {
    id: 5,
    name: "Mehedi Rana",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    location: "Sylhet",
    rating: 4,
    review:
      "Customer support was very friendly. My order arrived safely and everything was fresh.",
  },

  {
    id: 6,
    name: "Jannatul Ferdous",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    location: "Barishal",
    rating: 5,
    review:
      "The khejur quality was excellent. Soft, fresh, and premium taste. Highly recommended.",
  },
];

const CustomerReview = () => {
  return (
    <div className="py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={4}
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
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="pb-14"
      >
        {customerReviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="group relative flex h-full flex-col rounded-3xl border border-base-300 bg-base-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute right-5 top-5 text-5xl text-orange-100 transition-all duration-300 group-hover:rotate-12 group-hover:text-orange-200">
                <FaQuoteLeft />
              </div>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-16 rounded-full ring ring-orange-400 ring-offset-2 ring-offset-base-100">
                    <img src={review.image} alt={review.name} />
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-bold">{review.name}</h2>

                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-1 text-orange-400">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 line-clamp-4 text-sm leading-7 text-gray-600">
                {review.review}
              </p>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-base-300 pt-4">
                <span className="text-sm font-medium text-orange-500">
                  Verified Customer
                </span>

                <button className="btn btn-warning btn-sm rounded-full text-white">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Custom Style */}
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
            width: 44px;
            height: 44px;
            border-radius: 999px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.12);
            transition: all 0.3s ease;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: #f97316;
            color: white;
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

export default CustomerReview;
