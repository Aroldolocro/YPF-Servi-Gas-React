import "./DesayunosPage.css";
import Image3 from "../../Images/Image3.png";
import Logo from "../../Images/Logo.png";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const DesayunosPage = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Info, setInfo] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (Info) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [Info]);

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
    const dbcollection = collection(db, "Desayunos");
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  const DesayunosPagedbProducts = data.map((Item, index) => (
    <div
      key={index}
      className={
        Loading
          ? "DesayunosPagedbProducts-background"
          : "DesayunosPagedbProducts-background-notdisplayed"
      }
    >
      <div className="DesayunosPagedbProducts-B1">
        <p className="DesayunosPagedbProducts-txt-1">{Item.Nombre}</p>
        <p className="DesayunosPagedbProducts-txt-2">{Item.Descripción}</p>
        <p className="DesayunosPagedbProducts-txt-3">
          {new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(Item.Precio)}
        </p>
      </div>
      <div className="DesayunosPagedbProducts-B2">
        <img
          src={Item.Imagen}
          className="DesayunosPagedbProducts-img"
          alt=""
          onLoad={() => setLoading(true)}
        />
      </div>
    </div>
  ));

  const DesayunosPagedbProducts_Loader = (
    <>
      <div
        className={
          Loading
            ? "DesayunosPagedbProducts_Loader-background-notdisplayed"
            : "DesayunosPagedbProducts_Loader-background"
        }
      >
        <div className="DesayunosPagedbProducts_Loader-B1">
          <div className="DesayunosPagedbProducts_Loader-B1B1"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B2"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="DesayunosPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading
            ? "DesayunosPagedbProducts_Loader-background-notdisplayed"
            : "DesayunosPagedbProducts_Loader-background"
        }
      >
        <div className="DesayunosPagedbProducts_Loader-B1">
          <div className="DesayunosPagedbProducts_Loader-B1B1"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B2"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="DesayunosPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading
            ? "DesayunosPagedbProducts_Loader-background-notdisplayed"
            : "DesayunosPagedbProducts_Loader-background"
        }
      >
        <div className="DesayunosPagedbProducts_Loader-B1">
          <div className="DesayunosPagedbProducts_Loader-B1B1"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B2"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="DesayunosPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading
            ? "DesayunosPagedbProducts_Loader-background-notdisplayed"
            : "DesayunosPagedbProducts_Loader-background"
        }
      >
        <div className="DesayunosPagedbProducts_Loader-B1">
          <div className="DesayunosPagedbProducts_Loader-B1B1"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B2"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="DesayunosPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading
            ? "DesayunosPagedbProducts_Loader-background-notdisplayed"
            : "DesayunosPagedbProducts_Loader-background"
        }
      >
        <div className="DesayunosPagedbProducts_Loader-B1">
          <div className="DesayunosPagedbProducts_Loader-B1B1"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B2"></div>
          <div className="DesayunosPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="DesayunosPagedbProducts_Loader-B2"></div>
      </div>
    </>
  );

  const RenderOfDesaynosPageTop = (
    <div className="RenderOfDesaynosPageTop-background">
      <div className="RenderOfDesaynosPageTop-B1">
        <div className="RenderOfDesaynosPageTop-B1B1">
          <div className="RenderOfDesaynosPageTop-B1B1B1">
            <div className="RenderOfDesaynosPageTop-B1B1B1B1">
              <Link to={"/"} className="RenderOfDesaynosPageTop-B1B1B1B1B1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="RenderOfDesaynosPageTop-svg-1"
                  viewBox="0 0 16 16"
                  stroke="black"
                  stroke-width="1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </Link>
              <p className="RenderOfDesaynosPageTop-txt-1">Servi Gas Menú</p>
            </div>
            <div
              className="RenderOfDesaynosPageTop-B1B1B1B2"
              onClick={() => setInfo(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="RenderOfDesaynosPageTop-svg-2"
                viewBox="0 0 16 16"
                stroke="white"
                stroke-width="0.5"
              >
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="RenderOfDesaynosPageTop-B2">
        <div className="RenderOfDesaynosPageTop-B2B1">
          <p
            className="RenderOfDesaynosPageTop-txt-2"
            onClick={() => window.scrollTo(0, 0)}
          >
            Desayunos
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
                <p className="RenderOfInfoBottom-txt-2">Desayunos</p>
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
              stroke-width="0.5"
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

  return (
    <div className="DesayunosPage-background">
      {Info && RenderOfInfoBottom}
      {scrollPosition > 200 ? RenderOfDesaynosPageTop : null}
      <div className="DesayunosPage-content">
        <div className="DesayunosPage-C-B1"></div>
        <div className="DesayunosPage-C-B2">
          <div className="DesayunosPage-C-B2B1">
            <div className="DesayunosPage-C-B2B1B1">
              <img src={Image3} className="DesayunosPage-img-1" alt="" />
              <Link to={"/"} className="DesayunosPage-C-B2B1B1B0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="DesayunosPage-svg-1"
                  viewBox="0 0 16 16"
                  stroke="black"
                  stroke-width="1.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="DesayunosPage-C-B2B1B1B1">
              ☕️
              <div className="DesayunosPage-C-B2B1B1B1B1">
                <p className="DesayunosPage-txt-1">Desayunos</p>
                <p className="DesayunosPage-txt-2">Servi Gas</p>
              </div>
            </div>
          </div>
          <div className="DesayunosPage-C-B2B2">
            {DesayunosPagedbProducts_Loader}
            {DesayunosPagedbProducts}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesayunosPage;
