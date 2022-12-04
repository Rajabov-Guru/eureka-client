import React, { FC } from "react";
import Input from "../../../component/Input/Input";
import Button from "../../../component/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../../routing/routes";
import Stack from "../../../component/Stack/Stack";
import { useAppDispatch } from "../../../app/hooks";
import { useRegistrationMutation } from "../authApiSlice";
import { setCredentials } from "../authSlice";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface RegistrationFormProps {
  postSubmit: () => void;
}

export type Inputs = {
  nickname: string;
  password: string;
};

const RegistrationForm: FC<RegistrationFormProps> = ({ postSubmit }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [regis, { isLoading }] = useRegistrationMutation();

  const handleRegistration: SubmitHandler<Inputs> = async (data) => {
    try {
      const userData = await regis(data).unwrap();
      dispatch(setCredentials(userData));
      navigate(paths.MY_BOARDS, { replace: true });
      postSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack spacing={2}>
      <h1 style={{ fontSize: 30, letterSpacing: 2 }}>Registration</h1>
      <Controller
        name="nickname"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input placeholder="nickname" />}
      />
      <Input placeholder="nickname" />
      <Input type="password" placeholder="password" />
      <Button fullWidth handleClick={handleSubmit(handleRegistration)}>
        {isLoading ? "Loading..." : "OK"}
      </Button>
      <Link to={paths.LOGIN} style={{ color: "white" }}>
        Login
      </Link>
    </Stack>
  );
};

export default RegistrationForm;
