import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";
import { useState } from "react";

import { useGetTodosQuery } from "../services/todo.js";

export default function TodoList() {
  const { data, error, isLoading } = useGetTodosQuery();
  const [filter, setFilter] = useState("all");

  const todos = data?.todoList;
  const filteredTodos = todos?.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="w-full bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-800">
      <ul className="overflow-y-auto max-h-64 w-full  flex flex-col">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          filteredTodos.map((todo) => (
            <TodoListTask
              key={todo._id}
              id={todo._id}
              text={todo.title}
              status={todo.completed}
            ></TodoListTask>
          ))
        ) : (
          <>No data</>
        )}
      </ul>
      <TodoListFooter filter={filter} setFilter={setFilter} />
    </div>
  );
}
