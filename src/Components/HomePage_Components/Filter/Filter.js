import "./Filter.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Filter = () => {
  const { setControler3, Controler5, Controler6, Loading } =
    useContext(AppContext);
  const [data, setData] = useState([]);
  const [InsideLoading, setInsideLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const dbcollection = collection(db, Controler6);
    getDocs(dbcollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, [Controler6]);

  const FilterdbProducts = data
    .filter((res) => res.Tipo === Controler5)
    .map((Item, index) => (
      <div
        key={index}
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts-background"
            : "SectionPagedbProducts-background-notdisplayed"
        }
        onClick={() => setControler3(Item.id)}
      >
        <div className="SectionPagedbProducts-B1">
          <p className="SectionPagedbProducts-txt-1">{Item.Nombre}</p>
          <p className="SectionPagedbProducts-txt-2">{Item.Descripción}</p>
          <p className="SectionPagedbProducts-txt-3">
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
            }).format(Item.Precio)}
          </p>
        </div>
        <div className="SectionPagedbProducts-B2">
          <img
            src={Item.Imagen}
            className="SectionPagedbProducts-img"
            alt=""
            onLoad={() => setInsideLoading(true)}
          />
        </div>
      </div>
    ));

  const SectionPagedbProducts_Loader = (
    <>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
      <div
        className={
          Loading && InsideLoading
            ? "SectionPagedbProducts_Loader-background-notdisplayed"
            : "SectionPagedbProducts_Loader-background"
        }
      >
        <div className="SectionPagedbProducts_Loader-B1">
          <div className="SectionPagedbProducts_Loader-B1B1"></div>
          <div className="SectionPagedbProducts_Loader-B1B2"></div>
          <div className="SectionPagedbProducts_Loader-B1B3"></div>
        </div>
        <div className="SectionPagedbProducts_Loader-B2"></div>
      </div>
    </>
  );

  return (
    <div className="Filter-background">
      <p className="Filter-txt-1">{Controler5}</p>
      <div className="Filter-B1">
        {SectionPagedbProducts_Loader}
        {FilterdbProducts}
      </div>
    </div>
  );
};

export default Filter;
