import {
  ADD_TODO,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETE_TODO,
  TOGGLED,
  actionType,
  todoType,
} from "./actionTypes";
import { initialState } from "./initialState";

const todoReducer = (state: todoType[] = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          completed: false,
          color: 'red'
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLOR_SELECTED:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todoReducer;
