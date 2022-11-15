import React from "react";
import BoardCard from "../component/BoardCard";
import { paths } from "../routing/routes";
import Grid from "../component/common/Grid";
import Stack from "../component/common/Stack";
import ProfileCard from "../component/ProfileCard";
import BoardLayout from "../component/common/Layout/BoardLayout";
import Button from "../component/UI/Button";

const Profile = () => {
  return (
    <BoardLayout>
      <Stack spacing={1}>
        <div style={{ marginTop: 30 }}>
          <ProfileCard />
        </div>
        <Grid rows={5}>
          <BoardCard to={`${paths.MY_BOARDS}/dvdsvjn`}>Board #1</BoardCard>
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
