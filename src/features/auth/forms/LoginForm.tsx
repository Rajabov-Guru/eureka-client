import React, { FC } from "react";
import Input from "../../../component/Input/Input";
import Button from "../../../component/Button/Button";
import { FormProps, Inputs } from "./RegistrationForm";
import { useAppDispatch } from "../../../app/hooks";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../authApiSlice";
import { setCredentials } from "../authSlice";
import { ErrorMessage } from "@hookform/error-message";
import ErrorReply from "../../../component/Error/ErrorReply";

const LoginForm: FC<FormProps> = ({ postSubmit }) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin: SubmitHandler<Inputs> = async (data) => {
    try {
      const userData = await login(data).unwrap();
      dispatch(setCredentials(userData));
      postSubmit();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 style={{ fontSize: 30, letterSpacing: 2 }}>Login</h1>
      <div>
        <Controller
          name="nickname"
          control={control}
          rules={{ required: "Nick is required", minLength: 4 }}
          render={({ field }) => <Input {...field} placeholder="nickname" />}
        />
        <ErrorMessage
          errors={errors}
          name="nickname"
          render={({ message }) => <ErrorReply message={message} />}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required", minLength: 4 }}
          render={({ field }) => (
            <Input {...field} type="password" placeholder="password" />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <ErrorReply message={message} />}
        />
      </div>
      <Button fullWidth handleClick={handleSubmit(handleLogin)}>
        {isLoading ? "Loading..." : "OK"}
      </Button>
    </>
  );
};

export default LoginForm;
