import React from "react";
import { AppRoutes } from "./routConstants";
import { RouterProps } from "../types/routerTypes";
import { Navigate } from "react-router-dom";
import Home from "../views/Home";
import Rent from "../views/Rent";
import AuthWrapper from "../views/Auth/AuthWrapper";
import Dashboard from "../views/Dashboard";
import Invoices from "../views/Invoices";

const routes: RouterProps[] = [
  { path: AppRoutes.AUTH, component: <AuthWrapper /> },
  {
    path: AppRoutes.HOME,
    component: <Home />,
    children: [
      {
        path: "",
        component: <Navigate to={AppRoutes.DASHBOARD} />
      },
      {
        path: AppRoutes.DASHBOARD,
        component: <Rent />
      }
    ]
  },
  {
    path: AppRoutes.RENT,
    component: <Rent />
  },
  {
    path: AppRoutes.INVOICES,
    component: <Invoices />
  },
  {
    path: AppRoutes.CHART,
    component: <Dashboard />
  },
  { path: "*", component: <AuthWrapper /> }
];

export default routes;
