import "./Menu.css";
import Logo2 from "../../../../Images/Logo2.png";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const { setControler1 } = useContext(AppContext);

  return (
    <div className="Menu-Shadow">
      <div className="Menu-background">
        <div className="Menu-content">
          <div className="Menu-C-B1">
            <div className="Menu-C-B1B1">
              <Link
                to={"/"}
                className="Menu-C-B1B1B1"
                onClick={() => setControler1(false)}
              >
                <img src={Logo2} className="Menu-img-1" alt="" />
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="Menu-svg-1"
                viewBox="0 0 16 16"
                onClick={() => setControler1(false)}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          </div>
          <div className="Menu-C-B2">
            <div className="Menu-C-B2B1">
              <div className="Menu-C-B2B1B1">
                <p className="Menu-txt-1">SECCIONES</p>
                <Link
                  to={"/Desayunos"}
                  className="Menu-C-B2B1B1B1"
                  onClick={() => setControler1(false)}
                >
                  <p className="Menu-txt-2">Desayunos y meriendas</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="Menu-svg-2"
                    viewBox="0 0 16 16"
                    stroke="black"
                    strokeWidth={0.5}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </Link>
                <Link
                  to={"/Almuerzos"}
                  className="Menu-C-B2B1B1B1"
                  onClick={() => setControler1(false)}
                >
                  <p className="Menu-txt-2">Almuerzos y cenas</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="Menu-svg-2"
                    viewBox="0 0 16 16"
                    stroke="black"
                    strokeWidth={0.5}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </Link>
                <Link
                  to={"/Promociones"}
                  className="Menu-C-B2B1B1B1"
                  onClick={() => setControler1(false)}
                >
                  <p className="Menu-txt-2">Promociones</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="Menu-svg-2"
                    viewBox="0 0 16 16"
                    stroke="black"
                    strokeWidth={0.5}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="Menu-C-B2B2">
              <div className="Menu-C-B2B2B1">
                <p className="Menu-txt-1">OTROS</p>
                <div className="Menu-C-B2B2B1B1">
                  <p className="Menu-txt-3">Hace tu pedido</p>
                </div>
                <div className="Menu-C-B2B2B1B1">
                  <p className="Menu-txt-3">Contactanos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
