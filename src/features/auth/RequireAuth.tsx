import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../routing/routes";
import { useAppSelector } from "../../app/hooks";
import { selectIsAuth, selectIsLoading } from "./authSlice";
import Loading from "../../component/Loading/Loading";

const RequireAuth = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const isAuth = useAppSelector(selectIsAuth);
  return isLoading ? (
    <Loading />
  ) : isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={paths.LOGIN} replace />
  );
};

export default RequireAuth;
