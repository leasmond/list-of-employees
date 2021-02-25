import React, { useState } from "react";
import { Button, TextField, Grid, MenuItem } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { position, subdivision } from "../utils";
import { Formik } from "formik";

const Record = () => {
  const [post, setPost] = useState("");
  const [unit, setUnit] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePostChange = (event) => {
    event.preventDefault();
    setPost(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Formik
      initialValues={{
        lastName: "",
        firstName: "",
        middleName: "",
        birthDate: null,
        personnelNumber: "",
        position: "",
        subdivision: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <Grid container justify="center">
            <Grid container item xs={4} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Фамилия"
                  variant="outlined"
                  name="lastName"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Имя"
                  variant="outlined"
                  name="firstName"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Отчество"
                  variant="outlined"
                  name="middleName"
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <DatePicker
                      label="Дата рождения"
                      inputVariant="outlined"
                      name="birthDate"
                      onChange={handleChange}
                      minDate={new Date("1900-01-01")}
                      maxDate={new Date("2022-01-01")}
                      format="MM/dd/yyyy"
                      value="birthDate"
                      clearable
                      fullWidth
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Табельный номер"
                  name="personnelNumber"
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Должность"
                  variant="outlined"
                  name="position"
                  value={post}
                  select
                  onChange={handleChange}
                  fullWidth
                >
                  {position.map((option) => (
                    <MenuItem key={option.value} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Подразделение"
                  variant="outlined"
                  name="subdivision"
                  select
                  value={unit}
                  onChange={handleChange}
                  fullWidth
                >
                  {subdivision.map((option) => (
                    <MenuItem key={option.value} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                >
                  Сохранить и добавить ещё
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                >
                  Сохранить и вернуться в список
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};
export default Record;
