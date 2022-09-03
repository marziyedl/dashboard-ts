import { Button, Spinner } from "reactstrap";
import "./ButtonWithTextStyle.scss";

export interface IButtonWithTextProps {
  onClick?: () => void;
  className?: string;
  type?: ButtonWithTextType;
  text: string;
  disabled?: boolean;
  loading?: boolean;
  mode?: "submit" | "reset" | "button" | undefined;
}
type ButtonWithTextType = "primary" | "danger" | "light" | "info";

export const ButtonWithText = ({
  onClick = () => {},
  className = "",
  type = "light",
  text = "",
  disabled = false,
  loading = false,
  mode = undefined,
}: IButtonWithTextProps) => {
  return (
    <>
      <Button
        type={mode}
        disabled={disabled}
        color={type}
        className={`${className} ButtonWithTextStyle`}
        onClick={() => onClick()}
      >
        {loading && <Spinner className="mr-1" size="sm" />}
        {text}
      </Button>
    </>
  );
};
