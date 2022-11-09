import "./ItemDetail.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

const ItemDetail = () => {
  const { Controler3, setControler3, Controler4 } = useContext(AppContext);
  const [data, setData] = useState({});
  const [data2, setData2] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const dbdoc = doc(db, Controler4, Controler3);
      getDoc(dbdoc).then((res) => setData({ id: res.id, ...res.data() }));
      getDoc(dbdoc).then((res) => setData2(res.get("Acompañamientos")));
    }, 1000);
  }, [Controler3, Controler4]);

  return (
    <div className="ItemDetail-background">
      <div className="ItemDetail-B1">
        {Loading ? (
          <p className="ItemDetail-txt-1">{data.Nombre}</p>
        ) : (
          <div className="ItemDetail-txt-1-loading"></div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="ItemDetail-svg-1"
          viewBox="0 0 16 16"
          stroke="white"
          strokeWidth={0.5}
          onClick={() => setControler3()}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <div className="ItemDetail-B2">
        <div
          className={
            Loading
              ? "ItemDetail-B2B1"
              : "ItemDetail-B2B1 ItemDetail-B2B1-loading"
          }
        >
          <img
            src={data.Imagen}
            className={
              Loading
                ? "ItemDetail-img"
                : "ItemDetail-img ItemDetail-img-notdisplayed"
            }
            alt=""
            onLoad={() => setLoading(true)}
          />
        </div>
        <div className="ItemDetail-B2B2">
          {Loading ? (
            <p className="ItemDetail-txt-2">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(data.Precio)}
            </p>
          ) : (
            <div className="ItemDetail-txt-2-loading"></div>
          )}
          {Loading ? (
            <p className="ItemDetail-txt-3">{data.Tipo}</p>
          ) : (
            <div className="ItemDetail-txt-3-loading"></div>
          )}
        </div>
        {Loading ? (
          <p className="ItemDetail-txt-4">{data.Descripción}</p>
        ) : (
          <div className="ItemDetail-txt-4-loading"></div>
        )}
        {data2 && Loading && (
          <div className="ItemDetail-B2B3">
            <p className="ItemDetail-txt-2">Acompañamientos disponibles</p>
            <div className="ItemDetail-B2B3B1">
              {data2.map((option) => (
                <div className="ItemDetail-B2B3B1B1">• {option}</div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="ItemDetail-B3">
        <button className="ItemDetail-btn" onClick={() => setControler3()}>
          Listo
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;