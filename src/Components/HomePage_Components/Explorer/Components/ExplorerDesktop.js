import "../Explorer.css";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";
import { ExplorerDesktopLoader } from "./ExplorerLoader";

const ExplorerDesktop = () => {
  const {
    AlldbCollections,
    setCollection,
    setProductoTipo,
    ProductoTipo,
    ExplorerDesktopImages_Function,
    HomePageLoaded,
  } = useContext(AppContext);

  const ExplorerMobileFromDB = AlldbCollections.filter(
    (x) => x.ExplorerPosition
  )
    .sort(function (x, y) {
      return x.ExplorerPosition - y.ExplorerPosition;
    })
    .map((x, i) => (
      <div
        className={
          HomePageLoaded ? "ExplorerProductsFromDB-background" : "NotDisplayed"
        }
        key={i}
        onClick={() =>
          setProductoTipo(ProductoTipo === x.Tipo ? undefined : x.Tipo) &
          setCollection(x.Colección)
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
            onLoad={() => ExplorerDesktopImages_Function(i)}
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

  return (
    <>
      {ExplorerMobileFromDB}
      {!HomePageLoaded && <ExplorerDesktopLoader />}
    </>
  );
};

export default ExplorerDesktop;
