// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = import.meta.env.VITE_API_URL;

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}/api/todos` }),
  tagTypes: ["Todos"], // Add a tag for todos
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "",
      providesTags: ["Todos"], // Mark this query as providing "Todos"
    }),
    addTodo: builder.mutation({
      query: (title) => ({
        url: "",
        method: "POST",
        body: { title },
      }),
      invalidatesTags: ["Todos"], // Invalidate "Todos" to trigger refetch
    }),
    toggleTodo: builder.mutation({
      query: (id) => ({
        url: `${id}/toggle`,
        method: "PUT",
      }),
      invalidatesTags: ["Todos"], // Refetch todos after toggling
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"], // Refetch todos after toggling
    }),
    deleteSelectedTodos: builder.mutation({
      query: (ids) => ({
        url: "",
        method: "DELETE",
        body: { ids },
      }),
      invalidatesTags: ["Todos"], // Refetch todos after toggling
    }),
    toggleAllTodos: builder.mutation({
      query: (completed) => ({
        url: "",
        method: "PUT",
        body: { completed },
      }),
      invalidatesTags: ["Todos"], // Refetch todos after toggling
    }),
    updateOrder: builder.mutation({
      query: (order) => ({
        url: "update-order",
        method: "PUT",
        body: { order },
      }),
      invalidatesTags: ["Todos"], // Refetch todos after toggling
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoMutation,
  useDeleteSelectedTodosMutation,
  useToggleAllTodosMutation,
  useUpdateOrderMutation,
} = todoApi;
