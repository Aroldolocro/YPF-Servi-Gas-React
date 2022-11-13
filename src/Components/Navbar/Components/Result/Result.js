import "./Result.css";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext, useState } from "react";

const Result = () => {
  const {
    setProductId,
    setProductCollection,
    Filtered,
    setFiltered,
    setOpenPopUp,
  } = useContext(AppContext);
  const [Loading, setLoading] = useState(false);

  const RenderOfResultdbProducts = Filtered.slice(0, 5).map((value, index) => {
    return (
      <div
        key={index}
        className={
          Loading ? "RenderOfResultdbProducts-background" : "NotDisplayed"
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
            onLoad={() => setLoading(true)}
          />
          <p className="RenderOfResultdbProducts-txt-1">{value.Nombre}</p>
        </div>
        <p className="RenderOfResultdbProducts-txt-2">{value.Tipo}</p>
      </div>
    );
  });

  const RenderOfResultdbProducts_Loader = (
    <>
      <div
        className={
          Loading
            ? "NotDisplayed"
            : "RenderOfResultdbProducts_Loader-background"
        }
      >
        <div className="RenderOfResultdbProducts_Loader-B1">
          <div className="RenderOfResultdbProducts_Loader-B1B1"></div>
          <div className="RenderOfResultdbProducts_Loader-B1B2"></div>
        </div>
        <div className="RenderOfResultdbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading
            ? "NotDisplayed"
            : "RenderOfResultdbProducts_Loader-background"
        }
      >
        <div className="RenderOfResultdbProducts_Loader-B1">
          <div className="RenderOfResultdbProducts_Loader-B1B1"></div>
          <div className="RenderOfResultdbProducts_Loader-B1B2"></div>
        </div>
        <div className="RenderOfResultdbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading
            ? "NotDisplayed"
            : "RenderOfResultdbProducts_Loader-background"
        }
      >
        <div className="RenderOfResultdbProducts_Loader-B1">
          <div className="RenderOfResultdbProducts_Loader-B1B1"></div>
          <div className="RenderOfResultdbProducts_Loader-B1B2"></div>
        </div>
        <div className="RenderOfResultdbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading
            ? "NotDisplayed"
            : "RenderOfResultdbProducts_Loader-background"
        }
      >
        <div className="RenderOfResultdbProducts_Loader-B1">
          <div className="RenderOfResultdbProducts_Loader-B1B1"></div>
          <div className="RenderOfResultdbProducts_Loader-B1B2"></div>
        </div>
        <div className="RenderOfResultdbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading
            ? "NotDisplayed"
            : "RenderOfResultdbProducts_Loader-background"
        }
      >
        <div className="RenderOfResultdbProducts_Loader-B1">
          <div className="RenderOfResultdbProducts_Loader-B1B1"></div>
          <div className="RenderOfResultdbProducts_Loader-B1B2"></div>
        </div>
        <div className="RenderOfResultdbProducts_Loader-B2"></div>
      </div>
    </>
  );

  return (
    <div className="Result-background">
      <div className="Result-content">
        {RenderOfResultdbProducts_Loader}
        {RenderOfResultdbProducts}
      </div>
      <div className="Result-content-out" onClick={() => setFiltered([])}></div>
    </div>
  );
};

export default Result;
