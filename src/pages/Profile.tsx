import React, { useState } from "react";
import BoardCard from "../features/boards/BoardCard/BoardCard";
import { paths } from "../routing/routes";
import Grid from "../component/Grid/Grid";
import Stack from "../component/Stack/Stack";
import ProfileCard from "../features/user/ProfileCard/ProfileCard";
import BoardLayout from "../component/Layout/BoardLayout/BoardLayout";
import Button from "../component/Button/Button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  removeCredentials,
  selectCurrentUser,
} from "../features/auth/authSlice";
import { useGetBoardsByIdQuery } from "../features/boards/boardsApiSlice";
import { useLogoutMutation } from "../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading/Loading";
import AddBoardForm from "../features/boards/forms/AddBoardForm";
import { User } from "../types/main";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isAdding, setIsAdding] = useState<boolean>(false);

  const user: User = useAppSelector(selectCurrentUser) as User;

  const { data: boards = [], isLoading } = useGetBoardsByIdQuery(user?.id);

  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    await logout();
    dispatch(removeCredentials());
    navigate(paths.WELCOME, { replace: true });
  };

  if (isLoading) return <Loading />;

  return (
    <BoardLayout>
      <Stack spacing={1}>
        <div>
          {user && <ProfileCard user={user} />}
          <Button handleClick={logoutHandler}>Logout</Button>
        </div>
        <Grid rows={5}>
          {boards.map((board) => (
            <BoardCard key={board.id} to={`${paths.MY_BOARDS}/${board.id}`}>
              {board.name}
            </BoardCard>
          ))}
          {!isAdding ? (
            <Button fullWidth handleClick={() => setIsAdding(true)}>
              <Stack>
                <div style={{ fontSize: 30 }}>+</div>
              </Stack>
            </Button>
          ) : (
            <AddBoardForm postSubmit={() => setIsAdding(false)} />
          )}
        </Grid>
      </Stack>
    </BoardLayout>
  );
};

export default Profile;
