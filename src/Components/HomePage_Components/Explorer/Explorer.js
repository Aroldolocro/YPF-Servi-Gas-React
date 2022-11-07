import "./Explorer.css";
import Hamburguesa_city from "../../../Images/Products photos/Almuerzos/Hamburguesa_city.png";
import Pizza_de_rucula_y_jamon_crudo from "../../../Images/Products photos/Almuerzos/Pizza_de_rucula_y_jamon_crudo.png";
import Milanesa_cheddar from "../../../Images/Products photos/Almuerzos/Milanesa_cheddar.png";
import Baguette_especial from "../../../Images/Products photos/Almuerzos/Baguette_especial.png";
import Tartas_caseras from "../../../Images/Products photos/Almuerzos/Tartas_caseras.png";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const Explorer = () => {
  const { setControler5, setControler6 } = useContext(AppContext);
  return (
    <div className="Explorer-background">
      <div className="Explorer-content">
        <div className="Explorer-C-B1">
          <div
            className="Explorer-C-B1B1"
            onClick={() =>
              setControler5("Hamburguesas") & setControler6("Almuerzos")
            }
          >
            <div className="Explorer-C-B1B1B1">
              <img src={Hamburguesa_city} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Hamburguesas</p>
          </div>
          <div
            className="Explorer-C-B1B1"
            onClick={() => setControler5("Pizzas") & setControler6("Almuerzos")}
          >
            <div className="Explorer-C-B1B1B1">
              <img
                src={Pizza_de_rucula_y_jamon_crudo}
                className="Explorer-img-1"
                alt=""
              />
            </div>
            <p className="Explorer-txt-1">Pizzas</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={Milanesa_cheddar} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Milanesas</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={Baguette_especial} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Sandwiches</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={Tartas_caseras} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Tartas</p>
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
