import { createStore, combineReducers } from "redux";
import cashReducer from "./cashReducer";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
