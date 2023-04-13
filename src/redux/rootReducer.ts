import filterReducer from "./filters/filterReducer";
import {combineReducers} from 'redux'
import todoReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
    filters: filterReducer,
    todos: todoReducer
})

export default rootReducer;