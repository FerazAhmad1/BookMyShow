import { Route, Routes } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Home from "./components/Home";
// import Headers from "./components/Headers";

import CitySearch from "./components/CitySearch";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
