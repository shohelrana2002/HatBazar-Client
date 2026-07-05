import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/orders/${orderId}`,
          {
            withCredentials: true,
          },
        );

        setOrder(res?.data?.order);
      } catch (error) {
        console.log(error);
      }
    };

    loadOrder();
  }, [orderId]);

  if (!order) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">
        <div className="flex justify-center">
          <FaCheckCircle className="text-7xl text-green-500" />
        </div>

        <h1 className="mt-5 text-center text-4xl font-bold">
          Order Successful
        </h1>

        <p className="mt-3 text-center text-gray-500">
          Thank you for shopping with us.
        </p>

        <div className="mt-8 space-y-3 rounded-xl bg-base-200 p-5">
          <div className="flex justify-between">
            <span>Order ID</span>
            <span className="font-bold">{order.orderId}</span>
          </div>

          <div className="flex justify-between">
            <span>Customer</span>
            <span>{order.customer.name}</span>
          </div>

          <div className="flex justify-between">
            <span>Payment</span>
            <span>{order.paymentMethod}</span>
          </div>

          <div className="flex justify-between">
            <span>Payment Status</span>

            <span className="badge badge-warning">{order.paymentStatus}</span>
          </div>

          <div className="flex justify-between">
            <span>Total</span>

            <span className="font-bold text-success">৳ {order.total}</span>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link to="/" className="btn btn-success flex-1 text-white">
            Continue Shopping
          </Link>

          <Link to="/my-orders" className="btn btn-outline flex-1">
            My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
