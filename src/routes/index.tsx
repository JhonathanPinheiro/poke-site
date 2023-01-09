import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "@pages/Home";

type RouteType = Array<{
  path: string;
  element: () => JSX.Element;
}>;

const routes: RouteType = [
  {
    path: "/",
    element: Home,
  },
];

export function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.path} {...route} element={<route.element />} />
        );
      })}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
