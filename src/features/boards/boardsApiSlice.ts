import { apiSlice } from "../../app/api/apiSlice";
import { BoardItem } from "../../types/main";

export const boardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBoardsById: builder.query<BoardItem[], number>({
      query: (userId) => ({
        url: `/boards/user/${userId}`,
      }),
      providesTags: ["Boards"],
    }),

    createBoard: builder.mutation<BoardItem, BoardItem>({
      query: (data) => ({
        url: "/boards",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Boards"],
    }),
  }),
});

export const { useGetBoardsByIdQuery, useCreateBoardMutation } = boardsApiSlice;
