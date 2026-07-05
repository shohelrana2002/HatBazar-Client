import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/User/Cart";
import Home from "../pages/User/Home";
import Checkout from "../pages/User/Checkout";
import Payments from "../payment/Payments";
import Success from "../payment/Success";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";

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
        path: "success-order/:orderId",
        element: <Success />,
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
