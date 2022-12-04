import { apiSlice } from "../../app/api/apiSlice";
import { BoardItem } from "../../types/main";

export const boardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBoardsById: builder.query<BoardItem[], number>({
      query: (userId) => ({
        url: `/boards/user/${userId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBoardsByIdQuery } = boardsApiSlice;
