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
import { Formik, Field, Form } from "formik";

// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Settings = () => {
  // const [state, setState] = useState({
  //   lastName: true,
  //   firstName: true,
  //   middleName: true,
  //   birthDate: true,
  //   personnelNumber: true,
  //   position: true,
  //   subdivision: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  // const {
  //   lastName,
  //   firstName,
  //   middleName,
  //   birthDate,
  //   personnelNumber,
  //   position,
  //   subdivision,
  // } = state;

  return (
    <Formik
      initialValues={{
        checked: [
          "lastName",
          "firstName",
          "middleName",
          "birthDate",
          "personnelNumber",
          "position",
          "subdivision",
        ],
      }}
      onSubmit={(event) => {
        // event.preventDefault();
        let checked = [...this.state.checked];
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
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
                          defaultChecked
                          onChange={handleChange}
                          name="checked"
                          value="lastName"
                        />
                      }
                      label="Фамилия"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          defaultChecked
                          onChange={handleChange}
                          name="checked"
                          value="firstName"
                        />
                      }
                      label="Имя"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          defaultChecked
                          onChange={handleChange}
                          name="checked"
                          value="middleName"
                        />
                      }
                      label="Отчество"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          defaultChecked
                          onChange={handleChange}
                          name="checked"
                          value="birthDate"
                        />
                      }
                      label="Дата рождения"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          defaultChecked
                          onChange={handleChange}
                          name="checked"
                          value="personnelNumber"
                        />
                      }
                      label="Табельный номер"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          type="checkbox"
                          color="primary"
                          defaultChecked
                          onChange={handleChange}
                          name="checked"
                          value="position"
                        />
                      }
                      label="Должность"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          type="checkbox"
                          color="primary"
                          defaultChecked
                          onChange={handleChange}
                          name="checked"
                          value="subdivision"
                        />
                      }
                      label="Подразделение"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                >
                  Сохранить
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    </Formik>
  );
};

export default Settings;
