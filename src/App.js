import "./App.css";
import "./Firebase/Firebase";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SectionPage from "./Pages/SectionPage/SectionPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Navbar from "./Components/Navbar/Navbar";
import ConstAppContext from "./AppContext/AppContext";
import Popup from "./Components/Popup/Popup";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <ConstAppContext>
      <HashRouter hashType="slash">
        <Navbar />
        <Popup />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={"404"} />
          <Route exact path="/:Path1" element={<SectionPage />} />
          <Route path="/Contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </ConstAppContext>
  );
}
