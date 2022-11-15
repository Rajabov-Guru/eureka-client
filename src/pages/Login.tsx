import React from "react";
import Layout from "../component/common/Layout/Layout";
import Stack from "../component/common/Stack/Stack";
import Input from "../component/UI/Input/Input";
import Button from "../component/UI/Button/Button";
import { Link } from "react-router-dom";
import { paths } from "../routing/routes";

const Login = () => {
  return (
    <Layout centered>
      <Stack spacing={2}>
        <h1 style={{ fontSize: 30, letterSpacing: 2 }}>Login</h1>
        <Input placeholder="nickname" />
        <Input placeholder="password" />
        <Button fullWidth>OK</Button>
        <Link to={paths.REGISTRATION} style={{ color: "white" }}>
          Registration
        </Link>
      </Stack>
    </Layout>
  );
};

export default Login;
