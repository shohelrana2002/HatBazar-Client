/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1200/500?1",
    title: "Organic Products",
    desc: "Fresh & Healthy",
  },
  {
    id: 2,
    image: "https://picsum.photos/1200/500?2",
    title: "Pure Honey",
    desc: "Natural Taste",
  },
  {
    id: 3,
    image: "https://picsum.photos/1200/500?3",
    title: "Premium Spices",
    desc: "Best Quality",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);

  const intervalRef = useRef(null);
  const touchStartX = useRef(0);

  // 🔥 Clone slides for infinite loop
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // 🔥 Infinite loop fix
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 500);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length);
      }, 500);
    }
  }, [current]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  //  Manual Controls
  const nextSlide = () => {
    stopAutoSlide();
    setCurrent((prev) => prev + 1);
    startAutoSlide();
  };

  const prevSlide = () => {
    stopAutoSlide();
    setCurrent((prev) => prev - 1);
    startAutoSlide();
  };

  const goToSlide = (index) => {
    stopAutoSlide();
    setCurrent(index + 1); // shift because of clone
    startAutoSlide();
  };

  //  Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <div
      className="relative w-full h-55 rounded-xl md:h-100 overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 🔥 SLIDES */}
      <div
        className={`flex ${
          transition
            ? "transition-transform rounded-xl duration-500 ease-in-out"
            : ""
        }`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {extendedSlides?.map((slide, i) => (
          <div key={i} className="w-full  shrink-0 relative">
            <img
              src={slide.image}
              className="w-full rounded-xl h-full object-cover"
              alt=""
            />

            {/* Overlay */}
            <div className="absolute rounded-xl inset-0 bg-black/40 flex items-center justify-center text-white text-center px-4">
              <div>
                <h2 className="text-xl md:text-3xl font-bold">{slide.title}</h2>
                <p className="mt-2">{slide.desc}</p>
                <button className="mt-3 bg-green-500 px-4 py-2 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ⬅️➡️ Buttons */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded"
      >
        ❯
      </button>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current - 1 === i ? "bg-green-500" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
