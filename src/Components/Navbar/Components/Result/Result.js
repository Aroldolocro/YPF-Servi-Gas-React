import "./Result.css";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";
import { ResultLoader1 } from "./ResultLoader";
import NotFound from "../../../../Images/NotFound.png";

const Result = () => {
  const {
    setProductId,
    setProductCollection,
    Filtered,
    setOpenPopUp,
    Loaded5,
    ResultInitialState,
    AlldbCollections,
    MapImage_3_Function,
    ResultFound,
    Loader,
    PopUp5Close,
  } = useContext(AppContext);

  const RenderOfInitialStatedbProducts = AlldbCollections.slice(0, 5).map(
    (value, i) => {
      return (
        <div
          key={i}
          className={
            Loaded5 ? "RenderOfResultdbProducts-background" : "NotDisplayed"
          }
          onClick={() =>
            setProductId(value.id) &
            setProductCollection(value.Colección) &
            setOpenPopUp(true)
          }
        >
          <div className="RenderOfResultdbProducts-B1">
            <img
              src={value.Imagen}
              className="RenderOfResultdbProducts-img"
              alt=""
              onLoad={() => MapImage_3_Function(i)}
            />
            <p className="RenderOfResultdbProducts-txt-1">{value.Nombre}</p>
          </div>
          <p className="RenderOfResultdbProducts-txt-2">{value.Tipo}</p>
        </div>
      );
    }
  );

  const RenderOfResultdbProducts = Filtered.slice(0, 5).map((value, i) => {
    return (
      <div
        key={i}
        className={
          ResultFound ? "RenderOfResultdbProducts-background" : "NotDisplayed"
        }
        onClick={() =>
          setProductId(value.id) &
          setProductCollection(value.Colección) &
          setOpenPopUp(true)
        }
      >
        <div className="RenderOfResultdbProducts-B1">
          <img
            src={value.Imagen}
            className="RenderOfResultdbProducts-img"
            alt=""
          />
          <p className="RenderOfResultdbProducts-txt-1">{value.Nombre}</p>
        </div>
        <p className="RenderOfResultdbProducts-txt-2">{value.Tipo}</p>
      </div>
    );
  });

  const RenderOfInitialState = (
    <div className="RenderOfInitialState-background">
      <div className="RenderOfInitialState-B1">
        <p className="RenderOfInitialState-txt-1">Nuestro Menú</p>
      </div>
      <div className="RenderOfInitialState-B2">
        {!Loaded5 && <ResultLoader1 />}
        {RenderOfInitialStatedbProducts}
      </div>
    </div>
  );

  const RenderOfNotFound = (
    <div
      className={
        !ResultFound && !Loader ? "RenderOfNotFound-background" : "NotDisplayed"
      }
    >
      <img src={NotFound} className="RenderOfNotFound-img" alt="" />
      <p className="RenderOfNotFound-txt-1">
        Oops! no encontramos lo que estás buscando...
      </p>
    </div>
  );

  const RenderOfFinalState = (
    <div className="RenderOfFinalState-background">
      <div className="RenderOfFinalState-B1">
        <p className="RenderOfFinalState-txt-1">Resultado</p>
      </div>
      <div className="RenderOfFinalState-B2">
        {Loader && <ResultLoader1 />}
        {RenderOfResultdbProducts}
        {RenderOfNotFound}
      </div>
    </div>
  );

  return (
    <div className="Result-background">
      <div className="Result-content" id="Result-content">
        {ResultInitialState ? RenderOfInitialState : RenderOfFinalState}
      </div>
      <div
        className="Result-content-out"
        id="Result-content-out"
        onClick={() => PopUp5Close()}
      ></div>
    </div>
  );
};

export default Result;
