import React, { useState } from "react";
import Layout from "../component/Layout/Layout";
import Input from "../component/Input/Input";
import Stack from "../component/Stack/Stack";
import Button from "../component/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../routing/routes";
import { useRegistrationMutation } from "../features/auth/authApiSlice";
import { useAppDispatch } from "../app/hooks";
import { setCredentials } from "../features/auth/authSlice";

const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nickname, setNick] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [register, { isLoading }] = useRegistrationMutation();

  const handleRegistration = async () => {
    try {
      const userData = await register({ nickname, password }).unwrap();
      dispatch(setCredentials(userData));
      setNick("");
      setPassword("");
      navigate(paths.MY_BOARDS, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout centered>
      <Stack spacing={2}>
        <h1 style={{ fontSize: 30, letterSpacing: 2 }}>Registration</h1>
        <Input
          value={nickname}
          placeholder="nickname"
          onChange={(e) => {
            setNick(e.target.value);
          }}
        />
        <Input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button fullWidth handleClick={handleRegistration}>
          {isLoading ? "Loading..." : "OK"}
        </Button>
        <Link to={paths.LOGIN} style={{ color: "white" }}>
          Login
        </Link>
      </Stack>
    </Layout>
  );
};

export default Registration;
