import React from "react";
interface ButtonProps {
  clickHandler: () => void;
  buttonName: string;
}
const Button: React.FC<ButtonProps> = ({ clickHandler, buttonName }) => {
  return (
    <button onClick={() => clickHandler()} className="bg-white text-white">
      {buttonName}
    </button>
  );
};

export default Button;
