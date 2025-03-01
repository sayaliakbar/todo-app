// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiUrl = import.meta.env.VITE_API_URL; 

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}/api/todos` }),
  endpoints: (builder) => ({
    getTodos: builder.query({
        query: () => '',
    }),
    addTodo: builder.mutation({
        query: (text) => ({
            url: '',
            method: 'POST',
            body: { text },
        }),
    }),
    toggleTodo: builder.mutation({
        query: (id) => ({
            url: `${id}/toggle`,
            method: 'PUT',
        }),
    }),
    deleteTodo: builder.mutation({
        query: (id)=>({
            url: `${id}`,
            method: 'DELETE'
        })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useToggleTodoMutation } = todoApi