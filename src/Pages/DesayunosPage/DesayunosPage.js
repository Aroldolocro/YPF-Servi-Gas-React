import "./DesayunosPage.css";
import Image3 from "../../Images/Image3.png";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const DesayunosPage = () => {
  const [data, setData] = useState([]);

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
    <div key={index} className="DesayunosPagedbProducts-background">
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
        <img src={Item.Imagen} className="DesayunosPagedbProducts-img" alt="" />
      </div>
    </div>
  ));

  // const DesayunosPagedbProducts_Loader = (
  //   <div className="DesayunosPagedbProducts-background"></div>
  // );

  return (
    <div className="DesayunosPage-background">
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
          <div className="DesayunosPage-C-B2B2">{DesayunosPagedbProducts}</div>
        </div>
      </div>
    </div>
  );
};

export default DesayunosPage;
