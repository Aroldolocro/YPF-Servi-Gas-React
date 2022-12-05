import "./Explorer.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import ExplorerMobile from "./Components/ExplorerMobile";
import ExplorerDesktop from "./Components/ExplorerDesktop";

const Explorer = () => {
  const { ProductoTipo, setProductoTipo, Mobile } = useContext(AppContext);

  return (
    <div className="Explorer-background">
      <div className="Explorer-B1">
        {Mobile ? <ExplorerMobile /> : <ExplorerDesktop />}
      </div>
      <div className="Explorer-B2">
        <p className="Explorer-txt-1">Filtrar por :</p>
        <div
          className={
            ProductoTipo === "Promociones"
              ? "Explorer-B2B1 Explorer-B2B1-selected"
              : "Explorer-B2B1"
          }
          onClick={() =>
            setProductoTipo(
              ProductoTipo === "Promociones" ? undefined : "Promociones"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className={
              ProductoTipo === "Promociones"
                ? "Explorer-svg-1 Explorer-svg-1-selected"
                : "Explorer-svg-1"
            }
            viewBox="0 0 16 16"
          >
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
          </svg>
          <p
            className={
              ProductoTipo === "Promociones"
                ? "Explorer-txt-2 Explorer-txt-2-selected"
                : "Explorer-txt-2"
            }
          >
            Promociones
          </p>
        </div>
        <div
          className={
            ProductoTipo === "Menor A Mayor Precio"
              ? "Explorer-B2B1 Explorer-B2B1-selected"
              : "Explorer-B2B1"
          }
          onClick={() =>
            setProductoTipo(
              ProductoTipo === "Menor A Mayor Precio"
                ? undefined
                : "Menor A Mayor Precio"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className={
              ProductoTipo === "Menor A Mayor Precio"
                ? "Explorer-svg-1 Explorer-svg-1-selected"
                : "Explorer-svg-1"
            }
            viewBox="0 0 16 16"
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
          <p
            className={
              ProductoTipo === "Menor A Mayor Precio"
                ? "Explorer-txt-2 Explorer-txt-2-selected"
                : "Explorer-txt-2"
            }
          >
            De mayor a menor precio
          </p>
        </div>
        <div
          className={
            ProductoTipo === "Nuestros favoritos"
              ? "Explorer-B2B1 Explorer-B2B1-selected"
              : "Explorer-B2B1"
          }
          onClick={() =>
            setProductoTipo(
              ProductoTipo === "Nuestros favoritos"
                ? undefined
                : "Nuestros favoritos"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className={
              ProductoTipo === "Nuestros favoritos"
                ? "Explorer-svg-1 Explorer-svg-1-selected"
                : "Explorer-svg-1"
            }
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <p
            className={
              ProductoTipo === "Nuestros favoritos"
                ? "Explorer-txt-2 Explorer-txt-2-selected"
                : "Explorer-txt-2"
            }
          >
            Nuestros favoritos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
