import React from "react";
import Layout from "../component/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../routing/routes";
import LoginForm from "../features/auth/forms/LoginForm";
import Stack from "../component/Stack/Stack";

const Login = () => {
  const navigate = useNavigate();

  const postSubmit = () => {
    navigate(paths.MY_BOARDS, { replace: true });
  };

  return (
    <Layout centered>
      <Stack spacing={2}>
        <LoginForm postSubmit={postSubmit} />
        <Link to={paths.REGISTRATION} style={{ color: "white" }} replace>
          Registration
        </Link>
      </Stack>
    </Layout>
  );
};

export default Login;
