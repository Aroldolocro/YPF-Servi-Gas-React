import "./Information.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const Information = () => {
  const { SectionData, PopUp2Close } = useContext(AppContext);
  return (
    <div className="Information-background">
      <div className="Information-content" id="Information-content">
        <div className="Information-B1">
          <div className="Information-B1B1">
            <img src={SectionData.Logo} className="Information-img-1" alt="" />
            <div className="Information-B1B1B1">
              <p className="Information-txt-1">{SectionData.Restaurant}</p>
              <p className="Information-txt-2">{SectionData.Section}</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="ItemDetail-svg-1"
            viewBox="0 0 16 16"
            stroke="#ffffff"
            strokeWidth={0.5}
            onClick={() => PopUp2Close()}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="Information-B2">
          <div className="Information-B2B1">
            <p className="Information-txt-3">Dirección:</p>
            <p className="Information-txt-4">{SectionData.Location}</p>
          </div>
          <div className="Information-B2B1 NoBorder">
            <p className="Information-txt-3">Horario de atención:</p>
            <p className="Information-txt-4">{SectionData.Hours}</p>
          </div>
        </div>
        <div className="Information-B3">
          <div className="Information-B3B1" onClick={() => PopUp2Close()}>
            <p className="Information-txt-5">Entendido</p>
          </div>
        </div>
      </div>
      <div
        className="Information-shadow"
        id="Information-shadow"
        onClick={() => PopUp2Close()}
      ></div>
    </div>
  );
};

export default Information;
