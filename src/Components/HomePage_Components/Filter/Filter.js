import "./Filter.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext, useState } from "react";

const Filter = () => {
  const {
    setProductId,
    ProductoTipo,
    Loading,
    setProductCollection,
    setOpenPopUp,
    ConditionedData,
    AlldbCollections,
  } = useContext(AppContext);
  const [InsideLoading, setInsideLoading] = useState(false);

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
      className={
        Loading && InsideLoading
          ? "SectionPagedbProducts-background"
          : "SectionPagedbProducts-background-notdisplayed"
      }
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
          onLoad={() => setInsideLoading(true)}
        />
      </div>
    </div>
  ));

  const SectionPagedbProducts_Loader = (
    <>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
    </>
  );

  return (
    <div className="Filter-background">
      <p className="Filter-txt-1">{ProductoTipo}</p>
      <div className="Filter-B1">
        {SectionPagedbProducts_Loader}
        {FilterdbProducts}
      </div>
    </div>
  );
};

export default Filter;
