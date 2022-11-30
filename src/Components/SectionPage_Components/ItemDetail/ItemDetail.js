import "./ItemDetail.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import { ItemDetailLoader1, ItemDetailLoader2 } from "./ItemDetailLoader";

const ItemDetail = () => {
  const { data3, data4, data5, setOpenPopUp, setLoadedImg30, Loaded4 } =
    useContext(AppContext);

  return (
    <div className="ItemDetail-background">
      <div className="ItemDetail-B1">
        {Loaded4 ? (
          <p className="ItemDetail-txt-1">{data3.Nombre}</p>
        ) : (
          <ItemDetailLoader1 />
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
          onClick={() => setOpenPopUp(false)}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      {!Loaded4 && <ItemDetailLoader2 />}
      <div className={Loaded4 ? "ItemDetail-B2" : "NotDisplayed"}>
        <div className="ItemDetail-B2B1">
          <img
            src={data3.Imagen}
            className="ItemDetail-img"
            alt=""
            onLoad={() => setLoadedImg30(true)}
          />
        </div>
        <div className="ItemDetail-B2B2">
          <p className="ItemDetail-txt-2">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(data3.Precio)}
          </p>
          <p className="ItemDetail-txt-3">{data3.Tipo}</p>
        </div>
        <p className="ItemDetail-txt-4">{data3.Descripción}</p>
        {data4 && (
          <div className="ItemDetail-B2B3">
            <p className="ItemDetail-txt-2">Acompañamientos disponibles</p>
            <div className="ItemDetail-B2B3B1">
              {data4.map((option, index) => (
                <div className="ItemDetail-B2B3B1B1" key={index}>
                  • {option}
                </div>
              ))}
            </div>
          </div>
        )}
        {data5 && (
          <div className="ItemDetail-B2B3">
            <p className="ItemDetail-txt-2">Extras disponibles :</p>
            <div className="ItemDetail-B2B3B1">
              {data5.map((option, index) => (
                <div className="ItemDetail-B2B3B1B1" key={index}>
                  • {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="ItemDetail-B3">
        <button className="ItemDetail-btn" onClick={() => setOpenPopUp(false)}>
          Listo
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
