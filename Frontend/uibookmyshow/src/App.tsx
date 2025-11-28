import { Route, Routes } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
// import Home from "./components/Home";
// import Headers from "./components/Headers";
import Citites from "./components/Citites";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Citites />} />
      </Routes>
    </div>
  );
}

export default App;
