import React from "react";
import SingleTodo from "./SingleTodo/SingleTodo";

const TodoList = () => {
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {/* <!-- todo --> */}
      {[1, 2, 3, 4, 5].map((todo) => (
        <SingleTodo />
      ))}
    </div>
  );
};

export default TodoList;
