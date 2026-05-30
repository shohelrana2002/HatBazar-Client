import { useSelector, useDispatch } from "react-redux";
import {
  removeCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/features/cart/cartSlice";

import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  const totalPrice = carts.reduce(
    (total, item) => total + (item.offeredPrice || item.price) * item.quantity,
    0,
  );

  if (carts.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">Your Cart is Empty 😢</h2>
        <Link to="/" className="btn btn-warning mt-5 text-white">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <Link
        to="/"
        className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:underline"
      >
        <FaArrowLeft />
        Back to Shop
      </Link>
      <h2 className="text-3xl font-bold mb-6">
        Shopping Cart ({carts.length})
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE - PRODUCTS */}
        <div className="lg:col-span-2 space-y-4">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="flex items-center gap-4 rounded-2xl border p-4 shadow-sm"
            >
              {/* Image */}
              <img
                src={cart.image}
                className="h-24 w-24 rounded-xl object-cover"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{cart.name}</h3>

                <p className="text-sm text-gray-500">
                  ৳ {cart.offeredPrice || cart.price}
                </p>

                {/* Quantity */}
                <div className="mt-3 flex items-center gap-3">
                  <button
                    disabled={cart.quantity === 1}
                    onClick={() => dispatch(decreaseQuantity(cart._id))}
                    className={`h-8 w-8 rounded bg-gray-200 ${
                      cart.quantity === 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    -
                  </button>

                  <span className="font-semibold">{cart.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(cart._id))}
                    className="h-8 w-8 rounded bg-gray-200 hover:bg-orange-500 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeCart(cart._id))}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="rounded-2xl border p-5 shadow-md h-fit">
          <h3 className="text-2xl font-bold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{carts.length}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>৳ {totalPrice}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Delivery</span>
            <span>৳ 80</span>
          </div>

          <hr />

          <div className="flex justify-between text-xl font-bold mt-4">
            <span>Total</span>
            <span>৳ {totalPrice + 80}</span>
          </div>

          {/* Coupon */}
          <input
            type="text"
            placeholder="Coupon code"
            className="input input-bordered w-full mt-4"
          />

          <button className="btn btn-outline w-full mt-2">Apply Coupon</button>

          {/* Checkout */}
          <Link
            to={"/checkOut"}
            className="btn btn-warning w-full mt-4 text-white"
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
