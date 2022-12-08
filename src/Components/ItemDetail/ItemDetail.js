import "./ItemDetail.css";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";
import { ItemDetailLoader } from "./ItemDetailLoader";

const ItemDetail = () => {
  const {
    SelectedProduct,
    Acompañamientos,
    Extras,
    PopUpClose,
    setItemDetailImage,
    ItemDetailLoaded,
  } = useContext(AppContext);

  return (
    <div className="ItemDetail-background">
      <div className="ItemDetail-content" id="ItemDetail-content">
        <div className="ItemDetail-B1">
          {!ItemDetailLoaded && <div className="ItemDetail-txt-1-loader"></div>}
          <p className={ItemDetailLoaded ? "ItemDetail-txt-1" : "NotDisplayed"}>
            {SelectedProduct.Nombre}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="ItemDetail-svg-1"
            viewBox="0 0 16 16"
            stroke="#ffffff"
            strokeWidth={0.5}
            onClick={() => PopUpClose()}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        {!ItemDetailLoaded && <ItemDetailLoader />}
        <div className={ItemDetailLoaded ? "ItemDetail-B2" : "NotDisplayed"}>
          <div className="ItemDetail-B2B1">
            <img
              src={SelectedProduct.Imagen}
              className="ItemDetail-img-1"
              alt=""
              onLoad={() => setItemDetailImage(true)}
            />
            <p className="ItemDetail-txt-2">
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(SelectedProduct.Precio)}
            </p>
          </div>

          <div className="ItemDetail-B2B2">
            <p className="ItemDetail-txt-3">{SelectedProduct.Descripción}</p>
            {Acompañamientos && (
              <div className="ItemDetail-Acompañamientos-background">
                <p className="ItemDetail-Acompañamientos-txt-1">
                  Acompaña tu plato con :
                </p>
                <div className="ItemDetail-Acompañamientos-B1">
                  {Acompañamientos.map((x, i) => (
                    <p key={i} className="ItemDetail-Acompañamientos-txt-2">
                      {x}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {Extras && (
              <div className="ItemDetail-Acompañamientos-background">
                <p className="ItemDetail-Acompañamientos-txt-1">
                  Extras disponibles :
                </p>
                <div className="ItemDetail-Acompañamientos-B1">
                  {Extras.map((x, i) => (
                    <p key={i} className="ItemDetail-Acompañamientos-txt-2">
                      {x}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="ItemDetail-B3">
          <div className="ItemDetail-B3B1" onClick={() => PopUpClose()}>
            <p className="ItemDetail-txt-4">Listo</p>
          </div>
        </div>
      </div>
      <div
        className="ItemDetail-shadow"
        onClick={() => PopUpClose()}
        id="ItemDetail-shadow"
      ></div>
    </div>
  );
};

export default ItemDetail;
