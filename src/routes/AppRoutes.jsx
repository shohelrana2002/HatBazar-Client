import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/User/Cart";
import Home from "../pages/User/Home";
import Checkout from "../pages/User/Checkout";

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
    ],
  },
]);
