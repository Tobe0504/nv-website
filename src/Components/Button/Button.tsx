import classes from "./Button.module.css";
import { CircularProgress } from "@mui/material";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  noRadius?: boolean;
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  noRadius,
}: ButtonPropTypes) => {
  return (
    <button
      className={`${classes.button} ${
        type === "secondary"
          ? classes.secondary
          : type === "tertiary"
          ? classes.tertiary
          : classes.primary
      }`}
      onClick={onClick}
      disabled={loading || disabled}
      style={noRadius ? { borderRadius: "0px" } : undefined}
    >
      {loading ? <CircularProgress size="1.5rem" color="inherit" /> : children}
    </button>
  );
};

export default Button;
