import React from "react";
import BoardCard from "../component/BoardCard/BoardCard";
import { paths } from "../routing/routes";
import Grid from "../component/common/Grid/Grid";
import Stack from "../component/common/Stack/Stack";
import ProfileCard from "../component/ProfileCard/ProfileCard";
import BoardLayout from "../component/common/Layout/BoardLayout/BoardLayout";
import Button from "../component/UI/Button/Button";

const Profile = () => {
  return (
    <BoardLayout>
      <Stack spacing={1}>
        <div style={{ marginTop: 30 }}>
          <ProfileCard />
        </div>
        <Grid rows={5}>
          s s<BoardCard to={`${paths.MY_BOARDS}/dvdsvjn`}>Board #1</BoardCard>
          <BoardCard to={`${paths.MY_BOARDS}/dvdsvjn`}>Board #1</BoardCard>
          <Button fullWidth>
            <Stack>
              <div style={{ fontSize: 30 }}>+</div>
            </Stack>
          </Button>
        </Grid>
      </Stack>
    </BoardLayout>
  );
};

export default Profile;
