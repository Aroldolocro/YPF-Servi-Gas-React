import "./Footer.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";

const Footer = () => {
  const { FooterBreakPoint } = useContext(AppContext);
  const navigate = useNavigate();
  const [ExpandContent1, setExpandContent1] = useState(false);
  const [ExpandContent2, setExpandContent2] = useState(false);

  const GoToInstagram = () =>
    (window.location.href = "https://www.instagram.com/ypfservigas/");

  const GoToWhatsApp = () =>
    (window.location.href = "https://wa.me/5493875065900");

  const GoToPhone = () => (window.location = "tel:+ 54 9 3875 06-5900");

  return (
    <div className="Footer-background">
      <div className="Footer-B1">
        <div className="Footer-B1B1">
          <div
            className="Footer-B1B1B1"
            onClick={() =>
              !FooterBreakPoint
                ? setExpandContent1((prev) => !prev)
                : setExpandContent1(false)
            }
          >
            <p className="Footer-txt-1">Categorías</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="gray"
              className={
                ExpandContent1 ? "Footer-svg-1 Rotate" : "Footer-svg-1"
              }
              viewBox="0 0 16 16"
              stroke="gray"
              strokeWidth={1.5}
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <div
            className={
              !FooterBreakPoint
                ? ExpandContent1
                  ? "Footer-B1B1B2"
                  : "Footer-B1B1B2 Hide"
                : "Footer-B1B1B2"
            }
          >
            <p className="Footer-txt-2" onClick={() => navigate("/Desayunos")}>
              Desayunos y meriendas
            </p>
            <p className="Footer-txt-2" onClick={() => navigate("/Almuerzos")}>
              Almuerzos y cenas
            </p>
            <p
              className="Footer-txt-2"
              onClick={() => navigate("/Promociones")}
            >
              Promociones
            </p>
          </div>
        </div>
        <div className="Footer-B1B1">
          <div
            className="Footer-B1B1B1"
            onClick={() =>
              !FooterBreakPoint
                ? setExpandContent2((prev) => !prev)
                : setExpandContent2(false)
            }
          >
            <p className="Footer-txt-1">Sobre Servi Gas</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="gray"
              className={
                ExpandContent2 ? "Footer-svg-1 Rotate" : "Footer-svg-1"
              }
              viewBox="0 0 16 16"
              stroke="gray"
              strokeWidth={1.5}
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <div
            className={
              !FooterBreakPoint
                ? ExpandContent2
                  ? "Footer-B1B1B2"
                  : "Footer-B1B1B2 Hide"
                : "Footer-B1B1B2"
            }
          >
            <p className="Footer-txt-2" onClick={() => navigate("/Contacto")}>
              Contactános
            </p>
            <p className="Footer-txt-2" onClick={() => navigate("/Contacto")}>
              Hace tu pedido
            </p>
          </div>
        </div>
      </div>
      <div className="Footer-B2">
        <p className="Footer-txt-3">YPF Servi Gas S.R.L</p>
        <p className="Footer-txt-3">Av Kennedy y Av Mariano Moreno</p>
        <p className="Footer-txt-3">CUIT 30-69067051-4</p>
        <p className="Footer-txt-3">servigas@uolsinectis.com</p>
      </div>
      <div className="Footer-B3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="rgb(100, 100, 100)"
          viewBox="0 0 16 16"
          stroke="rgb(100, 100, 100)"
          strokeWidth={0.5}
          className="Footer-svg-2"
          onClick={() => GoToPhone()}
        >
          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="rgb(100, 100, 100)"
          viewBox="0 0 16 16"
          stroke="rgb(100, 100, 100)"
          strokeWidth={0.5}
          className="Footer-svg-2"
          onClick={() => GoToWhatsApp()}
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="rgb(100, 100, 100)"
          viewBox="0 0 16 16"
          stroke="rgb(100, 100, 100)"
          strokeWidth={0.5}
          className="Footer-svg-2"
          onClick={() => GoToInstagram()}
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
