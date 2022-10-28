import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import ConstAppContext from "./AppContext/AppContext";

export default function App() {
  return (
    <ConstAppContext>
      <HashRouter hashType="slash">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </ConstAppContext>
  );
}
