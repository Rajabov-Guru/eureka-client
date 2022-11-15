import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={Date.now()}
          path={route.route}
          element={<route.Component />}
        />
      ))}
      <Route path="/*" element={<Navigate to="/my-boards" />} />
    </Routes>
  );
};

export default AppRouter;
