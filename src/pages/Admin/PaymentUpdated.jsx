import { useState } from "react";
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import {
  useGetAllOrdersQuery,
  useUpdatePaymentStatusMutation,
} from "../../redux/features/orderSlice/orderApi";
const PaymentUpdated = () => {
  const [days, setDays] = useState("all");

  const { data: orders = [], isLoading, refetch } = useGetAllOrdersQuery(days);
  const [updatePaymentStatus] = useUpdatePaymentStatusMutation();
  const handleCopy = async (text, message) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(message);
    } catch (error) {
      toast.error(error?.message || "Copy failed!");
    }
  };
  const handleApprove = async (id) => {
    await updatePaymentStatus({
      id,
      paymentStatus: "Approved",
    });
    refetch();
  };
  const handleReject = async (id) => {
    await updatePaymentStatus({
      id,
      paymentStatus: "Rejected",
    });
  };
  if (isLoading)
    return <span className="loading loading-spinner loading-lg"></span>;

  return (
    <>
      <div className="mb-2">
        <select
          className="select select-bordered"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="7">Last 7 Days</option>
          <option value="15">Last 15 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 3 Months</option>
          <option value="all">All Orders</option>
        </select>
      </div>
      <div className="overflow-x-auto rounded-xl border border-base-300 bg-base-100">
        <table className="table table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Order</th>
              <th>Transition</th>
              {/* <th>Email</th> */}
              <th>Phone</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Order Status</th>
              <th>Date</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="font-semibold">
                    {order?.orderId.slice(20, 28)}
                  </div>

                  <div className="text-xs">
                    <span
                      className={`badge ${
                        order.paymentMethod === "Cash on Delivery"
                          ? "badge-success"
                          : "badge-secondary"
                      }`}
                    >
                      {order.paymentMethod}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <span
                      className="max-w-30 truncate"
                      title={order.transactionId}
                    >
                      {order.transactionId}
                    </span>

                    <button
                      className="btn btn-xs btn-ghost"
                      onClick={() =>
                        handleCopy(
                          order.transactionId,
                          "Transaction ID copied!",
                        )
                      }
                    >
                      <FaCopy />
                    </button>
                  </div>
                </td>
                {/* <td>
                <div className="font-semibold">{order.customer.name}</div>

                <div className="text-xs text-gray-500">{order.userEmail}</div>
              </td> */}

                <td>{order.customer.phone?.slice(8 - 11)}</td>

                <td className="text-sm">৳ {order.total}</td>

                <td>
                  <span
                    className={`badge ${
                      order.paymentStatus === "Approved"
                        ? "badge-success"
                        : order.paymentStatus === "Rejected"
                          ? "badge-error"
                          : "badge-warning"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>

                <td>
                  <span
                    className={`badge ${
                      order.orderStatus === "Delivered"
                        ? "badge-success"
                        : order.orderStatus === "Pending"
                          ? "badge-warning"
                          : "badge-info"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </td>

                <td>{new Date(order.createdAt).toLocaleDateString()}</td>

                <td>
                  <div className="flex gap-2 justify-center">
                    <button className="btn btn-sm btn-info">View</button>

                    <button
                      onClick={() => handleApprove(order._id)}
                      className="btn btn-sm btn-success"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(order._id)}
                      className="btn btn-sm btn-error"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentUpdated;
