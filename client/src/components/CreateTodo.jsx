import { useAddTodoMutation } from "../services/todo.js";
import { useState } from "react";

export default function CreateTodo() {
  const [todo, setTodo] = useState("");

  const [addTodo] = useAddTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addTodo(todo);
    } catch (error) {
      console.log(error);
    } finally {
      setTodo("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full relative mt-4 sm:mt-0 xs:drop-shadow-lg cursor-pointer"
    >
      <input
        className="cursor-text leading-none w-full py-4 sm:py-5 px-11 sm:px-16 rounded-lg text-xs sm:text-body dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-200"
        type="text"
        placeholder="Create a new todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-black/25 absolute top-3 sm:top-4 left-4 sm:left-5 dark:border-white/25"></div>
    </form>
  );
}
