import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

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

  console.log(filteredTodos);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = todos.findIndex((todo) => todo._id === active.id);
      const newIndex = todos.findIndex((todo) => todo._id === over.id);
      const newTodos = [...todos];
      newTodos.splice(oldIndex, 1);
      newTodos.splice(newIndex, 0, todos[oldIndex]);
      console.log(newTodos);
    }
  };

  return (
    <div className="w-full bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-800">
      <ul className="overflow-y-auto max-h-64 w-full  flex flex-col">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <DndContext
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={filteredTodos.map((todo) => todo._id)}>
              {filteredTodos.map((todo) => (
                <TodoListTask
                  key={todo._id}
                  id={todo._id}
                  text={todo.title}
                  status={todo.completed}
                ></TodoListTask>
              ))}
            </SortableContext>
          </DndContext>
        ) : (
          <>No data</>
        )}
      </ul>
      <TodoListFooter filter={filter} setFilter={setFilter} />
    </div>
  );
}
