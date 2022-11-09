import "./Explorer.css";
import Hamburguesa_city from "../../../Images/Products photos/Almuerzos/Hamburguesa_city.png";
import Pizza_de_rucula_y_jamon_crudo from "../../../Images/Products photos/Almuerzos/Pizza_de_rucula_y_jamon_crudo.png";
import Milanesa_cheddar from "../../../Images/Products photos/Almuerzos/Milanesa_cheddar.png";
import Baguette_especial from "../../../Images/Products photos/Almuerzos/Baguette_especial.png";
import Lomopizza from "../../../Images/Products photos/Almuerzos/Lomopizza.png";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext, useEffect } from "react";
import Category from "../Category/Category";

const Explorer = () => {
  const {
    Controler5,
    setControler5,
    setControler6,
    Controler7,
    setControler7,
    setLoading,
  } = useContext(AppContext);

  useEffect(() => {
    if (Controler7) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [Controler7]);

  return (
    <div className="Explorer-background">
      {Controler7 && <Category />}
      <div className="Explorer-content">
        <div className="Explorer-C-B1">
          <div
            className="Explorer-C-B1B1"
            onClick={() =>
              setControler5(
                Controler5 === "Hamburguesas" ? undefined : "Hamburguesas"
              ) &
              setControler6("Almuerzos") &
              setLoading(false)
            }
          >
            <div
              className={
                Controler5 === "Hamburguesas"
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Hamburguesa_city}
                className={
                  Controler5 === "Hamburguesas"
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Hamburguesas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Explorer-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Hamburguesas"
                  ? "Explorer-txt-1 Explorer-txt-1-selected"
                  : "Explorer-txt-1"
              }
            >
              Hamburguesas
            </p>
          </div>
          <div
            className="Explorer-C-B1B1"
            onClick={() =>
              setControler5(Controler5 === "Pizzas" ? undefined : "Pizzas") &
              setControler6("Almuerzos") &
              setLoading(false)
            }
          >
            <div
              className={
                Controler5 === "Pizzas"
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Pizza_de_rucula_y_jamon_crudo}
                className={
                  Controler5 === "Pizzas"
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Pizzas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Explorer-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Pizzas"
                  ? "Explorer-txt-1 Explorer-txt-1-selected"
                  : "Explorer-txt-1"
              }
            >
              Pizzas
            </p>
          </div>
          <div
            className="Explorer-C-B1B1"
            onClick={() =>
              setControler5(
                Controler5 === "Milanesas" ? undefined : "Milanesas"
              ) &
              setControler6("Almuerzos") &
              setLoading(false)
            }
          >
            <div
              className={
                Controler5 === "Milanesas"
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Milanesa_cheddar}
                className={
                  Controler5 === "Milanesas"
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Milanesas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Explorer-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Milanesas"
                  ? "Explorer-txt-1 Explorer-txt-1-selected"
                  : "Explorer-txt-1"
              }
            >
              Milanesas
            </p>
          </div>
          <div
            className="Explorer-C-B1B1"
            onClick={() =>
              setControler5(
                Controler5 === "Sandwiches" ? undefined : "Sandwiches"
              ) &
              setControler6("Almuerzos") &
              setLoading(false)
            }
          >
            <div
              className={
                Controler5 === "Sandwiches"
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Baguette_especial}
                className={
                  Controler5 === "Sandwiches"
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Sandwiches" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Explorer-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Sandwiches"
                  ? "Explorer-txt-1 Explorer-txt-1-selected"
                  : "Explorer-txt-1"
              }
            >
              Sandwiches
            </p>
          </div>
          <div
            className="Explorer-C-B1B1"
            onClick={() =>
              setControler5(
                Controler5 === "Lomopizzas" ? undefined : "Lomopizzas"
              ) &
              setControler6("Almuerzos") &
              setLoading(false)
            }
          >
            <div
              className={
                Controler5 === "Lomopizzas"
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Lomopizza}
                className={
                  Controler5 === "Lomopizzas"
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Lomopizzas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Explorer-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Lomopizzas"
                  ? "Explorer-txt-1 Explorer-txt-1-selected"
                  : "Explorer-txt-1"
              }
            >
              Lomopizzas
            </p>
          </div>
          <div className="Explorer-C-B1B2" onClick={() => setControler7(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Explorer-svg-2"
              viewBox="0 0 14 16"
              stroke="white"
              strokeWidth={1}
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <p className="Explorer-txt-3">Ver todos</p>
          </div>
        </div>
        <div className="Explorer-C-B2">
          <div
            className={
              Controler5 === "Promociones"
                ? "Explorer-C-B2B1 Explorer-C-B2B1-selected"
                : "Explorer-C-B2B1"
            }
            onClick={() =>
              setControler5(
                Controler5 === "Promociones" ? undefined : "Promociones"
              ) &
              setControler6("Promociones") &
              setLoading(false)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className={
                Controler5 === "Promociones"
                  ? "Explorer-svg-3 Explorer-svg-3-selected"
                  : "Explorer-svg-3"
              }
              viewBox="0 0 16 16"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
            </svg>
            <p
              className={
                Controler5 === "Promociones"
                  ? "Explorer-txt-5 Explorer-txt-5-selected"
                  : "Explorer-txt-5"
              }
            >
              Promociones
            </p>
          </div>
          <div
            className={
              Controler5 === "Menor A Mayor Precio"
                ? "Explorer-C-B2B1 Explorer-C-B2B1-selected"
                : "Explorer-C-B2B1"
            }
            onClick={() =>
              setControler5(
                Controler5 === "Menor A Mayor Precio"
                  ? undefined
                  : "Menor A Mayor Precio"
              ) &
              setControler6("asd") &
              setLoading(false)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className={
                Controler5 === "Menor A Mayor Precio"
                  ? "Explorer-svg-3 Explorer-svg-3-selected"
                  : "Explorer-svg-3"
              }
              viewBox="0 0 16 16"
            >
              <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <p
              className={
                Controler5 === "Menor A Mayor Precio"
                  ? "Explorer-txt-5 Explorer-txt-5-selected"
                  : "Explorer-txt-5"
              }
            >
              De menor a mayor precio
            </p>
          </div>
          <div
            className={
              Controler5 === "Nuestros favoritos"
                ? "Explorer-C-B2B1 Explorer-C-B2B1-selected"
                : "Explorer-C-B2B1"
            }
            onClick={() =>
              setControler5(
                Controler5 === "Nuestros favoritos"
                  ? undefined
                  : "Nuestros favoritos"
              ) &
              setControler6("Promociones") &
              setLoading(false)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className={
                Controler5 === "Nuestros favoritos"
                  ? "Explorer-svg-3 Explorer-svg-3-selected"
                  : "Explorer-svg-3"
              }
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            <p
              className={
                Controler5 === "Nuestros favoritos"
                  ? "Explorer-txt-5 Explorer-txt-5-selected"
                  : "Explorer-txt-5"
              }
            >
              Nuestros favoritos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
