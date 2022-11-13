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
    ConditionedData,
    AlldbCollections,
    setLoadedImg9,
    Loaded1,
  } = useContext(AppContext);

  const ConditionForMapping =
    ProductoTipo === "Menor A Mayor Precio"
      ? AlldbCollections.sort(function (x, y) {
          return x.Precio - y.Precio;
        })
      : ProductoTipo === "Nuestros favoritos"
      ? AlldbCollections.filter((res) => res.Favorito === true)
      : ConditionedData.filter((res) => res.Tipo === ProductoTipo);

  const FilterdbProducts = ConditionForMapping.map((Item, index) => (
    <div
      key={index}
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
          onLoad={() => setLoadedImg9(true)}
        />
      </div>
    </div>
  ));

  return (
    <div className="Filter-background">
      <p className="Filter-txt-1">{ProductoTipo}</p>
      <div className="Filter-B1">
        {Loaded1 ? null : <FilterLoader />}
        {FilterdbProducts}
      </div>
    </div>
  );
};

export default Filter;
