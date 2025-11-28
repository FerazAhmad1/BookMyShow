import { forwardRef } from "react";
interface InputProps {
  type: string;
  placeholder: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className="border p-2 focus:border-blue-500 focus:outline-none  h-10 rounded-xl "
      />
    );
  }
);

export default Input;
