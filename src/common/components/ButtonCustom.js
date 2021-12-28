import { Button } from "@mui/material";

export const ButtonCustom = ({
  onClick,
  children,
  fullWidth,
  type,
  component,
  to,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant='contained'
      color='primary'
      onClick={onClick}
      type={type}
      component={component}
      to={to}
    >
      {children}
    </Button>
  );
};
