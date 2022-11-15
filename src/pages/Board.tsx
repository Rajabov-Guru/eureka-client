import React from "react";
import Grid from "../component/common/Grid/Grid";
import Card from "../component/UI/Card/Card";
import BoardLayout from "../component/common/Layout/BoardLayout/BoardLayout";
import ProfileCard from "../component/ProfileCard/ProfileCard";
import Stack from "../component/common/Stack/Stack";
import Button from "../component/UI/Button/Button";

const titleStyles: React.CSSProperties = {
  padding: 30,
  textAlign: "center",
  color: "white",
  fontSize: 30,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  letterSpacing: 2,
};

const Board = () => {
  return (
    <BoardLayout>
      <div style={titleStyles}>
        <h1>Board #1</h1>
        <ProfileCard small horiz />
      </div>
      <Grid rows={3}>
        <Card
          title="Idea #1"
          content="fsdvb vhjbfdv fhvbfv hdefvbfde vhredfbvhefbv"
        />
        <Card
          title="Idea #2"
          content="fsdvb vhjbfdv fhvbfv hdefvbfde vhredfbvhefbv"
        />
        <Button fullWidth>
          <Stack>
            <div style={{ fontSize: 30 }}>+</div>
          </Stack>
        </Button>
      </Grid>
    </BoardLayout>
  );
};

export default Board;
