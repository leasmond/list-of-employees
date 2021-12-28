import { ADD_EMPLOYEE, ON_CHECKED } from "../../../../constants/employee";
import { data, userInfoForm } from "../data";

const initialState = [...data];

export const employees = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...state, action.payload];
    default:
      return state;
  }
};

const initialUserState = [...userInfoForm];

export const userForm = (state = initialUserState, action) => {
  switch (action.type) {
    case ON_CHECKED:
      return [...action.payload];
    default:
      return state;
  }
};
