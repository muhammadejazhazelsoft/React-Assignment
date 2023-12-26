import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import taskReducer from "./reducers/taskReducer";

const store = createStore(
  taskReducer,
);

export default store;