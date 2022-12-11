import "./Products.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const Products = () => {
  const {
    ProductsBySectionPath,
    setOpenPopUp,
    setProductId,
    setProductCollection,
  } = useContext(AppContext);

  const SectionPageProducts = ProductsBySectionPath.sort(function (x, y) {
    return x.SectionPosition - y.SectionPosition;
  }).map((x, i) => (
    <div
      key={i}
      className={
        x.Titulo
          ? "SectionPageProducts-background ColumnBreak"
          : "SectionPageProducts-background HardPadding"
      }
      onClick={() =>
        setProductId(x.id) &
        setProductCollection(x.Colección) &
        setOpenPopUp(true)
      }
    >
      {x.Titulo && <p className="SectionPageProducts-txt-1">{x.Titulo}</p>}
      <div className="SectionPageProducts-B1">
        <div className="SectionPageProducts-B1B1">
          <p className="SectionPageProducts-txt-2">{x.Nombre}</p>
          <p className="SectionPageProducts-txt-3">{x.Descripción}</p>
          <p className="SectionPageProducts-txt-4">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(x.Precio)}
          </p>
        </div>
        <img src={x.Imagen} className="SectionPageProducts-img-1" alt="" />
      </div>
    </div>
  ));

  return <div className="Products-background">{SectionPageProducts}</div>;
};

export default Products;
