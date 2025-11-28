import React from "react";
interface ButtonProps {
  clickHandler: () => void;
  buttonName: string;
  bg: string;
}
const Button: React.FC<ButtonProps> = ({ clickHandler, buttonName, bg }) => {
  return (
    <button
      onClick={() => clickHandler()}
      className={` text-white p-1 rounded-md bg-black `}
    >
      {buttonName}
    </button>
  );
};

export default Button;
