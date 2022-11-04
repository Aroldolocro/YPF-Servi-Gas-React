import "./App.css";
import "./Firebase/Firebase";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import DesayunosPage from "./Pages/DesayunosPage/DesayunosPage";
import Navbar from "./Components/Navbar/Navbar";
import ConstAppContext from "./AppContext/AppContext";

export default function App() {
  return (
    <ConstAppContext>
      <HashRouter hashType="slash">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={"404"} />
          <Route path="/:Path1" element={<DesayunosPage />} />
          {/* <Route path="/platos" element={<PlatosPage />} /> */}
        </Routes>
      </HashRouter>
    </ConstAppContext>
  );
}
