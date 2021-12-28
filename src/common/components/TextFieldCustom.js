import { MenuItem, TextField } from "@mui/material";

export const TextFieldCustom = ({
  label,
  name,
  value,
  onChange,
  error,
  helperText,
  select,
  data,
  disabled,
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      variant='outlined'
      select={select}
      disabled={disabled}
      fullWidth
    >
      {data &&
        data.map((option) => (
          <MenuItem key={option.value} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};
