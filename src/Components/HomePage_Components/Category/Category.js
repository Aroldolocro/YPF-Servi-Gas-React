import "./Category.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import Hamburguesa_city from "../../../Images/Products photos/Almuerzos/Hamburguesa_city.png";
import Pizza_de_rucula_y_jamon_crudo from "../../../Images/Products photos/Almuerzos/Pizza_de_rucula_y_jamon_crudo.png";
import Milanesa_cheddar from "../../../Images/Products photos/Almuerzos/Milanesa_cheddar.png";
import Baguette_especial from "../../../Images/Products photos/Almuerzos/Baguette_especial.png";
import Lomopizza from "../../../Images/Products photos/Almuerzos/Lomopizza.png";
import Matambre_a_la_pizza from "../../../Images/Products photos/Almuerzos/Matambre_a_la_pizza.png";
import Papas_cheddar from "../../../Images/Products photos/Almuerzos/Papas_cheddar.png";
import Café_con_leche from "../../../Images/Products photos/Desayunos/Café_con_leche.png";
import Licuado_en_vaso from "../../../Images/Products photos/Desayunos/Licuado_en_vaso.png";
import Té from "../../../Images/Products photos/Desayunos/Té.png";
import Submarino from "../../../Images/Products photos/Desayunos/Submarino.png";
import Capuchino from "../../../Images/Products photos/Desayunos/Capuchino.png";
import Jugo_de_naranja_en_vaso from "../../../Images/Products photos/Desayunos/Jugo_de_naranja_en_vaso.png";
import Panificados from "../../../Images/Products photos/Desayunos/Panificados.png";
import Tostadas from "../../../Images/Products photos/Desayunos/Tostadas.png";
import Omelette_de_jamón_y_queso from "../../../Images/Products photos/Desayunos/Omelette_de_jamón_y_queso.png";
import Desayuno from "../../../Images/Products photos/Promociones/Desayuno.png";

const Category = () => {
  const {
    Controler5,
    setControler5,
    setControler6,
    setControler7,
    setLoading,
  } = useContext(AppContext);
  return (
    <div className="Category-background">
      <div className="Category-B1">
        <div className="Category-B1B1">
          <p className="Category-txt-1">Categorias</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="Category-svg-1"
            viewBox="0 0 16 16"
            stroke="white"
            strokeWidth={0.5}
            onClick={() => setControler7(false)}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="Category-B1B2">
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Hamburguesas" ? undefined : "Hamburguesas"
              ) &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Hamburguesas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Hamburguesa_city}
                className={
                  Controler5 === "Hamburguesas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Hamburguesas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Hamburguesas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Hamburguesas
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(Controler5 === "Pizzas" ? undefined : "Pizzas") &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Pizzas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Pizza_de_rucula_y_jamon_crudo}
                className={
                  Controler5 === "Pizzas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Pizzas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Pizzas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Pizzas
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Milanesas" ? undefined : "Milanesas"
              ) &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Milanesas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Milanesa_cheddar}
                className={
                  Controler5 === "Milanesas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Milanesas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Milanesas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Milanesas
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Sandwiches" ? undefined : "Sandwiches"
              ) &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Sandwiches"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Baguette_especial}
                className={
                  Controler5 === "Sandwiches"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Sandwiches" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Sandwiches"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Sandwiches
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Lomopizzas" ? undefined : "Lomopizzas"
              ) &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Lomopizzas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Lomopizza}
                className={
                  Controler5 === "Lomopizzas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Lomopizzas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Lomopizzas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Lomopizzas
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(Controler5 === "Carnes" ? undefined : "Carnes") &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Carnes"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Matambre_a_la_pizza}
                className={
                  Controler5 === "Carnes"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Carnes" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Carnes"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Carnes
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Acompañamientos" ? undefined : "Acompañamientos"
              ) &
              setControler6("Almuerzos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Acompañamientos"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Papas_cheddar}
                className={
                  Controler5 === "Acompañamientos"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Acompañamientos" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Acompañamientos"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Acompañamientos
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(Controler5 === "Café" ? undefined : "Café") &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Café"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Café_con_leche}
                className={
                  Controler5 === "Café"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Café" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Café"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Café
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Licuados" ? undefined : "Licuados"
              ) &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Licuados"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Licuado_en_vaso}
                className={
                  Controler5 === "Licuados"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Licuados" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Licuados"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Licuados
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(Controler5 === "Té" ? undefined : "Té") &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Té"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Té}
                className={
                  Controler5 === "Té"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Té" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Té"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Té
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Submarino" ? undefined : "Submarino"
              ) &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Submarino"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Submarino}
                className={
                  Controler5 === "Submarino"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Submarino" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Submarino"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Submarino
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Capuchino" ? undefined : "Capuchino"
              ) &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Capuchino"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Capuchino}
                className={
                  Controler5 === "Capuchino"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Capuchino" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Capuchino"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Capuchino
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(Controler5 === "Jugos" ? undefined : "Jugos") &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Jugos"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Jugo_de_naranja_en_vaso}
                className={
                  Controler5 === "Jugos"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Jugos" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Jugos"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Jugos
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Panificados" ? undefined : "Panificados"
              ) &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Panificados"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Panificados}
                className={
                  Controler5 === "Panificados"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Panificados" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Panificados"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Panificados
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5(
                Controler5 === "Tostadas" ? undefined : "Tostadas"
              ) &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Tostadas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Tostadas}
                className={
                  Controler5 === "Tostadas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Tostadas" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Tostadas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Tostadas
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5("Omelette") &
              setControler6("Desayunos") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Omelette"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Omelette_de_jamón_y_queso}
                className={
                  Controler5 === "Omelette"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Omelette" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Omelette"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Omelette
            </p>
          </div>
          <div
            className="Category-B1B2B1"
            onClick={() =>
              setControler5("Promociones") &
              setControler6("Promociones") &
              setLoading(false) &
              setControler7(false)
            }
          >
            <div
              className={
                Controler5 === "Promociones"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Desayuno}
                className={
                  Controler5 === "Promociones"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
              />
              {Controler5 === "Promociones" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Category-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )}
            </div>
            <p
              className={
                Controler5 === "Promociones"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Promociónes
            </p>
          </div>
        </div>
      </div>
      <div className="Category-B2" onClick={() => setControler7(false)}></div>
    </div>
  );
};

export default Category;
