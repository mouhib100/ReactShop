import React, { lazy } from "react";
import MainLayout from "../Layout/MainLayout";
import Loadable from "../components/pageLoading/Loadable";

// ==============================|| PAGES ||============================== //
const UpdateProduct = Loadable(
  lazy(() => import("../pages/UpdateProduct/UpdateProduct"))
);
const ProductDetails = Loadable(
  lazy(() => import("../pages/ProductDetails/ProductDetails"))
);
const AddProduct = Loadable(
  lazy(() => import("../pages/AddProduct/AddProduct"))
);
const NotFound = Loadable(
  lazy(() => import("../pages/NotFoundPage/NotFoundPage"))
);
const Cart = Loadable(lazy(() => import("../pages/Cart/Cart")));
const Home = Loadable(lazy(() => import("../pages/HomePage/Home")));

// ==============================|| MAIN USER ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "products",
      children: [
        {
          index: true,
          path: ":id",
          element: <ProductDetails />,
        },

        {
          path: "add",
          element: <AddProduct />,
        },
        {
          path: "update/:id",
          element: <UpdateProduct />,
        },
      ],
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ],
};

export default MainRoutes;
