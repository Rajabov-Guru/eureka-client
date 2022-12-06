import { apiSlice } from "../../app/api/apiSlice";
import { Idea } from "../../types/main";

export const ideasApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIdeasByBoard: builder.query<Idea[], number>({
      query: (boardId) => ({
        url: `/ideas/${boardId}`,
      }),
    }),
  }),
});

export const { useGetIdeasByBoardQuery } = ideasApiSlice;
