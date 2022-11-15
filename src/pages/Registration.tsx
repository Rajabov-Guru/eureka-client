import React from "react";
import Layout from "../component/common/Layout";
import Input from "../component/UI/Input";
import Stack from "../component/common/Stack";
import Button from "../component/UI/Button";
import { Link } from "react-router-dom";
import { paths } from "../routing/routes";

const Registration = () => {
  return (
    <Layout centered>
      <Stack spacing={2}>
        <h1 style={{ fontSize: 30, letterSpacing: 2 }}>Registration</h1>
        <Input placeholder="nickname" />
        <Input placeholder="password" />
        <Button fullWidth>OK</Button>
        <Link to={paths.LOGIN} style={{ color: "white" }}>
          Login
        </Link>
      </Stack>
    </Layout>
  );
};

export default Registration;
