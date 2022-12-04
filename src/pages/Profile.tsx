import React from "react";
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

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(selectCurrentUser);

  const { data: boards = [], isLoading } = useGetBoardsByIdQuery(
    user?.id || 10
  );
  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    await logout();
    dispatch(removeCredentials());
    navigate(paths.WELCOME, { replace: true });
  };

  return (
    <BoardLayout>
      <Stack spacing={1}>
        <div>
          {user && <ProfileCard user={user} />}
          <Button handleClick={logoutHandler}>Logout</Button>
        </div>
        <Grid rows={5}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {boards.map((board) => (
                <BoardCard key={board.id} to={`${paths.MY_BOARDS}/${board.id}`}>
                  {board.name}
                </BoardCard>
              ))}
              <Button fullWidth>
                <Stack>
                  <div style={{ fontSize: 30 }}>+</div>
                </Stack>
              </Button>
            </>
          )}
        </Grid>
      </Stack>
    </BoardLayout>
  );
};

export default Profile;
