export default function ShowTodoTaskButtons() {
  return (
    <div className="flex flex-row gap-4 font-bold text-black/50">
      <button className="text-primary-brightBlue hover:text-black dark:hover:text-white ">
        All
      </button>
      <button className="hover:text-black dark:hover:text-white dark:text-white/50">
        Active
      </button>
      <button className="hover:text-black dark:hover:text-white dark:text-white/50">
        Completed
      </button>
    </div>
  );
}
