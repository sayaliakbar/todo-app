import {
  useAddTodoMutation,
  useToggleAllTodosMutation,
} from "../services/todo.js";
import { useState } from "react";

export default function CreateTodo() {
  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState(false);

  const [addTodo] = useAddTodoMutation();
  const [toggleAllTodos] = useToggleAllTodosMutation();

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

  const handleToggleAllTodos = async () => {
    try {
      await toggleAllTodos(!status);
      setStatus(!status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full relative mt-4 sm:mt-0 xs:drop-shadow-lg cursor-pointer"
    >
      <input
        type="checkbox"
        onChange={handleToggleAllTodos}
        className="cursor-pointer absolute left-4 top-4 sm:left-5 peer appearance-none w-4 h-4 sm:w-6 sm:h-6 border border-black/25 checked:border-none  rounded-full focus:outline-none shrink-0 checked:bg-gradient-to-br from-cyan-400 to-purple-500 dark:border-white/25 hover:ring-2 after:content-[''] after:w-full after:h-full after:rounded-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:12px] checked:after:bg-[url(./assets/images/icon-check.svg)]"
      />
      <input
        className="cursor-text leading-none w-full py-4 sm:py-5 px-11 sm:px-16 rounded-lg text-xs sm:text-body dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-gray-200"
        type="text"
        placeholder="Create a new todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
}
