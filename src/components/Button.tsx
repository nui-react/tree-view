import React from "react";
import { ButtonProps } from "../types/componentTypes";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick} style={{backgroundColor: "green"}}>{label}</button>;
};

export default Button;
