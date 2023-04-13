import filterReducer from "./filters/filterReducer";
import {combineReducers} from 'redux'
import todoReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
    filter: filterReducer,
    todos: todoReducer
})

export default rootReducer;