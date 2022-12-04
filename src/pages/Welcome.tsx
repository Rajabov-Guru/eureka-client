import React from "react";
import Layout from "../component/Layout/Layout";
import ButtonLink from "../component/Button/ButtonLink/ButtonLink";
import { paths } from "../routing/routes";
import Stack from "../component/Stack/Stack";
import { useAppSelector } from "../app/hooks";
import { selectIsAuth } from "../features/auth/authSlice";

const Welcome = () => {
  const isAuth = useAppSelector(selectIsAuth);
  return (
    <Layout centered>
      <Stack spacing={3}>
        <h1 style={{ fontSize: 50 }}>Welcome to Eureka!</h1>
        <h1 style={{ fontSize: 30, letterSpacing: 2 }}>
          It's simple Idea Board that you can use to generate and store your
          great IDEAS!
        </h1>
        <div style={{ display: "flex", gap: 40, justifyContent: "center" }}>
          {!isAuth ? (
            <>
              <ButtonLink to={paths.REGISTRATION}>Register</ButtonLink>
              <ButtonLink to={paths.LOGIN}>Login</ButtonLink>
            </>
          ) : (
            <ButtonLink to={paths.MY_BOARDS}>Profile</ButtonLink>
          )}
        </div>
      </Stack>
    </Layout>
  );
};

export default Welcome;
