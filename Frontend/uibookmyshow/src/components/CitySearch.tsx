import Citites from "./Citites";
import DetectLocation from "./DetectLocation";
import SearchInput from "./SearchInput";
import { BsSearch } from "react-icons/bs";

const CitySearch = () => {
  const searchHandler = () => {};
  return (
    <div className="m-auto flex flex-col px-8 py-4 shadow-2xl rounded-xl bg-white ">
      <div className="flex flex-1  items-center border-2 py-2 px-2 gap-4 basis-4/5 ">
        <BsSearch />
        <SearchInput
          type="text"
          placeholder="search for City"
          changeHandler={searchHandler}
        />
      </div>
      <DetectLocation />
      <Citites />
    </div>
  );
};

export default CitySearch;
