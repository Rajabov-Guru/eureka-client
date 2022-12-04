import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsAuth, setCredentials } from "./authSlice";
import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../routing/routes";
import { useCheckAuthQuery } from "./authApiSlice";

const RequireAuth = () => {
  const dispatch = useAppDispatch();

  const tokenFromStorage = localStorage.getItem("eureka-token");
  const isAuth = useAppSelector(selectIsAuth);

  const { data: res, isLoading } = useCheckAuthQuery(undefined, {
    skip: isAuth,
  });

  useEffect(() => {
    if (res) dispatch(setCredentials(res));
  }, [res]);

  return isLoading ? (
    <p>Loading...</p>
  ) : res?.accessToken || tokenFromStorage ? (
    <Outlet />
  ) : (
    <Navigate to={paths.LOGIN} replace />
  );
};

export default RequireAuth;
