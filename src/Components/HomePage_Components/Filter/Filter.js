import "./Filter.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import FilterLoader from "./FilterLoader";

const Filter = () => {
  const {
    ProductoTipo,
    ConditionForMapping,
    FilterImages_Function,
    FilterImages,
  } = useContext(AppContext);

  const FilterdbProducts = ConditionForMapping.map((x, i) => (
    <div
      key={i}
      className={FilterImages ? "FilterdbProducts-background" : "NotDisplayed"}
    >
      <div className="FilterdbProducts-B1">
        <p className="FilterdbProducts-txt-1">{x.Nombre}</p>
        <p className="FilterdbProducts-txt-2">{x.Descripción}</p>
        <p className="FilterdbProducts-txt-3">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(x.Precio)}
        </p>
      </div>
      <img
        src={x.Imagen}
        className="FilterdbProducts-img-1"
        alt=""
        onLoad={() => FilterImages_Function(i)}
      />
    </div>
  ));

  return (
    <div className="Filter-background">
      <p className="Filter-txt-1">{ProductoTipo}</p>
      <div className="Filter-B1">
        {FilterdbProducts}
        {!FilterImages && <FilterLoader />}
      </div>
    </div>
  );
};

export default Filter;
