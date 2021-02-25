import React, { useState } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { data } from "../utils";

const select = [
  "Фамилия",
  "Имя",
  "Отчество",
  "Дата рождения",
  "Табельный номер",
  "Должность",
  "Подразделение",
];

const useStyles = makeStyles({
  table: {
    maxWidth: "100%",
  },
});
const Employees = () => {
  const [visible, setVisible] = useState(false);
  const [row, setRow] = useState(null);

  const onRowSelect = (id) => {
    setRow(id);
    setVisible(true);
  };
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={visible === true ? 6 : 12}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            component={Paper}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Фамилия</TableCell>
                <TableCell align="center">Должность</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id} onClick={() => onRowSelect(item)}>
                  <TableCell align="center" id={item.lastName}>
                    {item.lastName}
                  </TableCell>
                  <TableCell align="center" id={item.position}>
                    {item.position}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {visible === true ? (
        <Grid item xs={6}>
          {row ? (
            <Paper style={{ padding: 16 }}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography component="div">
                    {select === row ? (
                      <Grid>
                        {/* {select.map((id) => ( */}
                        <Box id={select}>{select}</Box>
                        {/* ))} */}
                      </Grid>
                    ) : /* <Box id={row.firstName}>Имя: {row.firstName}</Box>
                    <Box id={row.lastName}>Отчество: {row.middleName}</Box>
                    <Box id={row.birthDate}>Дата рождения: {row.birthDate}</Box>
                    <Box id={row.personnelNumber}>
                      Табельный номер: {row.personnelNumber}
                    </Box>
                    <Box id={row.position}>Должность: {row.position}</Box>
                    <Box id={row.subdivision}>
                      Подразделение: {row.subdivision}
                    </Box> */
                    null}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setVisible(false)}
                  >
                    Закрыть
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ) : null}
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Employees;
