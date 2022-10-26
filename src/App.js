import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";

import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <HashRouter hashType="slash">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}
