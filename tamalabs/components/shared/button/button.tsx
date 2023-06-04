import * as React from "react";

interface ButtonProps {
  action: () => void;
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.action}>Join Us</button>;
};

export default Button;
