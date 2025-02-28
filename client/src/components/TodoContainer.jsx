import TodoHeader from "./TodoHeader";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import ShowTodoTask from "./ShowTodoTask";
export default function TodoContainer() {
  return (
    <div className="w-10/12 sm:w-8/12 md:w-7/12 lg:w-1/2 xl:w-5/12 absolute sm:top-14 top-10 flex flex-col gap-4 items-center justify-center ">
      <TodoHeader></TodoHeader>
      <CreateTodo></CreateTodo>
      <TodoList></TodoList>
      <ShowTodoTask></ShowTodoTask>
      <p className="text-center m-8 text-black/50 text-sm dark:text-white/25">
        Drag and drop to reorder list
      </p>
    </div>
  );
}
