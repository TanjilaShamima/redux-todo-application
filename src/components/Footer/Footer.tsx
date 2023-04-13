import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootReducerType } from "../../redux/todos/actionTypes";
import { colorChanged, statusChanged } from "../../redux/filters/actions";

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: rootReducerType) => state.todos);
  const filters = useSelector((state: rootReducerType) => state.filters);
  const remainingTask = todos?.filter((task) => !task.completed);

  const handleStatusChange = (status: string) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color: string) => {
    if (filters.colors?.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      {remainingTask.length > 0 ? (
        <p>{remainingTask.length} tasks left</p>
      ) : (
        <p>No task is left</p>
      )}
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            filters?.status && filters?.status === "All" && " font-bold"
          }`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters?.status && filters?.status === "Incomplete" && " font-bold"
          }`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters?.status && filters?.status === "Completed" && " font-bold"
          }`}
          onClick={() => handleStatusChange("Completed")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer  ${
            filters.colors?.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors?.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors?.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChange("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
