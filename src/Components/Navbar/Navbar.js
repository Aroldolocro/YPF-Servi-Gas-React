import "./Navbar.css";
import Logo2 from "../../Images/Logo2.png";
import Searcher from "./Components/Searcher/Searcher";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { setOpenPopUp3, OpenPopUp5 } = useContext(AppContext);

  return (
    <div className="Navbar-background">
      <div className="Navbar-B1">
        <div className="Navbar-B1B1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className={
              OpenPopUp5 ? "Navbar-svg-1 NoClickEvent" : "Navbar-svg-1"
            }
            viewBox="0 0 16 16"
            stroke="#404040"
            strokeWidth={0.3}
            onClick={() => setOpenPopUp3(true)}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <img
            src={Logo2}
            className="Navbar-img-1"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
      </div>
      <Searcher />
      <div className="Navbar-B2">
        <div className="Navbar-B1B1">
          <p className="Navbar-txt-1" onClick={() => navigate("/Contacto")}>
            Contactános
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className={
              OpenPopUp5 ? "Navbar-svg-1 NoClickEvent" : "Navbar-svg-1"
            }
            viewBox="-1 0 18 16"
            stroke="#404040"
            strokeWidth={0.3}
            onClick={() => navigate("/Contacto")}
          >
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
