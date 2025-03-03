import crossIcon from "../assets/images/icon-cross.svg";
import PropTypes from "prop-types";
import {
  useToggleTodoMutation,
  useDeleteTodoMutation,
} from "../services/todo.js";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function TodoListTask({ text, id, status }) {
  TodoListTask.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [toggleTodo, { error }] = useToggleTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleStatusChange = async (e) => {
    await toggleTodo(e.target.id);
  };

  const handleDeleteTodo = async (e) => {
    await deleteTodo(e.target.id);
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="touch-none border-b dark:border-white/50 border-black/25 flex py-3 sm:py-4 pl-11 sm:pl-16 pr-10 relative group hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer break-words"
    >
      {error ? (
        <div className="text-red-500 text-sm">Error: {error.status} </div>
      ) : (
        <>
          <input
            type="checkbox"
            id={id}
            checked={status}
            onChange={handleStatusChange}
            className="cursor-pointer absolute left-4 top-4 sm:left-5 peer appearance-none w-4 h-4 sm:w-6 sm:h-6 border border-black/25 checked:border-none  rounded-full focus:outline-none shrink-0 checked:bg-gradient-to-br from-cyan-400 to-purple-500 dark:border-white/25 hover:ring-2 after:content-[''] after:w-full after:h-full after:rounded-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:12px] checked:after:bg-[url(./assets/images/icon-check.svg)]"
          />
          <p
            {...attributes}
            {...listeners}
            className="hover:cursor-move w-full dark:peer-checked:text-white/25 peer-checked:text-black/25  peer-checked:line-through cursor-pointer text-sm sm:text-body leading-[1.5] "
          >
            {text}
          </p>
          <button
            onClick={handleDeleteTodo}
            className="group-hover:visible invisible"
          >
            <img
              className="absolute top-1/2 right-4 -translate-y-1/2  w-4 h-4 hover:opacity-100 opacity-50 "
              src={crossIcon}
              alt="Remove item"
              id={id}
            />
          </button>
        </>
      )}
    </li>
  );
}
