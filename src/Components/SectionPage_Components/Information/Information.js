import "./Information.css";
import Logo2 from "../../../Images/Logo2.png";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const Information = () => {
  const { setOpenPopUp2, sectionName } = useContext(AppContext);
  return (
    <div className="Information-background">
      <div
        className="Information-B1"
        onClick={() => setOpenPopUp2(false)}
      ></div>
      <div className="Information-B2">
        <div className="Information-B2B1">
          <div className="Information-B2B1B1">
            <div className="Information-B2B1B1B1">
              <img src={Logo2} className="Information-img" alt="" />
              <div className="Information-B2B1B1B1B1">
                <p className="Information-txt-1">Servi Gas</p>
                <p className="Information-txt-2">{sectionName}</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Information-svg-1"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth={0.5}
              onClick={() => setOpenPopUp2(false)}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        <div className="Information-B2B2">
          <div className="Information-B2B2B1">
            <p className="Information-txt-1">Dirección:</p>
            <p className="Information-txt-2">Av Kennedy y Av Mariano Moreno</p>
          </div>
          <div className="Information-B2B2B1">
            <p className="Information-txt-1">Horario de atención:</p>
            <p className="Information-txt-2">8:00 - 00:00</p>
          </div>
          <div className="Information-B2B2B2">
            <button
              className="Information-btn"
              onClick={() => setOpenPopUp2(false)}
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
