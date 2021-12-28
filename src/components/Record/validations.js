import * as yup from "yup";
import Moment from "moment";

export const validationSchema = yup.object().shape({
  firstName: yup
    .string("Enter your firstname")
    .min(2, "Firstname should be of minimum 2 characters length")
    .max(30, "Firstname should be of minimum 30 characters length")
    .required("Firstname is required"),
  middleName: yup
    .string("Enter your middlename")
    .min(2, "Firstname should be of minimum 2 characters length")
    .max(30, "Firstname should be of minimum 30 characters length")
    .required("Middlename is required"),
  lastName: yup
    .string("Enter your lastname")
    .min(2, "Firstname should be of minimum 2 characters length")
    .max(30, "Firstname should be of minimum 30 characters length")
    .required("Lasttname is required"),
  birthday: yup
    .date()
    .min(Moment(new Date(1900, 1, 1)).format("L"))
    .max(Moment().subtract(18, "years").calendar())
    .required("Birthday is required")
    .nullable(),
  position: yup.string().required("Position is required"),
  subdivision: yup.string().required("Subdivision is required"),
});
