import { useState } from "react";
import TheaterList from "./TheaterList";
const PartnerDashboard = () => {
  const [active, setActive] = useState("bookings");
  return (
    <div>
      <div className="px-12 py-4">
        <h1>Partner DashBoard</h1>
        <div className="flex  border-gray-500 mb-4 shadow-2xs gap-4 ">
          <button
            onClick={() => setActive("bookings")}
            className={`px-4 py-2 border-b-2 transition-all ${
              active == "bookings"
                ? "border-blue-600 text-blue-600 "
                : "border-transparent text-gray-500  hover:text-black"
            }`}
          >
            Bookings
          </button>
          <button
            onClick={() => setActive("addShow")}
            className={`px-4 py-2 border-b-2 transition-all  ${
              active == "addShow"
                ? "border-blue-600 text-blue-600 "
                : "border-transparent text-gray-500  hover:text-black"
            }`}
          >
            Add Shows
          </button>
          <button
            onClick={() => setActive("theater")}
            className={`px-4 py-2 border-b-2 transition-all  ${
              active == "theater"
                ? "border-blue-600 text-blue-600 "
                : "border-transparent text-gray-500  hover:text-black"
            }`}
          >
            Theater
          </button>
        </div>
      </div>
      {active === "theater" && <TheaterList />}
    </div>
  );
};

export default PartnerDashboard;
