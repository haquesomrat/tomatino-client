import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Homepage from "../Pages/Homepage/Homepage";
import AddAFood from "../Pages/AddAFood/AddAFood";
import Food from "../Pages/Food/Food";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllFoods from "../Pages/AllFoods/AllFoods";
import MyAddedItems from "../Pages/MyAddedItems/MyAddedItems";
import Purchase from "../Pages/Purchase/Purchase";
import PrivateRoute from "./PrivateRoute";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: () =>
          fetch("https://tomatino-fntbxgyr0-haquesomrat.vercel.app/allfoods"),
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoute>
            <AddAFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateFood/:id",
        element: <UpdateFood />,
        loader: ({ params }) =>
          fetch(
            `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "/allfoods",
        element: <AllFoods />,
        loader: () =>
          fetch("https://tomatino-fntbxgyr0-haquesomrat.vercel.app/allfoods"),
      },
      {
        path: "/foodDetails/:id",
        element: <Food />,
        loader: ({ params }) =>
          fetch(
            `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/food/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/myaddeditems",
        element: (
          <PrivateRoute>
            <MyAddedItems />
          </PrivateRoute>
        ),
      },
      {
        path: "/purchasedFood/:id",
        element: (
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tomatino-fntbxgyr0-haquesomrat.vercel.app/food/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;
