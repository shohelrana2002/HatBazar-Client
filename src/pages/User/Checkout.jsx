import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { clearCart } from "../../redux/features/cart/cartSlice";
import axios from "axios";

const Checkout = () => {
  const { carts } = useSelector((state) => state.cart);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalPrice = carts.reduce(
    (total, item) => total + (item.offeredPrice || item.price) * item.quantity,
    0,
  );

  const onSubmit = async (data) => {
    const customer = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
    };

    const products = carts.map((item) => ({
      productId: item._id || item.id,
      name: item.name,
      image: item.image,
      price: item.offeredPrice || item.price,
      quantity: item.quantity,
    }));

    const orderData = {
      customer,
      products,
      paymentMethod: data.payment,
      paymentStatus: "Pending",
      orderStatus: "Pending",
      subtotal: totalPrice,
      deliveryCharge: 80,
      total: totalPrice + 80,
      userEmail: data?.email,
    };

    try {
      if (data.payment === "Cash on Delivery") {
        const res = await axios.post(
          "http://localhost:3000/api/orders",
          orderData,
          {
            withCredentials: true,
          },
        );

        if (res.data.success) {
          toast.success("Order Placed Successfully 🎉");
          dispatch(clearCart());
          navigate(`/success-order/${res?.data?.orderId}`);
        }
      } else {
        const res = await axios.post(
          "http://localhost:3000/api/orders",
          orderData,
          {
            withCredentials: true,
          },
        );
        navigate("/payment", {
          state: { ...orderData, orderId: res.data.orderId },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  if (!carts.length) {
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

      <h2 className="mb-6 text-3xl font-bold">Checkout</h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* LEFT */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-2xl border p-6 shadow-md"
        >
          <h3 className="mb-4 text-xl font-bold">Delivery Address</h3>

          <div>
            <input
              className="input input-bordered w-full"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              className="input input-bordered w-full"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
              })}
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              {...register("email")}
            />
          </div>

          <div>
            <input
              className="input input-bordered w-full"
              placeholder="Address"
              {...register("address", {
                required: "Address is required",
              })}
            />

            {errors.address && (
              <p className="mt-1 text-sm text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          <div>
            <input
              className="input input-bordered w-full"
              placeholder="City / District"
              {...register("city", {
                required: "City is required",
              })}
            />

            {errors.city && (
              <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
            )}
          </div>

          <div>
            <input
              className="input input-bordered w-full"
              placeholder="Postal Code"
              {...register("postalCode")}
            />
          </div>

          <div className="mt-4">
            <h3 className="mb-2 font-bold">Payment Method</h3>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="Cash on Delivery"
                {...register("payment")}
                defaultChecked
              />
              Cash on Delivery (COD)
            </label>

            <label className="mt-2 flex items-center gap-2">
              <input type="radio" value="bKash" {...register("payment")} />
              bKash
            </label>

            <label className="mt-2 flex items-center gap-2">
              <input type="radio" value="Nagad" {...register("payment")} />
              Nagad
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-warning mt-4 w-full text-white"
          >
            Place Order
          </button>
        </form>

        {/* RIGHT */}
        <div className="h-fit rounded-2xl border p-6 shadow-md">
          <h3 className="mb-4 text-xl font-bold">Order Summary</h3>

          <div className="max-h-60 space-y-3 overflow-y-auto">
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

          <div className="mb-2 flex justify-between">
            <span>Subtotal</span>
            <span>৳ {totalPrice}</span>
          </div>

          <div className="mb-2 flex justify-between">
            <span>Delivery</span>
            <span>৳ 80</span>
          </div>

          <div className="mt-3 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>৳ {totalPrice + 80}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
