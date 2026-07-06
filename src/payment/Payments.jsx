import { useLocation, useNavigate } from "react-router";
import { FaCopy } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoBagCheck } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cart/cartSlice";

const Payments = () => {
  const { state } = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const copyNumber = (number) => {
    navigator.clipboard.writeText(number);
    toast.success("Number Copied");
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await axios.get(
        `http://localhost:3000/api/orders/${state.orderId}`,
        {
          withCredentials: true,
        },
      );

      if (res?.data?.order?.paymentStatus === "Approved") {
        toast.success("Payment Verified");
        navigate(`/success-order/${res?.data?.order?.orderId}`);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate, state?.orderId]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const res = await axios.patch(
        `http://localhost:3000/api/orders/${state.orderId}/payment`,
        {
          senderNumber: data?.senderNumber,
          transactionId: data?.transactionId,
        },
        {
          withCredentials: true,
        },
      );

      if (res?.data?.success) {
        toast.success("Payment Submitted Successfully");
        dispatch(clearCart());
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed");
      setIsSubmitting(false);
    }
  };

  //   const onSubmit = async (data) => {
  //     try {
  //       const res = await axios.patch(
  //         `http://localhost:3000/api/orders/${state.orderId}/payment`,
  //         {
  //           senderNumber: data?.senderNumber,
  //           transactionId: data?.transactionId,
  //         },
  //         {
  //           withCredentials: true,
  //         },
  //       );

  //       if (res.data.success) {
  //         toast.success("Payment Submitted Successfully");
  //         dispatch(clearCart());
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Failed");
  //     }
  //   };

  if (!state) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-xl border bg-white p-10 shadow-xl text-center">
          <h2 className="text-3xl font-bold text-red-500">
            Invalid Payment Request
          </h2>

          <button
            onClick={() => navigate("/checkout")}
            className="btn btn-warning mt-5 text-white"
          >
            Back To Checkout
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT */}

          <div className="rounded-3xl bg-base-100 p-8 shadow-2xl">
            <h1 className="mb-2 text-4xl font-bold">Complete Payment</h1>

            <p className="mb-8 text-gray-500">
              Send your payment to one of the numbers below, then enter the
              Transaction ID.
            </p>

            {/* bKash */}

            <div className="mb-5 rounded-2xl border border-pink-300 bg-pink-50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-pink-600">bKash</h2>

                  <p className="mt-2 text-2xl font-bold tracking-widest">
                    01712345678
                  </p>
                </div>

                <button
                  onClick={() => copyNumber("01712345678")}
                  className="btn btn-outline btn-sm"
                >
                  <FaCopy size={18} />
                </button>
              </div>
            </div>

            {/* Nagad */}

            <div className="rounded-2xl border border-orange-300 bg-orange-50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-orange-600">Nagad</h2>

                  <p className="mt-2 text-2xl font-bold tracking-widest">
                    01812345678
                  </p>
                </div>

                <button
                  onClick={() => copyNumber("01812345678")}
                  className="btn btn-outline btn-sm"
                >
                  <FaCopy size={18} />
                </button>
              </div>
            </div>

            <div className="alert alert-info mt-8">
              {/* <ShieldCheck /> */}

              <span>
                After payment, enter your Transaction ID. Your payment will be
                verified by our team.
              </span>
            </div>
          </div>

          {/* RIGHT */}

          <div className="rounded-3xl bg-base-100 p-8 shadow-2xl">
            <h2 className="mb-6 text-3xl font-bold">Order Summary</h2>

            <div className="space-y-3">
              {state?.products?.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    ৳ {(item?.offeredPrice || item.price) * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-5" />

            <div className="flex justify-between">
              <span>Subtotal</span>

              <span>৳ {state?.subtotal}</span>
            </div>

            <div className="mt-2 flex justify-between">
              <span>Delivery</span>

              <span>৳ {state?.deliveryCharge}</span>
            </div>

            <div className="mt-5 flex justify-between text-2xl font-bold text-primary">
              <span>Total</span>

              <span>৳ {state?.total}</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block font-semibold">
                  Transaction ID
                </label>

                <div>
                  <input
                    className="input input-bordered w-full"
                    placeholder="Sender Number"
                    {...register("senderNumber", {
                      required: "Sender Number is required",
                    })}
                  />
                </div>

                <div>
                  <input
                    className="input input-bordered w-full"
                    placeholder="Transaction ID"
                    {...register("transactionId", {
                      required: "Transaction ID is required",
                    })}
                  />
                </div>

                {errors.transactionId && (
                  <p className="mt-1 text-red-500">
                    {errors.transactionId.message}
                  </p>
                )}
              </div>

              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning"
                  {...register("confirm", {
                    required:
                      "Please confirm that you have completed the payment.",
                  })}
                />

                <span>I have completed my payment.</span>
              </label>
              <div>
                <p className="mt-3 text-center text-sm text-gray-500">
                  Your payment has been submitted successfully. Please wait
                  while we verify your transaction.
                </p>
              </div>
              {errors.confirm && (
                <p className="text-red-500">{errors.confirm.message}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-warning w-full"
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <IoBagCheck />
                    Confirm Payment
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
