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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Information from "./Information";

const useStyles = makeStyles({
  table: {
    maxWidth: "100%",
  },
});

const Employees = () => {
  const employees = useSelector((state) => state.employees);
  const [visible, setVisible] = useState(false);
  const [employeeNumber, setEmployeeNumber] = useState();

  const employeeId = (index) => {
    setEmployeeNumber(index);
    setVisible(true);
  };
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify='center'>
      <Grid item xs={visible === true ? 6 : 12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Фамилия</TableCell>
                <TableCell align='center'>Должность</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((item, index) => (
                <TableRow key={item.id} onClick={() => employeeId(index)}>
                  <TableCell align='center' id={item.lastName}>
                    {item.lastName}
                  </TableCell>
                  <TableCell align='center' id={item.position}>
                    {item.position}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {visible && (
        <Information
          employees={employees}
          employeeNumber={employeeNumber}
          setVisible={setVisible}
        />
      )}
    </Grid>
  );
};

export default Employees;
