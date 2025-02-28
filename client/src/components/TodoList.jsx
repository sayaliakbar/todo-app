import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setTodoList(response.data.todoList);
    console.log(response.data.todoList);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="w-full bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-800">
      <ul className="overflow-y-auto max-h-64 w-full  flex flex-col">
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <TodoListTask
              key={todo.id}
              id={todo.id}
              text={todo.task}
            ></TodoListTask>
          ))}
      </ul>
      <TodoListFooter />
    </div>
  );
}
