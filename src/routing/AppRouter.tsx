import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./routes";
import RequireAuth from "../features/auth/RequireAuth";
import CheckAuth from "../features/auth/CheckAuth";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<CheckAuth />}>
        <Route element={<RequireAuth />}>
          {protectedRoutes.map((route) => (
            <Route
              key={Date.now()}
              path={route.route}
              element={<route.Component />}
            />
          ))}
          <Route path="/*" element={<Navigate to="/profile" />} />
        </Route>
        {publicRoutes.map((route) => (
          <Route
            key={Date.now()}
            path={route.route}
            element={<route.Component />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
