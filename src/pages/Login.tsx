import React, { useState } from "react";
import Layout from "../component/Layout/Layout";
import Stack from "../component/Stack/Stack";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../routing/routes";
import { useAppDispatch } from "../app/hooks";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [nickname, setNick] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const userData = await login({ nickname, password }).unwrap();
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
        <h1 style={{ fontSize: 30, letterSpacing: 2 }}>Login</h1>
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
        <Button fullWidth handleClick={handleLogin}>
          {isLoading ? "Loading..." : "OK"}
        </Button>
        <Link to={paths.REGISTRATION} style={{ color: "white" }}>
          Registration
        </Link>
      </Stack>
    </Layout>
  );
};

export default Login;
