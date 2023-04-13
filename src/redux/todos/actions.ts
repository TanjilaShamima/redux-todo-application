import {
  ADD_TODO,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETE_TODO,
  TOGGLED,
} from "./actionTypes";

export const todoAdded = (todoText: string) => {
  return {
    type: ADD_TODO,
    payload: {
      title: todoText,
    },
  };
};

export const toggled = (todoId: number) => {
  return {
    type: TOGGLED,
    payload: {
      id: todoId,
    },
  };
};

export const colorSelected = (todoId: number, color: string) => {
  return {
    type: COLOR_SELECTED,
    payload: { id: todoId, color },
  };
};

export const deleted = (todoId: number) => {
  return {
    type: DELETE_TODO,
    payload: {
      id: todoId,
    },
  };
};

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED,
    payload: {},
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED,
    payload: {},
  };
};
