import React from "react";
import Layout from "../component/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../routing/routes";
import RegistrationForm from "../features/auth/forms/RegistrationForm";
import Stack from "../component/Stack/Stack";

const Registration = () => {
  const navigate = useNavigate();

  const postSubmit = () => {
    navigate(paths.MY_BOARDS, { replace: true });
  };

  return (
    <Layout centered>
      <Stack spacing={2}>
        <RegistrationForm postSubmit={postSubmit} />
        <Link to={paths.LOGIN} style={{ color: "white" }} replace>
          Login
        </Link>
      </Stack>
    </Layout>
  );
};

export default Registration;
