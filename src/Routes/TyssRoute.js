import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./../pages/Home";
import Login from "./../components/auth/Login";
import Signup from "./../components/auth/Signup";
import PageNotFound from "./../pages/PageNotFound";
import DashBoard from "./../components/users/DashBoard";
import Users from "../components/users/Users";

const TyssRoute = () => {
  let OurRoutes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
      path: "/dashboard",
      element: <DashBoard />,
      children: [{ path: "users", element: <Users /> }],
    },
    { path: "/pageNotFound", element: <PageNotFound /> },
  ]);
  return OurRoutes;
};

export default TyssRoute;
