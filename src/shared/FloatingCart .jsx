import { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

const FloatingCart = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed right-5 top-1/2 z-9999 -translate-y-1/2">
        <button
          onClick={() => setOpen(true)}
          className="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
        >
          <FaShoppingCart />

          {/* Cart Count */}
          <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
            3
          </span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-99999 transition-all duration-300 ${
          open ? "visible bg-black/40 opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Sidebar Cart */}
        <div
          className={`absolute right-0 top-0 h-full w-full bg-white shadow-2xl transition-all duration-500 sm:w-105 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-base-300 px-5 py-4">
            <div>
              <h2 className="text-2xl font-bold">Shopping Cart</h2>

              <p className="text-sm text-gray-500">3 Items</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="btn btn-circle btn-sm bg-orange-500 text-white border-none hover:bg-orange-600"
            >
              <FaTimes />
            </button>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 overflow-y-auto p-5 h-[calc(100%-180px)]">
            {/* Item */}
            <div className="flex gap-4 rounded-2xl border border-base-300 p-3">
              <img
                src="https://picsum.photos/120?1"
                alt=""
                className="h-24 w-24 rounded-xl object-cover"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="line-clamp-1 text-lg font-semibold">
                    Premium Honey
                  </h3>

                  <p className="text-sm text-gray-500">Qty: 1</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-bold text-orange-500">৳ 850</p>

                  <button className="text-sm text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-4 rounded-2xl border border-base-300 p-3">
              <img
                src="https://picsum.photos/120?2"
                alt=""
                className="h-24 w-24 rounded-xl object-cover"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="line-clamp-1 text-lg font-semibold">
                    Organic Mango Box
                  </h3>

                  <p className="text-sm text-gray-500">Qty: 2</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-bold text-orange-500">৳ 2200</p>

                  <button className="text-sm text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-4 rounded-2xl border border-base-300 p-3">
              <img
                src="https://picsum.photos/120?3"
                alt=""
                className="h-24 w-24 rounded-xl object-cover"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="line-clamp-1 text-lg font-semibold">
                    Premium Khejur
                  </h3>

                  <p className="text-sm text-gray-500">Qty: 1</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-bold text-orange-500">৳ 1450</p>

                  <button className="text-sm text-red-500 hover:underline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 w-full border-t border-base-300 bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Total</h3>

              <p className="text-2xl font-black text-orange-500">৳ 4500</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="btn rounded-xl border-none bg-base-200">
                View Cart
              </button>

              <button className="btn rounded-xl border-none bg-orange-500 text-white hover:bg-orange-600">
                Checkout
              </button>
            </div>
          </div>
        </div>

        {/* Click Outside Close */}
        <div onClick={() => setOpen(false)} className="h-full w-full"></div>
      </div>
    </>
  );
};

export default FloatingCart;
