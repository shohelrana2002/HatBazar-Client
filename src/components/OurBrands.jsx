/* eslint-disable react-hooks/immutability */
import { useEffect, useRef } from "react";

const brands = [
  { id: 1, name: "Nestle", logo: "https://picsum.photos/200?1" },
  { id: 2, name: "Pran", logo: "https://picsum.photos/200?2" },
  { id: 3, name: "Aarong", logo: "https://picsum.photos/200?3" },
  { id: 4, name: "Teer", logo: "https://picsum.photos/200?4" },
  { id: 5, name: "Radhuni", logo: "https://picsum.photos/200?5" },
  { id: 6, name: "Olympic", logo: "https://picsum.photos/200?6" },
  { id: 7, name: "Nestle", logo: "https://picsum.photos/200?1" },
  { id: 8, name: "Pran", logo: "https://picsum.photos/200?2" },
  { id: 9, name: "Aarong", logo: "https://picsum.photos/200?3" },
];

const OurBrands = () => {
  const scrollRef = useRef();
  const intervalRef = useRef(null);

  // =====================
  //  AUTO SCROLL
  // =====================
  const startAuto = () => {
    stopAuto();

    intervalRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 150, behavior: "smooth" });
      }
    }, 2500);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // =====================
  // 🖱 DRAG SCROLL
  // =====================
  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    stopAuto();

    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  // eslint-disable-next-line no-unused-vars
  const onMouseLeave = () => {
    isDown = false;
    startAuto();
  };

  const onMouseUp = () => {
    isDown = false;
    startAuto();
  };

  const onMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Our Brands</h2>

      <div
        ref={scrollRef}
        className="
          flex gap-6 
          overflow-x-auto 
          scroll-smooth 
          no-scrollbar 
          cursor-grab 
          select-none
        "
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="
              min-w-30 md:min-w-40
              bg-white shadow rounded p-3
              flex flex-col items-center justify-center
              hover:shadow-lg transition
              shrink-0
            "
          >
            <img
              src={brand.logo}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
              alt={brand.name}
            />
            <p className="mt-2 text-sm font-medium">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBrands;
