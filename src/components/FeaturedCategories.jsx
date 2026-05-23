import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const data = [
  { id: 1, name: "Honey", to: "/honey", image: "https://picsum.photos/200?1" },
  { id: 2, name: "Oil", to: "/oil", image: "https://picsum.photos/200?2" },
  { id: 3, name: "Ghee", to: "/ghee", image: "https://picsum.photos/200?3" },
  { id: 4, name: "Spices", to: "/spice", image: "https://picsum.photos/200?4" },
  {
    id: 5,
    name: "Pickle",
    to: "/pickle",
    image: "https://picsum.photos/200?5",
  },
  { id: 6, name: "Rice", to: "/rice", image: "https://picsum.photos/200?6" },
  { id: 7, name: "Salt", to: "/salt", image: "https://picsum.photos/200?7" },
];

const FeaturedCategories = () => {
  const scrollRef = useRef();
  const [canScroll, setCanScroll] = useState(false);
  const intervalRef = useRef(null);

  // check overflow
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScroll(el.scrollWidth > el.clientWidth);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // auto slide (only if scrollable)
  useEffect(() => {
    if (!canScroll) return;

    intervalRef.current = setInterval(() => {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [canScroll]);

  //  manual scroll
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Featured Categories
      </h2>

      <div className="relative">
        {/* ⬅ LEFT */}
        {canScroll && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1"
          >
            ❮
          </button>
        )}

        {/*  SLIDER */}
        <div ref={scrollRef} className="flex gap-4 overflow-hidden">
          {data.map((item) => (
            <Link
              to={item?.to}
              key={item.id}
              className="min-w-30 md:min-w-45 shrink-0 bg-white shadow rounded p-3 text-center"
            >
              <img
                src={item.image}
                className="w-full h-20 md:h-28 object-cover rounded"
                alt=""
              />
              <h3 className="mt-2 text-sm md:text-base font-medium">
                {item.name}
              </h3>
            </Link>
          ))}
        </div>

        {/*   side  right df */}
        {canScroll && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1"
          >
            ❯
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedCategories;
