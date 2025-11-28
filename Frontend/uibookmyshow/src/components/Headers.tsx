import logo from "../assets/bookmyShowlogo.png";
import { BsSearch } from "react-icons/bs";
import SearchInput from "./SearchInput";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Portal from "./Portal";
import CitySearch from "./CitySearch";
const Headers = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeHandler = () => {
    setOpenModal((p) => !p);
  };
  const searchHandler = (val: string) => {
    console.log(val);
  };
  const clickHandler = () => {};
  const menuClickHandler = () => {};
  return (
    <div className="flex items-center gap-2.5 justify-between px-4 ">
      <div className="flex flex-1/2">
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

      <div className="flex items-center gap-4">
        <Button
          buttonName={"Sigin in"}
          clickHandler={closeHandler}
          bg={"red-500"}
        />

        <RxHamburgerMenu onClick={menuClickHandler} />
      </div>
      <Portal open={openModal} onClose={closeHandler}>
        <CitySearch />
      </Portal>
    </div>
  );
};

export default Headers;
