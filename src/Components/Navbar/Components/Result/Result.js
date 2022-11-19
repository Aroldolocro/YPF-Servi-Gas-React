import "./Result.css";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";
import { ResultLoader1 } from "./ResultLoader";

const Result = () => {
  const {
    setProductId,
    setProductCollection,
    Filtered,
    setOpenPopUp,
    setOpenPopUp5,
    setLoadedImg31,
    setLoadedImg32,
    Loaded5,
    ResultInitialState,
    AlldbCollections,
    Loaded6,
  } = useContext(AppContext);

  const RenderOfInitialStatedbProducts = AlldbCollections.sort(
    () => Math.random() - 0.5
  )
    .slice(0, 5)
    .map((value, index) => {
      return (
        <div
          key={index}
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
              onLoad={() => setLoadedImg31(true)}
            />
            <p className="RenderOfResultdbProducts-txt-1">{value.Nombre}</p>
          </div>
          <p className="RenderOfResultdbProducts-txt-2">{value.Tipo}</p>
        </div>
      );
    });

  const RenderOfResultdbProducts = Filtered.slice(0, 5).map((value, index) => {
    return (
      <div
        key={index}
        className={
          Loaded6 ? "RenderOfResultdbProducts-background" : "NotDisplayed"
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
            onLoad={() => setLoadedImg32(true)}
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

  const RenderOfNotFound = <div>Not Found</div>;

  const RenderOfFinalState = (
    <div className="RenderOfFinalState-background">
      <div className="RenderOfFinalState-B1">
        <p className="RenderOfFinalState-txt-1">Resultado</p>
      </div>
      <div className="RenderOfFinalState-B2"></div>
    </div>
  );

  return (
    <div className="Result-background">
      <div className="Result-content">
        {ResultInitialState ? RenderOfInitialState : RenderOfFinalState}
      </div>
      <div
        className="Result-content-out"
        onClick={() => setOpenPopUp5(false)}
      ></div>
    </div>
  );
};

export default Result;
