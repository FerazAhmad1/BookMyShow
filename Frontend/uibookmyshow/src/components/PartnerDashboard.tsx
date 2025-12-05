import { useState } from "react";

const PartnerDashboard = () => {
  const [active, setActive] = useState("bookings");
  return (
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
      </div>
    </div>
  );
};

export default PartnerDashboard;
