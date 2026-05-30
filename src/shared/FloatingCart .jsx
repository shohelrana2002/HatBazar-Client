import { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from "../redux/features/cart/cartSlice";
import { Link } from "react-router";

const FloatingCart = () => {
  const [open, setOpen] = useState(false);
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = carts.reduce(
    (total, item) => total + item.offeredPrice * item.quantity,
    0,
  );
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
            {carts?.length}
          </span>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-99999 transition-all duration-300 ${
          open ? "visible bg-black/40 opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Sidebar Cart show */}
        <div
          className={`absolute right-0 top-0 h-full w-full bg-white shadow-2xl transition-all duration-500 sm:w-105 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-base-300 px-5 py-4">
            <div>
              <h2 className="text-2xl font-bold">Shopping Cart</h2>

              <p className="text-sm text-gray-500">{carts?.length}</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="btn btn-circle btn-sm bg-orange-500 text-white border-none hover:bg-orange-600"
            >
              <FaTimes />
            </button>
          </div>

          {/* Cart Items */}
          <div className="h-[calc(100%-180px)] space-y-4 overflow-y-auto p-5">
            {carts?.map((cart) => (
              <div
                key={cart?._id}
                className="flex gap-4 rounded-2xl border border-base-300 p-3"
              >
                {/* Image */}
                <img
                  src={cart?.image}
                  alt={cart?.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between">
                  {/* Name */}
                  <div>
                    <h3 className="line-clamp-1 text-lg font-semibold">
                      {cart?.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      ৳ {cart?.offeredPrice || cart?.price}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-3 flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        disabled={cart?.quantity === 1}
                        onClick={() => dispatch(decreaseQuantity(cart?._id))}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-lg font-bold transition-all duration-300 ${
                          cart?.quantity === 1
                            ? "cursor-not-allowed bg-gray-200 text-gray-400"
                            : "bg-base-200 hover:bg-orange-500 hover:text-white"
                        }`}
                      >
                        -
                      </button>

                      <span className="min-w-5 text-center font-semibold">
                        {cart?.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQuantity(cart?._id))}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-base-200 text-lg font-bold hover:bg-orange-500 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => dispatch(removeCart(cart?._id))}
                      className="text-sm font-medium cursor-pointer text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 w-full border-t border-base-300 bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Total</h3>

              <p className="text-2xl font-black text-orange-500">
                ৳ {totalPrice}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                to={"/cart"}
                className="btn rounded-xl cursor-pointer border-none bg-base-200"
              >
                View Cart
              </Link>

              <Link
                to={"/checkOut"}
                className="btn rounded-xl border-none bg-orange-500 text-white hover:bg-orange-600"
              >
                Checkout
              </Link>
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
