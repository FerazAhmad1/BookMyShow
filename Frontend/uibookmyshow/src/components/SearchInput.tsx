import React, { useState } from "react";
interface ISearchInput {
  type: string;
  placeholder: string;
  changeHandler: (v: string) => void;
}
const SearchInput: React.FC<ISearchInput> = ({
  type,
  placeholder,
  changeHandler,
}) => {
  const [value, setValue] = useState("");
  return (
    <div className=" flex flex-1 ">
      <input
        className="flex-1 outline-none border-none "
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          changeHandler(e.target.value);
        }}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
