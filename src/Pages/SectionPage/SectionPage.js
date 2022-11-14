import "./SectionPage.css";
import Café_con_leche from "../../Images/Products photos/Desayunos/Café_con_leche.png";
import Pizza_especial from "../../Images/Products photos/Almuerzos/Pizza_especial.png";
import Promo from "../../Images/Products photos/Almuerzos/Promo.jpg";
import Logo1 from "../../Images/Logo1.png";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext/AppContext";
import Scroll from "../../Components/SectionPage_Components/Scroll/Scroll";
import {
  SectionPageLoader1,
  SectionPageLoader2,
  SectionPageLoader3,
} from "../../Components/SectionPage_Components/SectionPageLoader/SectionPageLoader";

const SectionPage = () => {
  const { Path1 } = useParams();
  const {
    setOpenPopUp1,
    setOpenPopUp2,
    setProductId,
    setProductCollection,
    sectionName,
    setSectionName,
    DesayunoQualification,
    AlmuerzoQualification,
    PromocionesQualification,
    setOpenPopUp,
    setSectionPagePath,
    ConditionedData2,
    Image,
    setImage,
    setLoadedImg27,
    setLoadedImg28,
    Loaded3,
  } = useContext(AppContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSectionPagePath(Path1);
  }, [setSectionPagePath, Path1]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (Path1 === "Desayunos") {
      setSectionName("Desayunos y meriendas");
      setImage(Café_con_leche);
    } else if (Path1 === "Almuerzos") {
      setSectionName("Almuerzos y cenas");
      setImage(Pizza_especial);
    } else if (Path1 === "Promociones") {
      setSectionName("Promociones");
      setImage(Promo);
    }
  }, [Path1, setSectionName, setImage]);

  const SectionPagedbProducts = ConditionedData2.sort(function (x, y) {
    return x.Prioridad - y.Prioridad;
  }).map((Item, index) => (
    <div
      key={index}
      className={Loaded3 ? "SectionPagedbProducts-background" : "NotDisplayed"}
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
          onLoad={() => setLoadedImg27(true)}
        />
      </div>
    </div>
  ));

  return (
    <div className="SectionPage-background">
      {scrollPosition > 200 ? <Scroll /> : null}
      <div className="SectionPage-content">
        <div className="SectionPage-C-B1"></div>
        <div className="SectionPage-C-B2">
          <div className="SectionPage-C-B2B1">
            <div className="SectionPage-C-B2B1B1">
              {!Loaded3 && <SectionPageLoader3 />}
              <img
                src={Image}
                className={Loaded3 ? "SectionPage-img-1" : "NotDisplayed"}
                alt=""
                onLoad={() => setLoadedImg28(true)}
              />
              <Link to={"/"} className="SectionPage-C-B2B1B1B1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="SectionPage-svg-1"
                  viewBox="1 0 16 16"
                  stroke="black"
                  strokeWidth={1.5}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="SectionPage-svg-4"
                viewBox="0 0 16 16"
                stroke="white"
                strokeWidth={0.5}
                onClick={() => setOpenPopUp2(true)}
              >
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
            <div className="SectionPage-C-B2B1B2">
              <img src={Logo1} className="SectionPage-img-0" alt="" />
              <div className="SectionPage-C-B2B1B2B1">
                <p className="SectionPage-txt-1">{sectionName}</p>
                <p className="SectionPage-txt-2">Servi Gas</p>
              </div>
            </div>
            <div className="SectionPage-C-B2B1B3">
              <div className="SectionPage-C-B2B1B3B1">
                <div className="SectionPage-C-B2B1B3B1B1">
                  <p className="SectionPage-txt-3">Preparacion</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="SectionPage-svg-2"
                    viewBox="-1 -1 18 18"
                    stroke="gray"
                    strokeWidth={1}
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                </div>
                <div className="SectionPage-C-B2B1B3B1B2">
                  <p className="SectionPage-txt-4">10 - 15 min</p>
                </div>
              </div>
              <div
                className="SectionPage-C-B2B1B3B2"
                onClick={() => setOpenPopUp1(true)}
              >
                <p className="SectionPage-txt-3 SectionPage-txt-3-1">
                  Calificar
                </p>
                {sectionName === "Desayunos y meriendas" ? (
                  Loaded3 > 0 ? (
                    <div className="SectionPage-C-B2B1B3B2B1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="SectionPage-svg-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="SectionPage-txt-4">
                        {DesayunoQualification}
                      </p>
                    </div>
                  ) : (
                    <SectionPageLoader2 />
                  )
                ) : null}
                {sectionName === "Almuerzos y cenas" ? (
                  Loaded3 > 0 ? (
                    <div className="SectionPage-C-B2B1B3B2B1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="SectionPage-svg-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="SectionPage-txt-4">
                        {AlmuerzoQualification}
                      </p>
                    </div>
                  ) : (
                    <SectionPageLoader2 />
                  )
                ) : null}
                {sectionName === "Promociones" ? (
                  Loaded3 > 0 ? (
                    <div className="SectionPage-C-B2B1B3B2B1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="SectionPage-svg-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="SectionPage-txt-4">
                        {PromocionesQualification}
                      </p>
                    </div>
                  ) : (
                    <SectionPageLoader2 />
                  )
                ) : null}
              </div>
              <div className="SectionPage-C-B2B1B3B3">
                <p className="SectionPage-txt-3">Seccion</p>
                <p className="SectionPage-txt-5">{sectionName}</p>
              </div>
            </div>
          </div>
          <div className="SectionPage-C-B2B2">
            <SectionPageLoader1 />
            {SectionPagedbProducts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
