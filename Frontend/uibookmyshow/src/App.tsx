import { Route, Routes } from "react-router-dom";
import PartnerDashboard from "./components/PartnerDashboard";
// import LoginSignup from "./components/LoginSignup";
// import Home from "./components/Home";
// import Headers from "./components/Headers";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<PartnerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
