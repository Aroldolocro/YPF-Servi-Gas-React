import "./Qualifier.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext, useEffect, useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const Qualifier = () => {
  const {
    setControler2,
    Quealificated,
    setQuealificated,
    sectionName,
    DesayunoQuantity,
    DesayunoQuality,
    AlmuerzoQuantity,
    AlmuerzoQuality,
  } = useContext(AppContext);
  const [Calification, setCalification] = useState();
  const [Loading, setLoading] = useState(true);

  const SendCalification = () => {
    if (sectionName === "Desayunos y meriendas") {
      const NewDoc = {
        Cantidad: DesayunoQuantity + 1,
        Calidad: DesayunoQuality + Calification,
      };
      const db = getFirestore();
      const dbdoc = doc(db, "Calificación", "Desayuno");
      updateDoc(dbdoc, NewDoc);
      setQuealificated(true);
    } else if (sectionName === "Almuerzos y cenas") {
      const NewDoc1 = {
        Cantidad: AlmuerzoQuantity + 1,
        Calidad: AlmuerzoQuality + Calification,
      };
      const db = getFirestore();
      const dbdoc = doc(db, "Calificación", "Almuerzos");
      updateDoc(dbdoc, NewDoc1);
      setQuealificated(true);
    }
  };

  const SVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fillRule="currentColor"
      className="Qualifier-svg-2"
      viewBox="-1 -1 18 18"
      stroke="gray"
      strokeWidth={1.5}
      strokeOpacity={0.5}
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  useEffect(() => {
    if (Quealificated) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [Quealificated]);

  const Loader = <div className="Loader"></div>;

  const QuealificatedMesage = (
    <div className="QuealificatedMesage-background">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="QuealificatedMesage-svg"
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
      <p className="QuealificatedMesage-txt-1">
        ¡Felicitaciones! Tu calificación ha sido enviada
      </p>
      <button
        className="QuealificatedMesage-btn"
        onClick={() => setControler2(false)}
      >
        Aceptar
      </button>
    </div>
  );

  const RenderOfQualificated = (
    <div className="RenderOfQuealificated-background">
      <div className="RenderOfQuealificated-content">
        {Loading ? Loader : QuealificatedMesage}
      </div>
    </div>
  );

  const RenderOfQualificationForm = (
    <div className="RenderOfQualificationForm-background">
      <div className="Qualifier-B2B1">
        <div className="Qualifier-B2B1B1">
          <p className="Qualifier-txt-1">Calificar</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="Qualifier-svg-1"
            viewBox="0 0 16 16"
            stroke="white"
            strokeWidth={0.5}
            onClick={() => setControler2(false)}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
      <div className="Qualifier-B2B2">
        <div className="Qualifier-B2B2B1" onClick={() => setCalification(5)}>
          <p className="Qualifier-txt-2">5</p>
          <div
            className={
              Calification === 5
                ? "Qualifier-B2B2B1B1 Qualifier-B2B2B1B1-filled"
                : "Qualifier-B2B2B1B1"
            }
          >
            {SVG}
            {SVG}
            {SVG}
            {SVG}
            {SVG}
          </div>
        </div>
        <div className="Qualifier-B2B2B1" onClick={() => setCalification(4)}>
          <p className="Qualifier-txt-2">4</p>
          <div
            className={
              Calification === 4
                ? "Qualifier-B2B2B1B1 Qualifier-B2B2B1B1-filled"
                : "Qualifier-B2B2B1B1"
            }
          >
            {SVG}
            {SVG}
            {SVG}
            {SVG}
          </div>
        </div>
        <div className="Qualifier-B2B2B1" onClick={() => setCalification(3)}>
          <p className="Qualifier-txt-2">3</p>
          <div
            className={
              Calification === 3
                ? "Qualifier-B2B2B1B1 Qualifier-B2B2B1B1-filled"
                : "Qualifier-B2B2B1B1"
            }
          >
            {SVG}
            {SVG}
            {SVG}
          </div>
        </div>
        <div className="Qualifier-B2B2B1" onClick={() => setCalification(2)}>
          <p className="Qualifier-txt-2">2</p>
          <div
            className={
              Calification === 2
                ? "Qualifier-B2B2B1B1 Qualifier-B2B2B1B1-filled"
                : "Qualifier-B2B2B1B1"
            }
          >
            {SVG}
            {SVG}
          </div>
        </div>
        <div className="Qualifier-B2B2B1" onClick={() => setCalification(1)}>
          <p className="Qualifier-txt-2">1</p>
          <div
            className={
              Calification === 1
                ? "Qualifier-B2B2B1B1 Qualifier-B2B2B1B1-filled"
                : "Qualifier-B2B2B1B1"
            }
          >
            {SVG}
          </div>
        </div>
      </div>
      <div className="Qualifier-B2B3">
        <button
          className={
            !Calification
              ? "Qualifier-btn Qualifier-btn-disabled"
              : "Qualifier-btn"
          }
          onClick={() => SendCalification()}
          disabled={!Calification}
        >
          Enviar
        </button>
      </div>
    </div>
  );

  return (
    <div className="Qualifier-background">
      <div className="Qualifier-B1" onClick={() => setControler2(false)}></div>
      <div className="Qualifier-B2">
        {Quealificated ? RenderOfQualificated : RenderOfQualificationForm}
      </div>
    </div>
  );
};

export default Qualifier;
