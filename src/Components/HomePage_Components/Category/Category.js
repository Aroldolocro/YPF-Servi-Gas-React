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
import CategoryLoader from "./CategoryLoader";

const Category = () => {
  const {
    ProductoTipo,
    setProductoTipo,
    setCollection,
    setOpenPopUp4,
    setLoadedImg10,
    setLoadedImg11,
    setLoadedImg12,
    setLoadedImg13,
    setLoadedImg14,
    setLoadedImg15,
    setLoadedImg16,
    setLoadedImg17,
    setLoadedImg18,
    setLoadedImg19,
    setLoadedImg20,
    setLoadedImg21,
    setLoadedImg22,
    setLoadedImg23,
    setLoadedImg24,
    setLoadedImg25,
    setLoadedImg26,
    Loaded2,
  } = useContext(AppContext);
  return (
    <div className="Category-background">
      <div className="Category-B1">
        <div className="Category-B1B1">
          <p className="Category-txt-1">Categorías</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="Category-svg-1"
            viewBox="0 0 16 16"
            stroke="white"
            strokeWidth={0.5}
            onClick={() => setOpenPopUp4(false)}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div className="Category-B1B2">
          {!Loaded2 && <CategoryLoader />}
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Hamburguesas" ? undefined : "Hamburguesas"
              ) &
              setCollection("Almuerzos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Hamburguesas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Hamburguesa_city}
                className={
                  ProductoTipo === "Hamburguesas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg10(true)}
              />
              {ProductoTipo === "Hamburguesas" && (
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
                ProductoTipo === "Hamburguesas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Hamburguesas
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Pizzas" ? undefined : "Pizzas"
              ) &
              setCollection("Almuerzos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Pizzas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Pizza_de_rucula_y_jamon_crudo}
                className={
                  ProductoTipo === "Pizzas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg11(true)}
              />
              {ProductoTipo === "Pizzas" && (
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
                ProductoTipo === "Pizzas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Pizzas
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Milanesas" ? undefined : "Milanesas"
              ) &
              setCollection("Almuerzos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Milanesas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Milanesa_cheddar}
                className={
                  ProductoTipo === "Milanesas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg12(true)}
              />
              {ProductoTipo === "Milanesas" && (
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
                ProductoTipo === "Milanesas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Milanesas
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Sandwiches" ? undefined : "Sandwiches"
              ) &
              setCollection("Almuerzos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Sandwiches"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Baguette_especial}
                className={
                  ProductoTipo === "Sandwiches"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg13(true)}
              />
              {ProductoTipo === "Sandwiches" && (
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
                ProductoTipo === "Sandwiches"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Sandwiches
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Lomopizzas" ? undefined : "Lomopizzas"
              ) &
              setCollection("Almuerzos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Lomopizzas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Lomopizza}
                className={
                  ProductoTipo === "Lomopizzas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg14(true)}
              />
              {ProductoTipo === "Lomopizzas" && (
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
                ProductoTipo === "Lomopizzas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Lomopizzas
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Carnes" ? undefined : "Carnes"
              ) &
              setCollection("Almuerzos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Carnes"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Matambre_a_la_pizza}
                className={
                  ProductoTipo === "Carnes"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg15(true)}
              />
              {ProductoTipo === "Carnes" && (
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
                ProductoTipo === "Carnes"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Carnes
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Acompañamientos"
                  ? undefined
                  : "Acompañamientos"
              ) &
              setCollection("Almuerzos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Acompañamientos"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Papas_cheddar}
                className={
                  ProductoTipo === "Acompañamientos"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg16(true)}
              />
              {ProductoTipo === "Acompañamientos" && (
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
                ProductoTipo === "Acompañamientos"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Acompañamientos
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(ProductoTipo === "Café" ? undefined : "Café") &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Café"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Café_con_leche}
                className={
                  ProductoTipo === "Café"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg17(true)}
              />
              {ProductoTipo === "Café" && (
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
                ProductoTipo === "Café"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Café
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Licuados" ? undefined : "Licuados"
              ) &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Licuados"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Licuado_en_vaso}
                className={
                  ProductoTipo === "Licuados"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg18(true)}
              />
              {ProductoTipo === "Licuados" && (
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
                ProductoTipo === "Licuados"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Licuados
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(ProductoTipo === "Té" ? undefined : "Té") &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Té"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Té}
                className={
                  ProductoTipo === "Té"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg19(true)}
              />
              {ProductoTipo === "Té" && (
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
                ProductoTipo === "Té"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Té
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Submarino" ? undefined : "Submarino"
              ) &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Submarino"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Submarino}
                className={
                  ProductoTipo === "Submarino"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg20(true)}
              />
              {ProductoTipo === "Submarino" && (
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
                ProductoTipo === "Submarino"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Submarino
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Capuchino" ? undefined : "Capuchino"
              ) &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Capuchino"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Capuchino}
                className={
                  ProductoTipo === "Capuchino"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg21(true)}
              />
              {ProductoTipo === "Capuchino" && (
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
                ProductoTipo === "Capuchino"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Capuchino
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(ProductoTipo === "Jugos" ? undefined : "Jugos") &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Jugos"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Jugo_de_naranja_en_vaso}
                className={
                  ProductoTipo === "Jugos"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg22(true)}
              />
              {ProductoTipo === "Jugos" && (
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
                ProductoTipo === "Jugos"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Jugos
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Panificados" ? undefined : "Panificados"
              ) &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Panificados"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Panificados}
                className={
                  ProductoTipo === "Panificados"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg23(true)}
              />
              {ProductoTipo === "Panificados" && (
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
                ProductoTipo === "Panificados"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Panificados
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo(
                ProductoTipo === "Tostadas" ? undefined : "Tostadas"
              ) &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Tostadas"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Tostadas}
                className={
                  ProductoTipo === "Tostadas"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg24(true)}
              />
              {ProductoTipo === "Tostadas" && (
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
                ProductoTipo === "Tostadas"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Tostadas
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo("Omelette") &
              setCollection("Desayunos") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Omelette"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Omelette_de_jamón_y_queso}
                className={
                  ProductoTipo === "Omelette"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg25(true)}
              />
              {ProductoTipo === "Omelette" && (
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
                ProductoTipo === "Omelette"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Omelette
            </p>
          </div>
          <div
            className={Loaded2 ? "Category-B1B2B1" : "NotDisplayed"}
            onClick={() =>
              setProductoTipo("Promociones") &
              setCollection("Promociones") &
              setOpenPopUp4(false)
            }
          >
            <div
              className={
                ProductoTipo === "Promociones"
                  ? "Category-B1B2B1B1 Category-B1B2B1B1-selected"
                  : "Category-B1B2B1B1"
              }
            >
              <img
                src={Desayuno}
                className={
                  ProductoTipo === "Promociones"
                    ? "Category-img-1 Category-img-1-selected"
                    : "Category-img-1"
                }
                alt=""
                onLoad={() => setLoadedImg26(true)}
              />
              {ProductoTipo === "Promociones" && (
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
                ProductoTipo === "Promociones"
                  ? "Category-txt-2 Category-txt-2-selected"
                  : "Category-txt-2"
              }
            >
              Promociones
            </p>
          </div>
        </div>
      </div>
      <div className="Category-B2" onClick={() => setOpenPopUp4(false)}></div>
    </div>
  );
};

export default Category;
