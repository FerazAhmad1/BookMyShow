// Theater.jsx
import { type ITheater } from "../types/types";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

const Theater: React.FC<ITheater> = ({ _id, address, name }) => {
  const shortAddress = [address.buildingName, address.street, address.district]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="flex items-center justify-between p-6 rounded-lg bg-white shadow-sm hover:shadow-2xl transition">
      <div className="w-2/3">
        <h2 className="text-lg font-semibold text-blue-600 truncate">{name}</h2>

        <p className="text-sm text-gray-600 leading-snug line-clamp-2">
          {shortAddress}
        </p>

        <p className="text-xs text-gray-500 line-clamp-1">
          {address.landMark}, Floor {address.floorNumber}
        </p>
      </div>

      <Link
        to={`/theater/${_id}`}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <IoChevronForward size={24} className="text-gray-600" />
      </Link>
    </div>
  );
};

export default Theater;
