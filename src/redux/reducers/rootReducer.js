import { combineReducers } from "redux";
import {
  employees,
  userForm,
} from "../../components/Record/redux/reducer/index";

const rootReducer = combineReducers({
  employees,
  userForm,
});

export default rootReducer;
