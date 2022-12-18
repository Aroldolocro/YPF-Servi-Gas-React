import "./Qualifier.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import QualifierCheck from "./Components/QualifierCheck";

const Qualifier = () => {
  const { PopUp1Close, SectionData, Calification, SendCalification } =
    useContext(AppContext);

  return (
    <div className="Qualifier-background">
      <div className="Qualifier-content" id="Qualifier-content">
        <div className="Qualifier-B1">
          <div className="Qualifier-B1B1">
            <p className="Qualifier-txt-1">Calificaciones</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Qualifier-svg-1"
              viewBox="0 0 16 16"
              stroke="#ffffff"
              strokeWidth={0.5}
              onClick={() => PopUp1Close()}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className="Qualifier-B1B2">
            <QualifierCheck />
            <div className="Qualifier-B1B2B1">
              <p className="Qualifier-txt-2">{SectionData.Section}</p>
              <div className="Qualifier-B1B2B1B1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#ffae00"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p className="Qualifier-txt-3">{SectionData.Qualification}</p>
              </div>
              <p className="Qualifier-txt-4">
                Calificaciones ( {SectionData.QualificationQuantity} )
              </p>
            </div>
          </div>
        </div>
        <div className="Qualifier-B2">
          <button
            className={
              Calification
                ? "Qualifier-btn-1"
                : "Qualifier-btn-1 Qualifier-btn-1-disabled"
            }
            onClick={() => SendCalification()}
            disabled={!Calification}
          >
            Enviar
          </button>
        </div>
      </div>
      <div
        className="Qualifier-shadow"
        id="Qualifier-shadow"
        onClick={() => PopUp1Close()}
      ></div>
    </div>
  );
};

export default Qualifier;
