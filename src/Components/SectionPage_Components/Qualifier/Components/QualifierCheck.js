import "../Qualifier.css";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";

const QualifierCheck = () => {
  const {
    QuealificatedDesayunos,
    QuealificatedAlmuerzos,
    QuealificatedPromociones,
    SectionData,
    setCalification,
  } = useContext(AppContext);

  const SVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  const SVG_Array = [SVG, SVG, SVG, SVG, SVG];

  const SVG_Function = (i) => {
    const Star1 = document.getElementById(0);
    const Star2 = document.getElementById(1);
    const Star3 = document.getElementById(2);
    const Star4 = document.getElementById(3);
    const Star5 = document.getElementById(4);
    i === 0 || i === 1 || i === 2 || 3 || i === 4
      ? Star1.classList.add("span-1-selected")
      : Star1.classList.remove("span-1-selected");
    i === 1 || i === 2 || i === 3 || i === 4
      ? Star2.classList.add("span-1-selected")
      : Star2.classList.remove("span-1-selected");
    i === 2 || i === 3 || i === 4
      ? Star3.classList.add("span-1-selected")
      : Star3.classList.remove("span-1-selected");
    i === 3 || i === 4
      ? Star4.classList.add("span-1-selected")
      : Star4.classList.remove("span-1-selected");
    i === 4
      ? Star5.classList.add("span-1-selected")
      : Star5.classList.remove("span-1-selected");
  };

  const RenderOfQualify = (
    <div className="RenderOfQualify-background">
      <img src={SectionData.Logo} className="RenderOfQualify-img-1" alt="" />
      <p className="RenderOfQualify-txt-1">
        Calificá {SectionData.Section} de {SectionData.Restaurant}
      </p>
      <div className="RenderOfQualify-B1">
        {SVG_Array.map((x, i) => (
          <span
            key={i}
            onClick={() => SVG_Function(i) & setCalification(i + 1)}
            id={i}
            className="RenderOfQualify-span-1"
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );

  const RenderOfAlreadyQualified = (
    <p className="RenderOfAlreadyQualified-txt-1">
      ¡Gracias, tu calification ha sido enviada!
    </p>
  );

  return SectionData.Section === "Desayunos y meriendas"
    ? QuealificatedDesayunos
      ? RenderOfAlreadyQualified
      : RenderOfQualify
    : SectionData.Section === "Almuerzos y cenas"
    ? QuealificatedAlmuerzos
      ? RenderOfAlreadyQualified
      : RenderOfQualify
    : SectionData.Section === "Promociones"
    ? QuealificatedPromociones
      ? RenderOfAlreadyQualified
      : RenderOfQualify
    : null;
};

export default QualifierCheck;
