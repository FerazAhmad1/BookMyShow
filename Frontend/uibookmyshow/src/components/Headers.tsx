import logo from "../assets/bookmyShowlogo.png";
import { BsSearch } from "react-icons/bs";
import SearchInput from "./SearchInput";
const Headers = () => {
  const searchHandler = (val: string) => {
    console.log(val);
  };
  return (
    <div className="flex items-center gap-2.5 ">
      <img src={logo} className="h-20 bg-white " />
      <div className="flex flex-1 items-center border-2 p-1 gap-1 ">
        <BsSearch />
        <SearchInput
          type="text"
          placeholder="search for Movies,Events,Plays,Sports and Activities"
          changeHandler={searchHandler}
        />
      </div>
    </div>
  );
};

export default Headers;
