import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/User/Cart";
import Home from "../pages/User/Home";
import Checkout from "../pages/User/Checkout";
import Payments from "../payment/Payments";
import Success from "../payment/Success";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import DashboardHome from "../pages/Admin/DashboardHome";
import MangesOrders from "../pages/Admin/MangesOrders";
import PaymentUpdated from "../pages/Admin/PaymentUpdated";
import UserDashboard from "../pages/User/UserDashboard";
import Dashboard from "../pages/User/Dashboard";
import MyOrders from "../pages/User/MyOrders";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkOut",
        element: <Checkout />,
      },
      {
        path: "payment",
        element: <Payments />,
      },
      {
        path: "payment",
        element: <Payments />,
      },
      {
        path: "success-order/:orderId",
        element: <Success />,
      },
      {
        path: "user/dashboard",
        element: <UserDashboard />,
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: (
      <PrivateRoute>
        <UserDashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AdminRoutes>
          <DashboardLayout />
        </AdminRoutes>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/mange-orders",
        element: <MangesOrders />,
      },
      {
        path: "/dashboard/payments",
        element: <PaymentUpdated />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
