import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
} from "@material-ui/core";

const Settings = () => {
  const [state, setState] = useState({
    lastName: true,
    firstName: true,
    middleName: true,
    birthDate: true,
    personnelNumber: true,
    position: true,
    subdivision: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const {
    lastName,
    firstName,
    middleName,
    birthDate,
    personnelNumber,
    position,
    subdivision,
  } = state;

  return (
    <Grid container justify="center">
      <Grid container item xs={4} spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Информация по сотруднику которая будет отображаться
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={lastName}
                    onChange={handleChange}
                    name="lastName"
                  />
                }
                label="Фамилия"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={firstName}
                    onChange={handleChange}
                    name="firstName"
                  />
                }
                label="Имя"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={middleName}
                    onChange={handleChange}
                    name="middleName"
                  />
                }
                label="Отчество"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={birthDate}
                    onChange={handleChange}
                    name="birthDate"
                  />
                }
                label="Дата рождения"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={personnelNumber}
                    onChange={handleChange}
                    name="personnelNumber"
                  />
                }
                label="Табельный номер"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={position}
                    onChange={handleChange}
                    name="position"
                  />
                }
                label="Должность"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={subdivision}
                    onChange={handleChange}
                    name="subdivision"
                  />
                }
                label="Подразделение"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" fullWidth variant="contained">
            Сохранить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Settings;
