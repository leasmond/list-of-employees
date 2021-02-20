import React, { useState } from "react";
import { Button, TextField, Grid, MenuItem } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const position = [
  {
    value: "junior",
    label: "Junior Developer",
  },
  {
    value: "middle",
    label: "Middle Developer",
  },
  {
    value: "senior",
    label: "Senior developer",
  },
];
const subdivision = [
  {
    value: "management",
    label: "Управления",
  },
  {
    value: "department",
    label: "Отдела",
  },
  {
    value: "service",
    label: "Службы",
  },
  {
    value: "bureau",
    label: "Бюро",
  },
];

const Record = () => {
  const [post, setPost] = useState("");
  const [unit, setUnit] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePostChange = (event) => {
    setPost(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form noValidate autoComplete="off">
      <Grid container justify="center">
        <Grid container item xs={4} spacing={2}>
          <Grid item xs={12}>
            <TextField label="Фамилия" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Имя" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Отчество" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <DatePicker
                  fullWidth
                  clearable
                  minDate={new Date("1900-01-01")}
                  maxDate={new Date("2022-01-01")}
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  label="Дата рождения"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Табельный номер" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              variant="outlined"
              label="Должность"
              value={post}
              onChange={handlePostChange}
              fullWidth
            >
              {position.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              variant="outlined"
              label="Подразделение"
              value={unit}
              onChange={handleUnitChange}
              fullWidth
            >
              {subdivision.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth variant="contained">
              Сохранить и добавить ещё
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth variant="contained">
              Сохранить и вернуться в список
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
export default Record;
