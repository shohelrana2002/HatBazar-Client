import { useEffect, useState } from "react";
import axiosPublic from "../../api/axiosPublic";
import { FaBoxOpen, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";
import toast from "react-hot-toast";
import { socket } from "../../socket/socket";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMyOrders = async () => {
    try {
      const { data } = await axiosPublic.get("/api/orders/my-orders", {
        withCredentials: true,
      });
      console.log(data);
      setOrders(data.orders || data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getMyOrders();
  }, []);

  useEffect(() => {
    const handler = (data) => {
      console.log("✅ EVENT RECEIVED:", data);

      toast.success(`Payment ${data.paymentStatus}`);

      getMyOrders();
    };

    socket.on("payment-status-updated", handler);

    return () => {
      socket.off("payment-status-updated", handler);
    };
  }, []);

  const paymentBadge = (status) => {
    switch (status) {
      case "Approved":
        return "badge badge-success";
      case "Rejected":
        return "badge badge-error";
      default:
        return "badge badge-warning";
    }
  };

  const orderBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "badge badge-success";
      case "Processing":
        return "badge badge-info";
      case "Shipped":
        return "badge badge-primary";
      case "Cancelled":
        return "badge badge-error";
      default:
        return "badge badge-warning";
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-72">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (orders?.length === 0) {
    return (
      <div className="hero min-h-[60vh] bg-base-100 rounded-xl shadow">
        <div className="hero-content text-center">
          <div>
            <FaBoxOpen className="text-7xl mx-auto text-gray-300 mb-4" />
            <h2 className="text-3xl font-bold">No Orders Found</h2>
            <p className="text-gray-500 mt-2">
              You haven't placed any orders yet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">My Orders ({orders.length})</h2>

      <div className="space-y-6">
        {orders?.map((order, index) => (
          <div
            key={order._id || index}
            className="bg-base-100 rounded-xl shadow-lg border"
          >
            {/* Header */}
            <div className="border-b p-5 flex flex-col lg:flex-row justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg">#{order.orderId}</h3>

                <p className="flex items-center gap-2 text-sm mt-2 text-gray-500">
                  <FaCalendarAlt />
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <span className={paymentBadge(order.paymentStatus)}>
                  {order.paymentStatus}
                </span>

                <span className={orderBadge(order.orderStatus)}>
                  {order.orderStatus}
                </span>
              </div>
            </div>

            {/* Products */}
            <div className="p-5 space-y-4">
              {order.products.map((product) => (
                <div
                  key={product.productId}
                  className="flex items-center gap-4 border rounded-lg p-3"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg object-cover border"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold">{product.name}</h4>

                    <p className="text-sm text-gray-500">
                      Quantity : {product.quantity}
                    </p>

                    <p className="font-bold text-primary mt-1">
                      ৳ {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t p-5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-1">
                <p>
                  Payment :
                  <span className="font-semibold ml-2">
                    {order.paymentMethod}
                  </span>
                </p>

                <p>
                  Delivery :
                  <span className="font-semibold ml-2">
                    ৳ {order.deliveryCharge}
                  </span>
                </p>
              </div>

              <div className="text-right">
                <p className="flex items-center justify-end gap-2 font-bold text-xl">
                  <FaMoneyBillWave />৳ {order.total}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
