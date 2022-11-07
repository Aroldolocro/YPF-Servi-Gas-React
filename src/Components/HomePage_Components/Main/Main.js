import "./Main.css";
import { useContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { AppContext } from "../../../AppContext/AppContext";
import { Link } from "react-router-dom";
import Café_con_leche from "../../../Images/Products photos/Desayunos/Café_con_leche.png";
import Pizza_especial from "../../../Images/Products photos/Almuerzos/Pizza_especial.png";
import Promo from "../../../Images/Products photos/Almuerzos/Promo.jpg";

const Main = () => {
  const {
    DesayunoQualification,
    AlmuerzoQualification,
    PromocionesQualification,
  } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, "Desayunos");
    const dbcollection1 = collection(db, "Almuerzos");
    const dbcollection2 = collection(db, "Promociones");
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
    getDocs(dbcollection1).then((res) =>
      setData1(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
    getDocs(dbcollection2).then((res) =>
      setData2(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  return (
    <div className="Main-background">
      <p className="Main-txt-1">Nuestro menú</p>
      <Link to={"/Desayunos"} className="Main-B1">
        <div className="Main-B1B1">
          <img src={Café_con_leche} className="Main-img-1" alt="" />
        </div>
        <div className="Main-B1B2">
          <div className="Main-B1B2B1">
            <p className="Main-txt-1">Desayunos y meriendas</p>
            <p className="Main-txt-2">Ítems ({data.length})</p>
          </div>
          <div className="Main-B1B2B2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Main-svg-1"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p className="Main-txt-3">{DesayunoQualification}</p>
          </div>
        </div>
      </Link>
      <Link to={"/Almuerzos"} className="Main-B1">
        <div className="Main-B1B1">
          <img src={Pizza_especial} className="Main-img-1" alt="" />
        </div>
        <div className="Main-B1B2">
          <div className="Main-B1B2B1">
            <p className="Main-txt-1">Almuerzos y cenas</p>
            <p className="Main-txt-2">Ítems ({data1.length})</p>
          </div>
          <div className="Main-B1B2B2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Main-svg-1"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p className="Main-txt-3">{AlmuerzoQualification}</p>
          </div>
        </div>
      </Link>
      <Link to={"/Promociones"} className="Main-B1">
        <div className="Main-B1B1">
          <img src={Promo} className="Main-img-1" alt="" />
        </div>
        <div className="Main-B1B2">
          <div className="Main-B1B2B1">
            <p className="Main-txt-1">Promociones</p>
            <p className="Main-txt-2">Ítems ({data2.length})</p>
          </div>
          <div className="Main-B1B2B2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Main-svg-1"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <p className="Main-txt-3">{PromocionesQualification}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Main;
