import "./Category.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import CategoryLoader from "./CategoryLoader";

const Category = () => {
  const {
    AlldbCollections,
    PopUp4Close,
    setCollection,
    setProductoTipo,
    ProductoTipo,
    CategoryImages_Function,
    Loaded2,
  } = useContext(AppContext);

  const CategoryFromDB = AlldbCollections.filter((x) => x.ExplorerPosition)
    .sort(function (x, y) {
      return x.ExplorerPosition - y.ExplorerPosition;
    })
    .map((x, i) => (
      <div
        key={i}
        className={Loaded2 ? "CategoryFromDB-background" : "NotDisplayed"}
        onClick={() =>
          setProductoTipo(ProductoTipo === x.Tipo ? undefined : x.Tipo) &
          setCollection(x.Colección) &
          PopUp4Close()
        }
      >
        <div
          className={
            ProductoTipo === x.Tipo
              ? "CategoryFromDB-B1 CategoryFromDB-B1-selected"
              : "CategoryFromDB-B1"
          }
        >
          <img
            src={x.Imagen}
            className={
              ProductoTipo === x.Tipo
                ? "CategoryFromDB-img-1 CategoryFromDB-img-1-selected"
                : "CategoryFromDB-img-1"
            }
            alt=""
            onLoad={() => CategoryImages_Function(i)}
          />
          {ProductoTipo === x.Tipo && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#2796ff"
              className="CategoryFromDB-svg-1"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          )}
        </div>
        <p className="CategoryFromDB-txt-1">{x.Tipo}</p>
      </div>
    ));

  return (
    <div className="Category-background">
      <div className="Category-B1" id="Category-B1">
        <p className="Category-txt-1">Categorías</p>
        <div className="Category-B1B1">
          {CategoryFromDB}
          {!Loaded2 && <CategoryLoader />}
        </div>
        <p className="Category-txt-2" onClick={() => PopUp4Close()}>
          Cerrar
        </p>
      </div>
      <div
        className="Category-Shadow"
        id="Category-Shadow"
        onClick={() => PopUp4Close()}
      ></div>
    </div>
  );
};

export default Category;
