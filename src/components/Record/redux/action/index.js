import { ADD_EMPLOYEE } from "../../../../constants/employee";

export const addEmployee = (params) => {
  return {
    type: ADD_EMPLOYEE,
    payload: params,
  };
};
