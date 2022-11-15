import React from "react";
import Layout from "../component/common/Layout";
import ButtonLink from "../component/UI/Button/ButtonLink";
import { paths } from "../routing/routes";
import Stack from "../component/common/Stack";

const Welcome = () => {
  return (
    <Layout centered>
      <Stack spacing={3}>
        <h1 style={{ fontSize: 50 }}>Welcome to Eureka!</h1>
        <h1 style={{ fontSize: 30, letterSpacing: 2 }}>
          It's simple Idea Board that you can use to generate and store your
          great IDEAS!
        </h1>
        <div style={{ display: "flex", gap: 40, justifyContent: "center" }}>
          <ButtonLink to={paths.REGISTRATION}>Register</ButtonLink>
          <ButtonLink to={paths.LOGIN}>Login</ButtonLink>
          <ButtonLink to={paths.MY_BOARDS}>Profile</ButtonLink>
        </div>
      </Stack>
    </Layout>
  );
};

export default Welcome;
