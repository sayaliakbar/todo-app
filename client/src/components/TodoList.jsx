import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;


export default function TodoList() {
  
  const [todoList, setTodoList] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get(`${apiUrl}/api/todos`);
    setTodoList(response.data.todoList);
    console.log(response.data.todoList);
  };
  useEffect(() => {
    fetchAPI();
  }, [setTodoList]);

  


  return (
    <div className="w-full bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-800">
      <ul className="overflow-y-auto max-h-64 w-full  flex flex-col">
        {todoList.length > 0 &&
          todoList.map((todo) => (
            <TodoListTask
              key={todo._id}
              id={todo._id}
              text={todo.title}
              status={todo.completed}
            ></TodoListTask>
          ))}
      </ul>
      <TodoListFooter />
    </div>
  );
}
