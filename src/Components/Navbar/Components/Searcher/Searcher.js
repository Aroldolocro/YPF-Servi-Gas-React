import "./Searcher.css";
import { useContext, useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { AppContext } from "../../../../AppContext/AppContext";

const Searcher = () => {
  const { Filtered, setFiltered } = useContext(AppContext);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const dbcollection1 = collection(db, "Almuerzos");
    const dbcollection2 = collection(db, "Desayunos");
    const dbcollection3 = collection(db, "Promociones");
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
    getDocs(dbcollection3).then((res) =>
      setData3(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
  }, []);

  const AlldbCollections = data1.concat(data2, data3);

  const handeFiltered = (event) => {
    const word = event.target.value;
    const NewFiltered = AlldbCollections.filter((valor) =>
      valor.Nombre.toLowerCase().includes(word.toLowerCase())
    );

    if (word === "") {
      setFiltered([]);
    } else {
      setFiltered(NewFiltered);
    }
  };

  return (
    <div className="Searcher-background">
      <input
        className="Searcher-input"
        placeholder="Buscar en Servi Gas"
        onChange={handeFiltered}
      />
      {Filtered.length > 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="Searcher-svg-2"
          viewBox="0 0 16 16"
          onClick={() => setFiltered([])}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="Searcher-svg-1"
          viewBox="0 0 16 16"
          stroke="#808080"
          strokeWidth={0.3}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      )}
    </div>
  );
};

export default Searcher;
