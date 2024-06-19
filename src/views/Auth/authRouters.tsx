import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../routes/routConstants";
import Register from "./RegisterationForm";
import Login from "./LoginForm";
import { RouterProps } from "../../types/routerTypes";

const authRouter = () => {
  const routes: RouterProps[] = [
    { path: AppRoutes.LOGIN, component: <Login /> },
    { path: AppRoutes.REGISTER, component: <Register /> }
  ];

  return (
    <Routes>
      {routes.map(({ component, path }) => (
        <Route path={path} key={path} element={component} />
      ))}
      <Route path="*" element={<Navigate to={AppRoutes.DASHBOARD} />} />
    </Routes>
  );
};

export default authRouter;
