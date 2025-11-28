import ahmadabadLogo from "../assets/ahd.avif";
import bangloreLogo from "../assets/bang.avif";
import chandigarhLogo from "../assets/chd.avif";
import chennaiLogo from "../assets/chen.avif";
import hyderabadLogo from "../assets/hyd.png";
import kochiLogo from "../assets/koch.avif";
import kolkattaLogo from "../assets/kolk.avif";
import mumbaiLogo from "../assets/mumbaiIcon.avif";
import puneLogo from "../assets/pune.png";

interface City {
  img: string;
  name: string;
  latitude: number;
  longitude: number;
}

const cityArr: City[] = [
  {
    img: ahmadabadLogo,
    name: "Ahmedabad",
    latitude: 23.0225,
    longitude: 72.5714,
  },
  {
    img: bangloreLogo,
    name: "Bengaluru",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    img: chandigarhLogo,
    name: "Chandigarh",
    latitude: 30.7333,
    longitude: 76.7794,
  },
  { img: chennaiLogo, name: "Chennai", latitude: 13.0827, longitude: 80.2707 },
  {
    img: hyderabadLogo,
    name: "Hyderabad",
    latitude: 17.385,
    longitude: 78.4867,
  },
  { img: kochiLogo, name: "Kochi", latitude: 9.9312, longitude: 76.2673 },
  { img: kolkattaLogo, name: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
  { img: mumbaiLogo, name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { img: puneLogo, name: "Pune", latitude: 18.5204, longitude: 73.8567 },
];

const Citites = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      {cityArr.map((obj) => {
        return (
          <div className="flex flex-col justify-center items-center">
            <img src={obj.img} />
            <p>{obj.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Citites;
