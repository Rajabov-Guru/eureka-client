import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../../component/Input/Input";
import { ErrorMessage } from "@hookform/error-message";
import ErrorReply from "../../../component/Error/ErrorReply";
import { FormProps } from "../../auth/forms/RegistrationForm";
import Button from "../../../component/Button/Button";
import Stack from "../../../component/Stack/Stack";
import { useCreateBoardMutation } from "../boardsApiSlice";
import { useAppSelector } from "../../../app/hooks";
import { selectCurrentUser } from "../../auth/authSlice";
import { BoardItem } from "../../../types/main";

interface createBoardInputs {
  name: string;
}

const AddBoardForm: FC<FormProps> = ({ postSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<createBoardInputs>();

  const user = useAppSelector(selectCurrentUser);

  const [createBoard, { isLoading }] = useCreateBoardMutation();

  const submit: SubmitHandler<createBoardInputs> = async (data) => {
    const boardData: BoardItem = { ...data, userId: Number(user?.id) };
    const newBoard = await createBoard(boardData);
    postSubmit();
  };

  return (
    <Stack>
      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required", minLength: 1 }}
        render={({ field }) => <Input {...field} placeholder="name" />}
      />
      <ErrorMessage
        errors={errors}
        name="name"
        render={({ message }) => <ErrorReply message={message} />}
      />
      <div style={{ display: "flex", gap: "10px" }}>
        <Button fullWidth handleClick={handleSubmit(submit)}>
          {isLoading ? "Loading..." : "OK"}
        </Button>
        <Button fullWidth handleClick={postSubmit}>
          Cancel
        </Button>
      </div>
    </Stack>
  );
};

export default AddBoardForm;
