import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";

import { useGetTodosQuery } from "../services/todo.js";

export default function TodoList() {
  const { data, error, isLoading } = useGetTodosQuery();

  return (
    <div className="w-full bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-800">
      <ul className="overflow-y-auto max-h-64 w-full  flex flex-col">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data?.todoList.map((todo) => (
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
      <TodoListFooter />
    </div>
  );
}
