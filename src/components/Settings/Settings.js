import { useState } from "react";
import {
  Checkbox,
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useFormik } from "formik";
import { ButtonCustom } from "../../common/components/ButtonCustom";
import { useDispatch, useSelector } from "react-redux";
import { ON_CHECKED } from "../../constants/employee";
import { TextFieldCustom } from "../../common/components";

const Settings = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const userForm = useSelector((state) => state.userForm);

  const formik = useFormik({
    initialValues: userForm,
    onSubmit: (values) => {
      dispatch({
        type: ON_CHECKED,
        payload: values,
      });
      setShow(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container justifyContent='center'>
        <Grid container item xs={4} spacing={3}>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel>
                Информация по сотруднику которая будет отображаться
              </FormLabel>
              <FormGroup>
                {userForm.map((item) => (
                  <FormControlLabel
                    label={item.label}
                    key={item.label}
                    checked={formik.values[item.id].checked}
                    onChange={(event) =>
                      formik.setFieldValue(item.id, {
                        ...item,
                        checked: event.target.checked,
                      })
                    }
                    control={<Checkbox />}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <ButtonCustom fullWidth onClick={() => setShow(!show)}>
              Добавить новое поле
            </ButtonCustom>
          </Grid>
          {show && (
            <Grid item xs={12}>
              <TextFieldCustom
                label='Название поля'
                onChange={(event) =>
                  formik.setFieldValue(userForm.length, {
                    id: userForm.length,
                    checked: true,
                    label: event.target.value,
                    name: `field${userForm.length}`,
                    component: TextFieldCustom,
                  })
                }
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <ButtonCustom type='submit' fullWidth>
              Сохранить
            </ButtonCustom>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Settings;
