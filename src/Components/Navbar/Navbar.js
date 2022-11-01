import "./Navbar.css";
import Searcher from "./Components/Searcher/Searcher";
import Menu from "./Components/Menu/Menu";
import { AppContext } from "../../AppContext/AppContext";
import { useContext, useEffect } from "react";

const Navbar = () => {
  const { Controler1, setControler1 } = useContext(AppContext);

  useEffect(() => {
    if (Controler1) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [Controler1]);

  return (
    <div className="Navbar-background">
      {Controler1 && <Menu />}
      <div className="Navbar-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="Navbar-svg-1"
          viewBox="0 0 16 16"
          stroke="#404040"
          stroke-width="0.3"
          onClick={() => setControler1(true)}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <Searcher />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="Navbar-svg-1"
          viewBox="0 0 16 16"
          stroke="#404040"
          stroke-width="0.3"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
