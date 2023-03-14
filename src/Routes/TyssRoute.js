import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./../pages/Home";
import Login from "./../components/auth/Login";
import Signup from "./../components/auth/Signup";
import PageNotFound from "./../pages/PageNotFound";

const TyssRoute = () => {
  let Routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/pageNotFound", element: <PageNotFound /> },
  ]);
  return Routes;
};

export default TyssRoute;
