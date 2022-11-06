import "./SectionPage.css";
import Image2 from "../../Images/Image2.png";
import Image3 from "../../Images/Image3.jpg";
import test2 from "../../Images/test2.jpg";
import Logo from "../../Images/Logo.png";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext/AppContext";
import Qualifier from "../../Components/SectionPage_Components/Qualifier/Qualifier";
import ItemDetail from "../../Components/SectionPage_Components/ItemDetail/ItemDetail";

const SectionPage = () => {
  const { Path1 } = useParams();
  const {
    Controler2,
    setControler2,
    Controler3,
    setControler3,
    setControler4,
    sectionName,
    setSectionName,
    DesayunoQualification,
    AlmuerzoQualification,
  } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Image, setImage] = useState();
  const [Info, setInfo] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (Info | Controler2 | (Controler3 !== undefined)) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [Info, Controler2, Controler3]);

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
    const db = getFirestore();
    const dbcollection = collection(db, Path1);
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, [Path1]);

  useEffect(() => {
    if (Path1 === "Desayunos") {
      setSectionName("Desayunos y meriendas");
      setImage(Image3);
    } else if (Path1 === "Almuerzos") {
      setSectionName("Almuerzos y cenas");
      setImage(test2);
    }
  }, [Path1, setSectionName]);

  const SectionPagedbProducts = data
    .sort(function (x, y) {
      let a = x.Tipo.toUpperCase(),
        b = y.Tipo.toUpperCase();
      return a === b ? 0 : a > b ? 1 : -1;
    })
    .map((Item, index) => (
      <div
        key={index}
        className={
          Loading
            ? "SectionPagedbProducts-background"
            : "SectionPagedbProducts-background-notdisplayed"
        }
        onClick={() => setControler3(Item.id) & setControler4(Path1)}
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
            onLoad={() => setLoading(true)}
          />
        </div>
      </div>
    ));

  const SectionPagedbProducts_Loader = (
    <>
      <div
        className={
          Loading
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
          Loading
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
          Loading
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
          Loading
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
          Loading
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

  const RenderOfSectionPageTop = (
    <div className="RenderOfSectionPageTop-background">
      <div className="RenderOfSectionPageTop-B1">
        <img src={Image} className="RenderOfSectionPageTop-img" alt="" />
        <div className="RenderOfSectionPageTop-B1B1">
          <div className="RenderOfSectionPageTop-B1B1B1">
            <Link to={"/"} className="RenderOfSectionPageTop-B1B1B1B1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="RenderOfSectionPageTop-svg-1"
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
            <p className="RenderOfSectionPageTop-txt-1">Servi Gas Menú</p>
          </div>
          <div
            className="RenderOfSectionPageTop-B1B1B2"
            onClick={() => setInfo(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="RenderOfSectionPageTop-svg-2"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth={0.5}
            >
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="RenderOfSectionPageTop-B2">
        <div className="RenderOfSectionPageTop-B2B1">
          <p
            className="RenderOfSectionPageTop-txt-2"
            onClick={() => window.scrollTo(0, 0)}
          >
            {sectionName}
          </p>
        </div>
      </div>
    </div>
  );

  const RenderOfInfoBottom = (
    <div className="RenderOfInfoBottom-background">
      <div
        className="RenderOfInfoBottom-B1"
        onClick={() => setInfo(false)}
      ></div>
      <div className="RenderOfInfoBottom-B2">
        <div className="RenderOfInfoBottom-B2B1">
          <div className="RenderOfInfoBottom-B2B1B1">
            <div className="RenderOfInfoBottom-B2B1B1B1">
              <img src={Logo} className="RenderOfInfoBottom-img" alt="" />
              <div className="RenderOfInfoBottom-B2B1B1B1B1">
                <p className="RenderOfInfoBottom-txt-1">Servi Gas</p>
                <p className="RenderOfInfoBottom-txt-2">{sectionName}</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="RenderOfInfoBottom-svg-1"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth={0.5}
              onClick={() => setInfo(false)}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
        <div className="RenderOfInfoBottom-B2B2">
          <div className="RenderOfInfoBottom-B2B2B1">
            <p className="RenderOfInfoBottom-txt-1">Dirección:</p>
            <p className="RenderOfInfoBottom-txt-2">
              Av Kennedy y Av Mariano Moreno
            </p>
          </div>
          <div className="RenderOfInfoBottom-B2B2B1">
            <p className="RenderOfInfoBottom-txt-1">Horario de atención:</p>
            <p className="RenderOfInfoBottom-txt-2">8:00 - 00:00</p>
          </div>
          <div className="RenderOfInfoBottom-B2B2B2">
            <button
              className="RenderOfInfoBottom-btn"
              onClick={() => setInfo(false)}
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CalificationLoader = (
    <div className="CalificationLoader-background"></div>
  );

  return (
    <div className="SectionPage-background">
      {Controler3 && <ItemDetail />}
      {Controler2 && <Qualifier />}
      {Info && RenderOfInfoBottom}
      {scrollPosition > 200 ? RenderOfSectionPageTop : null}
      <div className="SectionPage-content">
        <div className="SectionPage-C-B1"></div>
        <div className="SectionPage-C-B2">
          <div className="SectionPage-C-B2B1">
            <div className="SectionPage-C-B2B1B1">
              <img src={Image} className="SectionPage-img-1" alt="" />
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
                onClick={() => setInfo(true)}
              >
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
            <div className="SectionPage-C-B2B1B2">
              <img src={Image2} className="SectionPage-img-0" alt="" />
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
                onClick={() => setControler2(true)}
              >
                <p className="SectionPage-txt-3 SectionPage-txt-3-1">
                  Calificar
                </p>
                {sectionName === "Desayunos y meriendas" ? (
                  DesayunoQualification > 0 ? (
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
                    CalificationLoader
                  )
                ) : null}
                {sectionName === "Almuerzos y cenas" ? (
                  AlmuerzoQualification > 0 ? (
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
                    CalificationLoader
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
            {SectionPagedbProducts_Loader}
            {SectionPagedbProducts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
