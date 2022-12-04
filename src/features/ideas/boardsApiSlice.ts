import { apiSlice } from "../../app/api/apiSlice";
import { Idea } from "../../types/main";

export const boardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIdeasByBoard: builder.query<Idea[], number>({
      query: (boardId) => ({
        url: `/ideas/${boardId}`,
      }),
    }),
  }),
});

export const { useGetIdeasByBoardQuery } = boardsApiSlice;
