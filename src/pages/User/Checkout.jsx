import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
const Checkout = () => {
  const { carts } = useSelector((state) => state.cart);

  const totalPrice = carts.reduce(
    (total, item) => total + (item.offeredPrice || item.price) * item.quantity,
    0,
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order Data:", {
      customer: form,
      products: carts,
      total: totalPrice + 80,
    });

    alert("Order Placed Successfully 🎉");
  };

  if (carts?.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">No Items in Cart 😢</h2>
        <Link to="/" className="btn btn-warning mt-5 text-white">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        to="/cart"
        className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:underline"
      >
        <FaArrowLeft />
        Back to Cart
      </Link>
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border p-6 shadow-md"
        >
          <h3 className="text-xl font-bold mb-4">Delivery Address</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City / District"
            className="input input-bordered w-full"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          {/* Payment */}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Payment Method</h3>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              Cash on Delivery (COD)
            </label>

            <label className="flex items-center gap-2 mt-2">
              <input type="radio" name="payment" />
              bKash / Nagad (Coming Soon)
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-full text-white mt-4"
          >
            Place Order
          </button>
        </form>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="rounded-2xl border p-6 shadow-md h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="space-y-3 max-h-60 overflow-y-auto">
            {carts.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ৳ {(item.offeredPrice || item.price) * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>৳ {totalPrice}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>৳ 80</span>
          </div>

          <div className="flex justify-between text-xl font-bold mt-3">
            <span>Total</span>
            <span>৳ {totalPrice + 80}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
