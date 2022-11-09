import "./Explorer.css";
import Hamburguesa_city from "../../../Images/Products photos/Almuerzos/Hamburguesa_city.png";
import Pizza_de_rucula_y_jamon_crudo from "../../../Images/Products photos/Almuerzos/Pizza_de_rucula_y_jamon_crudo.png";
import Milanesa_cheddar from "../../../Images/Products photos/Almuerzos/Milanesa_cheddar.png";
import Baguette_especial from "../../../Images/Products photos/Almuerzos/Baguette_especial.png";
import Lomopizza from "../../../Images/Products photos/Almuerzos/Lomopizza.png";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext, useEffect, useState } from "react";
import Category from "../Category/Category";

const Explorer = () => {
  const {
    Controler5,
    setControler5,
    setControler6,
    Controler7,
    setControler7,
    Controler8,
    setControler8,
    setLoading,
  } = useContext(AppContext);

  /*INTERNAL CONTROLLERS*/

  const [Icontroller1, setIcontroller1] = useState(false);
  const [Icontroller2, setIcontroller2] = useState(false);

  useEffect(() => {
    if (Icontroller1 || Icontroller2) {
      setControler8(true);
    } else {
      setControler8(false);
    }
  }, [Icontroller1, Icontroller2, setControler8]);

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
              setControler5("Hamburguesas") &
              setControler6("Almuerzos") &
              setLoading(false) &
              setIcontroller1((prev) => !prev)
            }
          >
            <div
              className={
                Controler5 === "Hamburguesas" && Icontroller1
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Hamburguesa_city}
                className={
                  Controler5 === "Hamburguesas" && Icontroller1
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Hamburguesas" && Icontroller1 && (
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
                Controler5 === "Hamburguesas" && Icontroller1
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
              setControler5("Pizzas") &
              setControler6("Almuerzos") &
              setLoading(false) &
              setIcontroller2((prev) => !prev)
            }
          >
            <div
              className={
                Controler5 === "Pizzas" && Icontroller2
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Pizza_de_rucula_y_jamon_crudo}
                className={
                  Controler5 === "Pizzas" && Icontroller2
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Pizzas" && Icontroller2 && (
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
                Controler5 === "Pizzas" && Icontroller2
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
              setControler5("Milanesas") &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler8((prev) => !prev)
            }
          >
            <div
              className={
                Controler5 === "Milanesas" && Controler8
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Milanesa_cheddar}
                className={
                  Controler5 === "Milanesas" && Controler8
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Milanesas" && Controler8 && (
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
                Controler5 === "Milanesas" && Controler8
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
              setControler5("Sandwiches") &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler8((prev) => !prev)
            }
          >
            <div
              className={
                Controler5 === "Sandwiches" && Controler8
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Baguette_especial}
                className={
                  Controler5 === "Sandwiches" && Controler8
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Sandwiches" && Controler8 && (
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
                Controler5 === "Sandwiches" && Controler8
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
              setControler5("Lomopizzas") &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler8((prev) => !prev)
            }
          >
            <div
              className={
                Controler5 === "Lomopizzas" && Controler8
                  ? "Explorer-C-B1B1B1 Explorer-C-B1B1B1-selected"
                  : "Explorer-C-B1B1B1"
              }
            >
              <img
                src={Lomopizza}
                className={
                  Controler5 === "Lomopizzas" && Controler8
                    ? "Explorer-img-1 Explorer-img-1-selected"
                    : "Explorer-img-1"
                }
                alt=""
              />
              {Controler5 === "Lomopizzas" && Controler8 && (
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
                Controler5 === "Lomopizzas" && Controler8
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
          <div className="Explorer-C-B2B1">
            <p className="Explorer-txt-2">🤑</p>
            <p className="Explorer-txt-2">Promociones</p>
          </div>
          <div className="Explorer-C-B2B1">
            <p className="Explorer-txt-2">🤑</p>
            <p className="Explorer-txt-2">Promociones</p>
          </div>
          <div className="Explorer-C-B2B1">
            <p className="Explorer-txt-2">🤑</p>
            <p className="Explorer-txt-2">Promociones</p>
          </div>
          <div className="Explorer-C-B2B1">
            <p className="Explorer-txt-2">🤑</p>
            <p className="Explorer-txt-2">Promociones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
