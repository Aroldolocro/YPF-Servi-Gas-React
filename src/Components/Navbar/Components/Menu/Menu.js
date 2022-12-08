import "./Menu.css";
import Logo2 from "../../../../Images/Logo2.png";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const { PopUp3Close } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="Menu-background">
      <div className="Menu-content" id="Menu-content">
        <div className="Menu-B1">
          <img
            src={Logo2}
            className="Menu-img-1"
            alt=""
            onClick={() => PopUp3Close() & navigate("/")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="Menu-svg-1"
            viewBox="0 0 16 16"
            stroke="#ffffff"
            strokeWidth={0.5}
            onClick={() => PopUp3Close()}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="Menu-B2">
          <p className="Menu-txt-1">SECCIONES</p>
          <Link
            to={"/Desayunos"}
            onClick={() => PopUp3Close()}
            className="Menu-B2B1"
          >
            <p className="Menu-txt-2">Desayunos y meriendas</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Menu-svg-2"
              viewBox="0 0 16 16"
              stroke="gray"
              strokeWidth={1}
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
          <Link
            to={"/Almuerzos"}
            onClick={() => PopUp3Close()}
            className="Menu-B2B1"
          >
            <p className="Menu-txt-2">Almuerzos y cenas</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Menu-svg-2"
              viewBox="0 0 16 16"
              stroke="gray"
              strokeWidth={1}
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
          <Link
            to={"/Promociones"}
            onClick={() => PopUp3Close()}
            className="Menu-B2B1"
          >
            <p className="Menu-txt-2">Promociones</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Menu-svg-2"
              viewBox="0 0 16 16"
              stroke="gray"
              strokeWidth={1}
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
        </div>
        <div className="Menu-B3">
          <p className="Menu-txt-3">OTROS</p>
          <p
            className="Menu-txt-4"
            onClick={() => PopUp3Close() & navigate("/Contacto")}
          >
            Hace tu pedido
          </p>
          <p
            className="Menu-txt-4"
            onClick={() => PopUp3Close() & navigate("/Contacto")}
          >
            Contactános
          </p>
        </div>
      </div>
      <div
        className="Menu-Shadow"
        id="Menu-Shadow"
        onClick={() => PopUp3Close()}
      ></div>
    </div>
  );
};

export default Menu;
