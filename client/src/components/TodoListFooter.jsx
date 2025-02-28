import ShowTodoTaskButtons from "./ShowTodoTaskButtons";
export default function TodoListFooter() {
  return (
    <div className=" flex justify-between text-xs sm:text-sm p-4 text-black/50 dark:text-white/50">
      <p>5 items left</p>
      <div className="hidden sm:block">
        <ShowTodoTaskButtons></ShowTodoTaskButtons>
      </div>

      <button className="hover:text-black dark:hover:text-white">
        Clear Completed
      </button>
    </div>
  );
}
