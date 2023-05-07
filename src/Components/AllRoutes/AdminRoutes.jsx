import React from "react";
import { useRoutes } from "react-router-dom";
import Private from "../Private";
 import Adpage from "../Admin/Adpage"
 import Adsignup from "../Admin/Adsignup"
 import Settings from "../Admin/Settings"
import OrderDetail from "../Admin/OrderDetail"
import CustomersDetail from "../Admin/CustomersDetail"
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import SellerDetail from "../Admin/Sellers/SellerDetail";
import Merchants from "../Admin/Merchants" 
import Customers from "../Admin/Customers" 
import Products from "../Admin/Products" 
import Orders from "../Admin/Orders" 
import ProductCategories from "../Admin/ProductCategories"
import Categories from "../Admin/Categories"
import UpdateStatus from "../Admin/UpdateStatus";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <AdminDashboard />
        },
        {
            path: "/user",
            element: <Adsignup />,
          },
        {
            path: "/order-detail/:id",
            element: <OrderDetail />,
          },
        {
            path: "/merchant-detail/:id",
            element: <SellerDetail />,
          },
        {
            path: "/merchant",
            element: <Merchants />,
          },
        {
            path: "/customers",
            element: <Customers />,
          },
        {
            path: "/products",
            element: <Products />,
          },
        {
            path: "/orders",
            element: <Orders />,
          },
        {
            path: "/update-status/:id",
            element: <UpdateStatus />,
          },
        {
            path: "/product-categories",
            element: <ProductCategories />,
          },
        {
            path: "/products/:id",
            element: <Categories />,
          },
        {
            path: "/customer-detail/:id",
            element: <CustomersDetail />,
          },
        {
            path: "/settings",
            element: <Settings />,
          },
      ],
    },
  ]);

  return element;
};

export default AllRoutes;
