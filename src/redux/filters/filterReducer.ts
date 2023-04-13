import {
  COLOR_CHANGED,
  STATUS_CHANGED,
  actionType,
  stateType,
} from "./actionsType";
import { initialState } from "./initialState";

const filterReducer = (state: stateType = initialState, action: actionType) => {
  switch (action.type) {
    case COLOR_CHANGED:
      switch (action.payload.changeType) {
        case "added": {
          return {
            ...state,
            colors: [...(state.colors || []), action.payload.color],
          };
        }
        case "removed": {
          return {
            ...state,
            colors: state.colors?.filter(
              (existingColor) => existingColor !== action.payload.color
            ),
          };
        }
        default:
          return state;
      }

    case STATUS_CHANGED:
      const data = {
        ...state,
        status: action.payload.status,
      };
      return data;
    default:
      return state;
  }
};

export default filterReducer;
