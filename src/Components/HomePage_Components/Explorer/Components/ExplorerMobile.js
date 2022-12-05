import "../Explorer.css";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";
import { ExplorerMobileLoader } from "./ExplorerLoader";

const ExplorerMobile = () => {
  const {
    setCollection,
    setProductoTipo,
    ProductoTipo,
    ExplorerMobileImages_Function,
    ExplorerMobileArray,
    ExplorerMobileImages,
    setOpenPopUp4,
  } = useContext(AppContext);

  const ExplorerMobileFromDB = ExplorerMobileArray.map((x, i) => (
    <div
      className={
        ExplorerMobileImages
          ? "ExplorerProductsFromDB-background"
          : "NotDisplayed"
      }
      key={i}
      onClick={() =>
        setProductoTipo(ProductoTipo === x.Tipo ? undefined : x.Tipo) &
        setCollection(x.Colección) &
        window.navigator.vibrate(300)
      }
    >
      <div
        className={
          ProductoTipo === x.Tipo
            ? "ExplorerProductsFromDB-B1 ExplorerProductsFromDB-B1-selected"
            : "ExplorerProductsFromDB-B1"
        }
      >
        <img
          src={x.Imagen}
          className={
            ProductoTipo === x.Tipo
              ? "ExplorerProductsFromDB-img-1 ExplorerProductsFromDB-img-1-selected"
              : "ExplorerProductsFromDB-img-1"
          }
          alt=""
          onLoad={() => ExplorerMobileImages_Function(i)}
        />
        {ProductoTipo === x.Tipo && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#2796ff"
            className="ExplorerProductsFromDB-svg-1"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        )}
      </div>
      <p
        className={
          ProductoTipo === x.Tipo
            ? "ExplorerProductsFromDB-txt-1 ExplorerProductsFromDB-txt-1-selected"
            : "ExplorerProductsFromDB-txt-1"
        }
      >
        {x.Tipo}
      </p>
    </div>
  ));

  const VerTodosButton = (
    <div
      className={ExplorerMobileImages ? "ExplorerMobile-B1" : "NotDisplayed"}
      onClick={() => setOpenPopUp4(true)}
    >
      <div className="ExplorerMobile-B1B1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="white"
          stroke="white"
          strokeWidth={1}
          viewBox="0 0 16 16"
          className="ExplorerMobile-svg-1"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <p className="ExplorerMobile-txt-1">Ver todos</p>
      </div>
    </div>
  );

  return (
    <>
      {ExplorerMobileFromDB}
      {VerTodosButton}
      {!ExplorerMobileImages && <ExplorerMobileLoader />}
    </>
  );
};

export default ExplorerMobile;
