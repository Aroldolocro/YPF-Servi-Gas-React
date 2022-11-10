import "./Result.css";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";

const Result = () => {
  const { setControler3, setControler4, Filtered, setFiltered } =
    useContext(AppContext);

  const RenderOfResultdbProducts = Filtered.slice(0, 5).map((value, index) => {
    return (
      <div
        key={index}
        className="RenderOfResultdbProducts-background"
        onClick={() => setControler3(value.id) & setControler4(value.Colección)}
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

  return (
    <div className="Result-background">
      <div className="Result-content">{RenderOfResultdbProducts}</div>
      <div className="Result-content-out" onClick={() => setFiltered([])}></div>
    </div>
  );
};

export default Result;
