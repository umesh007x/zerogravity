import React from "react";
import { AppRoutes } from "./routConstants";
import { RouterProps } from "../types/routerTypes";
import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import Rent from "../views/Rent";
import AuthWrapper from "../views/Auth/AuthWrapper";
import Dashboard from "../views/Dashboard";
import Subscription from "../views/Home/Subscription";

const routes: RouterProps[] = [
  { path: AppRoutes.AUTH, component: <AuthWrapper /> },
  {
    path: AppRoutes.HOME,
    component: <Home />
  },
  {
    path: AppRoutes.RENT,
    component: <Rent />
  },
  {
    path: AppRoutes.CHART,
    component: <Dashboard />
  },
  {
    path:AppRoutes.SUBSCRIPTION,
    component: <Subscription />
  },
  { path: "*", component: <AuthWrapper /> }
];

export default routes;
