import React from "react";
import {useSelector} from 'react-redux'
import SingleTodo from "./SingleTodo/SingleTodo";
import { rootReducerType } from "../../redux/todos/actionTypes";

const TodoList = () => {
  const todos = useSelector((state: rootReducerType ) => state.todos)
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
