import {
  FaShoppingBag,
  FaHeart,
  FaMoneyBillWave,
  FaTruck,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Welcome Back 👋</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body items-center">
            <FaShoppingBag className="text-4xl text-primary" />
            <h2 className="text-xl font-bold">12</h2>
            <p>Total Orders</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body items-center">
            <FaTruck className="text-4xl text-success" />
            <h2 className="text-xl font-bold">3</h2>
            <p>Running Orders</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body items-center">
            <FaHeart className="text-4xl text-error" />
            <h2 className="text-xl font-bold">7</h2>
            <p>Wishlist</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body items-center">
            <FaMoneyBillWave className="text-4xl text-warning" />
            <h2 className="text-xl font-bold">৳ 25,000</h2>
            <p>Total Purchase</p>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow mt-10">
        <div className="card-body">
          <h2 className="card-title">Recent Orders</h2>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#1223</td>
                  <td>05 Jul</td>
                  <td>
                    <span className="badge badge-warning">Processing</span>
                  </td>
                  <td>৳1200</td>
                </tr>

                <tr>
                  <td>#1224</td>
                  <td>06 Jul</td>
                  <td>
                    <span className="badge badge-success">Delivered</span>
                  </td>
                  <td>৳2200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
