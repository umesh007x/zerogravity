import React, { useCallback } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import { RouterProps } from "../types/routerTypes";

const AppRouter = () => {
  const generateRoute = useCallback((routes?: RouterProps[]) => {
    if (!routes?.length) return <></>;

    return routes?.map(({ component, path, children }) => (
      <Route key={path} path={path} element={component}>
        {generateRoute(children)}
      </Route>
    ));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>{generateRoute(routes)}</Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
