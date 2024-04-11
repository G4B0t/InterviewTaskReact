import { combineReducers } from "redux";
import task_reducer from "./Task/task_reducer";

const main_reducer = combineReducers({
  task: task_reducer,
});

export default main_reducer;
