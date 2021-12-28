import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export const DataPickerCustom = ({
  label,
  name,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        name={name}
        inputFormat='dd/MM/yyyy'
        format='dd.MM.yyyy'
        value={value}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            fullWidth
            {...params}
            error={error}
            helperText={helperText}
          />
        )}
      />
    </LocalizationProvider>
  );
};
