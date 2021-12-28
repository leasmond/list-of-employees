import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Moment from "moment";
import { validationSchema } from "./validations";
import { ButtonCustom } from "../../common/components";
import { addEmployee } from "./redux/action";

const Record = (props) => {
  const userForm = useSelector((state) => state.userForm);
  const employees = useSelector((state) => state.employees);
  const employeesLength = employees[employees.length - 1];

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      middleName: "",
      birthday: null,
      position: "",
      subdivision: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        addEmployee({
          id: employeesLength.id + 1,
          birthday: Moment(values.birthday, "YYYY MM dd").format("L"),
          personnelNumber: employeesLength.personnelNumber + 1,
          ...values,
        })
      );
      formik.resetForm();
    },
  });
  const error = (item) => formik.touched[item] && Boolean(formik.errors[item]);
  const helperText = (item) => formik.touched[item] && formik.errors[item];

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container justifyContent='center'>
        <Grid container item xs={4} spacing={2}>
          {userForm.map((item) => (
            <Grid key={item.name} item xs={12}>
              <item.component
                value={formik.values[item.name]}
                onChange={(event) => {
                  const value =
                    event?.target?.value ||
                    Moment(event, "YYYY MM dd").format("L");
                  formik.setFieldValue(item.name, value);
                }}
                error={error(item.name)}
                helperText={helperText(item.name)}
                label={item.label}
                name={item.name}
                disabled={item.disabled}
                select={item.select}
                data={item.data}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <ButtonCustom type='submit' fullWidth>
              Сохранить и добавить ещё
            </ButtonCustom>
          </Grid>
          <Grid item xs={12}>
            <ButtonCustom
              onClick={() => {
                formik.handleSubmit();
                if (formik.dirty && formik.isValid) {
                  props?.history?.push("/");
                }
              }}
              fullWidth
            >
              Сохранить и вернуться в список
            </ButtonCustom>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default Record;
