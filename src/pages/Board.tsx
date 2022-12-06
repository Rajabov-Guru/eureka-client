import React from "react";
import Grid from "../component/Grid/Grid";
import Card from "../features/ideas/Card/Card";
import BoardLayout from "../component/Layout/BoardLayout/BoardLayout";
import ProfileCard from "../features/user/ProfileCard/ProfileCard";
import Stack from "../component/Stack/Stack";
import Button from "../component/Button/Button";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../features/auth/authSlice";
import { useParams } from "react-router-dom";
import { useGetIdeasByBoardQuery } from "../features/ideas/ideasApiSlice";

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
  const { boardId } = useParams();
  const user = useAppSelector(selectCurrentUser);
  // const board = useGetBoardsByIdQuery(boardId);

  const {
    data: ideas,
    isLoading,
    isSuccess,
  } = useGetIdeasByBoardQuery(Number(boardId));

  return (
    <BoardLayout>
      <div style={titleStyles}>
        <h1>Board #1</h1>
        {user && <ProfileCard user={user} small horiz />}
      </div>
      <Grid rows={3}>
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
          ideas.map((idea) => (
            <Card key={idea.id} title={idea.title} content={idea.text} />
          ))}
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
