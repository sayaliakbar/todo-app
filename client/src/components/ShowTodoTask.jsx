import ShowTodoTaskButtons from "./ShowTodoTaskButtons";
export default function ShowTodoTask() {
  return (
    <div className="flex sm:hidden gap-4 font-bold text-black/50 bg-white p-4 w-full justify-center rounded-lg shadow-2xl text-sm dark:bg-gray-800">
      <ShowTodoTaskButtons></ShowTodoTaskButtons>
    </div>
  );
}
