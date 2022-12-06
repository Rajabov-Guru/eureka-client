import React, { FC } from "react";
import Input from "../../../component/Input/Input";
import Button from "../../../component/Button/Button";
import { useAppDispatch } from "../../../app/hooks";
import { useRegistrationMutation } from "../authApiSlice";
import { setCredentials } from "../authSlice";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorReply from "../../../component/Error/ErrorReply";

export interface FormProps {
  postSubmit: () => void;
}

export type Inputs = {
  nickname: string;
  password: string;
};

const RegistrationForm: FC<FormProps> = ({ postSubmit }) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [register, { isLoading }] = useRegistrationMutation();

  const handleRegistration: SubmitHandler<Inputs> = async (data) => {
    try {
      const userData = await register(data).unwrap();
      dispatch(setCredentials(userData));
      postSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{ fontSize: 30, letterSpacing: 2 }}>Registration</h1>
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
      <Button fullWidth handleClick={handleSubmit(handleRegistration)}>
        {isLoading ? "Loading..." : "OK"}
      </Button>
    </>
  );
};

export default RegistrationForm;
