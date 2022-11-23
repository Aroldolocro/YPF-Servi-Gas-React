import "./Filter.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import FilterLoader from "./FilterLoader";

const Filter = () => {
  const {
    setProductId,
    ProductoTipo,
    setProductCollection,
    setOpenPopUp,
    Loaded1,
    MapImage_2_Function,
    ConditionForMapping,
  } = useContext(AppContext);

  const FilterdbProducts = ConditionForMapping.map((Item, i) => (
    <div
      key={i}
      className={Loaded1 ? "SectionPagedbProducts-background" : "NotDisplayed"}
      onClick={() =>
        setProductId(Item.id) &
        setProductCollection(Item.Colección) &
        setOpenPopUp(true)
      }
    >
      <div className="SectionPagedbProducts-B1">
        <p className="SectionPagedbProducts-txt-1">{Item.Nombre}</p>
        <p className="SectionPagedbProducts-txt-2">{Item.Descripción}</p>
        <p className="SectionPagedbProducts-txt-3">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(Item.Precio)}
        </p>
      </div>
      <div className="SectionPagedbProducts-B2">
        <img
          src={Item.Imagen}
          className="SectionPagedbProducts-img"
          alt=""
          onLoad={() => MapImage_2_Function(i)}
        />
      </div>
    </div>
  ));

  return (
    <div className="Filter-background">
      <p className="Filter-txt-1">{ProductoTipo}</p>
      <div className="Filter-B1">
        {!Loaded1 && <FilterLoader />}
        {FilterdbProducts}
      </div>
    </div>
  );
};

export default Filter;
