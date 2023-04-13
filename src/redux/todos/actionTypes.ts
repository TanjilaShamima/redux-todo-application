import { stateType } from "../filters/actionsType";

export const ADD_TODO = "todos/addTodo";
export const TOGGLED = "todos/toggled";
export const COLOR_SELECTED = "todos/colorSelected";
export const DELETE_TODO = "todos/deleteTodo";
export const ALL_COMPLETED = "todos/allCompleted";
export const CLEAR_COMPLETED = "todos/clearCompleted";

export type todoType = {
  id: number;
  title?: string;
  completed?: boolean;
  color?: string;
};

export type actionType = {
  type: string;
  payload: todoType;
};

export type rootReducerType = {
  todos: todoType[];
  filters: stateType;
};
