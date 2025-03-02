import {
  useGetTodosQuery,
  useDeleteSelectedTodosMutation,
} from "../services/todo";

import PropTypes from "prop-types";

export default function TodoListFooter({ filter, setFilter }) {
  TodoListFooter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  };

  const { data } = useGetTodosQuery();
  const todos = data?.todoList;
  const activeTodos = todos?.filter((todo) => !todo.completed);
  const itemsLeft = activeTodos?.length;

  const [deleteSelectedTodos] = useDeleteSelectedTodosMutation();

  const handleDeleteSelected = () => {
    const selectedIds = todos
      .filter((todo) => todo.completed)
      .map((todo) => todo._id);
    deleteSelectedTodos(selectedIds);
  };

  return (
    <div className=" flex justify-between text-xs sm:text-sm p-4 text-black/50 dark:text-white/50">
      <p>{itemsLeft} items left</p>
      <div className="hidden sm:block">
        <div className="flex flex-row gap-4 font-bold text-black/50">
          <button
            onClick={() => setFilter("all")}
            className={`${
              filter === "all" ? "text-primary-brightBlue" : ""
            } hover:text-black dark:hover:text-white`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`${
              filter === "active" ? "text-primary-brightBlue" : ""
            } hover:text-black dark:hover:text-white`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`${
              filter === "completed" ? "text-primary-brightBlue" : ""
            } hover:text-black dark:hover:text-white`}
          >
            Completed
          </button>
        </div>
      </div>

      <button
        disabled={todos?.every((todo) => !todo.completed)}
        onClick={handleDeleteSelected}
        className={`${
          !todos?.every((todo) => !todo.completed)
            ? "hover:text-black dark:hover:text-white"
            : ""
        }`}
      >
        Clear Completed
      </button>
    </div>
  );
}
