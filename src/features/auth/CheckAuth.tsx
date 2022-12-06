import React, { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setCredentials, setIsLoading } from "./authSlice";
import { useCheckAuthQuery } from "./authApiSlice";
import Loading from "../../component/Loading/Loading";
import { Outlet } from "react-router-dom";

const CheckAuth = () => {
  const dispatch = useAppDispatch();

  const { data: res, isLoading } = useCheckAuthQuery();

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading]);

  useEffect(() => {
    if (res) dispatch(setCredentials(res));
  }, [res]);

  return isLoading ? <Loading /> : <Outlet />;
};

export default CheckAuth;
