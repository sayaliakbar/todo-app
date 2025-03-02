import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

import { useGetTodosQuery, useUpdateOrderMutation } from "../services/todo.js";

export default function TodoList() {
  const { data, error, isLoading } = useGetTodosQuery();
  const [updateOrderMutation] = useUpdateOrderMutation();
  const [filter, setFilter] = useState("all");

  const todos = data?.todoList;
  const filteredTodos = todos?.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const activeIndex = filteredTodos.findIndex(
        (todo) => todo._id === active.id
      );
      const overIndex = filteredTodos.findIndex((todo) => todo._id === over.id);

      const newTodos = [...filteredTodos];
      newTodos.splice(activeIndex, 1);
      newTodos.splice(overIndex, 0, filteredTodos[activeIndex]);

      const order = newTodos.map((todo) => todo._id);

      updateOrderMutation(order);
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
