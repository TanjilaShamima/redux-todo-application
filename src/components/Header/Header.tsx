import React from "react";
import { useDispatch } from "react-redux";
import {
  allCompleted,
  clearCompleted,
  todoAdded,
} from "../../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = React.useState<string>("");

  const handleAddTodo = (todoText: string) => {
    setTodoText("");
    dispatch(todoAdded(todoText));
  };

  const handleCompleted = () => {
    dispatch(allCompleted());
  };

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src="/images/notes.png" className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          type="button"
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
          onClick={() => handleAddTodo(todoText)}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={handleCompleted}>
          <img
            className="w-4 h-4"
            src="/images/double-tick.png"
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClear} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
