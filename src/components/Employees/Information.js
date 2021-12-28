import { Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ButtonCustom } from "../../common/components/ButtonCustom";

const Information = ({ employees, employeeNumber, setVisible }) => {
  const userForm = useSelector((state) => state.userForm);
  const showEmployeeInformation = userForm.filter((item) => item.checked);

  return (
    <Grid item xs={6}>
      <Paper style={{ padding: 16 }}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            {showEmployeeInformation.map((item) => (
              <Typography key={item.id}>
                {`${item.label}: \b ${employees[employeeNumber][item.name]}`}
              </Typography>
            ))}
          </Grid>
          <Grid item>
            <ButtonCustom onClick={() => setVisible(false)}>
              Закрыть
            </ButtonCustom>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Information;
