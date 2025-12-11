import Theater from "./Theater";
const sampleTheaters = [
  {
    _id: "67a820fae124c932e9213801",
    name: "PVR Cinemas",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "12A",
      buildingName: "Galaxy Tower",
      floorNumber: 3,
      landMark: "Near City Mall",
      street: "MG Road",
      zipcode: 560001,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213802",
    name: "INOX Multiplex",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "22B",
      buildingName: "Skyline Plaza",
      floorNumber: 2,
      landMark: "Beside Metro Station",
      street: "Brigade Road",
      zipcode: 560002,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213803",
    name: "Carnival Cinemas",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "45C",
      buildingName: "Emerald Mall",
      floorNumber: 1,
      landMark: "Opp. City Hospital",
      street: "Church Street",
      zipcode: 560003,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213804",
    name: "Cinepolis Arena",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "9D",
      buildingName: "Prime Square",
      floorNumber: 4,
      landMark: "Near Tech Park",
      street: "Outer Ring Road",
      zipcode: 560004,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213805",
    name: "Miraj Cinemas",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "18E",
      buildingName: "Sunshine Tower",
      floorNumber: 5,
      landMark: "Behind Central Mall",
      street: "Indiranagar Road",
      zipcode: 560005,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213806",
    name: "DT Cinemas",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "30F",
      buildingName: "Crystal Hub",
      floorNumber: 2,
      landMark: "Near Lake View",
      street: "Koramangala 4th Block",
      zipcode: 560006,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213807",
    name: "Wave Cinemas",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "55G",
      buildingName: "Opal Center",
      floorNumber: 3,
      landMark: "Near Tech Village",
      street: "Bellandur Road",
      zipcode: 560007,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213808",
    name: "Rex Theatre",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "77H",
      buildingName: "Grand Complex",
      floorNumber: 1,
      landMark: "Signal Junction",
      street: "Residency Road",
      zipcode: 560008,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213809",
    name: "Urvashi Cinema",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "90I",
      buildingName: "Heritage Building",
      floorNumber: 2,
      landMark: "Opp. Bus Stand",
      street: "Lalbagh Road",
      zipcode: 560009,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
  {
    _id: "67a820fae124c932e9213810",
    name: "Central Talkies",
    ownerId: "67a820fae124c932e92138d1",
    address: {
      buildingNumber: "101J",
      buildingName: "Vintage Plaza",
      floorNumber: 1,
      landMark: "Near Old Market",
      street: "Commercial Street",
      zipcode: 560010,
      district: "Bangalore Urban",
      state: "Karnataka",
      country: "India",
    },
  },
];

const TheaterList = () => {
  return (
    <div className=" flex flex-col gap-4 px-20">
      {sampleTheaters.map((el) => {
        return (
          <div className="">
            <Theater {...el} />
          </div>
        );
      })}
    </div>
  );
};

export default TheaterList;
