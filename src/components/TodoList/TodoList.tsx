import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo/SingleTodo";
import { rootReducerType } from "../../redux/todos/actionTypes";

const TodoList = () => {
  const todos = useSelector((state: rootReducerType) => state.todos);
  const filters = useSelector((state: rootReducerType) => state.filters);

  const statusFilter = () => {
    
  }
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {todos
        .filter((todo) => {
          switch (filters.status) {
            case "Completed":
              return todo.completed;
            case "Incomplete":
              return !todo.completed;
            default:
              return todo;
          }
        })
        .filter((todo) => {
          if (filters.colors && filters.colors?.length > 0 && todo?.color) {
            return filters.colors.includes(todo?.color);
          }
          return true;
        })
        .map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
