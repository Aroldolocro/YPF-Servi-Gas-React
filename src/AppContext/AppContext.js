import { createContext, useState, useEffect } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";

export const AppContext = createContext();

const ConstAppContext = ({ children }) => {
  /*CONTROLERS*/

  const [ProductId, setProductId] = useState(" ");
  const [ProductCollection, setProductCollection] = useState(" ");
  const [ProductoTipo, setProductoTipo] = useState();
  const [Collection, setCollection] = useState(" ");

  /*CONDITIONAL DATA*/

  const [sectionName, setSectionName] = useState();

  /*SEARCHER DATA*/

  const [Filtered, setFiltered] = useState([]);

  /*LOADER ON CONTEXT*/

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (!Loading) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }, [Loading]);

  /*FIREBASE DATA*/

  const [DesayunoQuantity, setDesayunoQuantity] = useState({});
  const [DesayunoQuality, setDesayunoQuality] = useState({});
  const [AlmuerzoQuantity, setAlmuerzoQuantity] = useState({});
  const [AlmuerzoQuality, setAlmuerzoQuality] = useState({});
  const [PromocionesQuantity, setPromocionesQuantity] = useState({});
  const [PromocionesQuality, setPromocionesQuality] = useState({});

  const [SectionPagePath, setSectionPagePath] = useState(" ");
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState([]);
  const [ConditionedData, setConditionedData] = useState([]);
  const [ConditionedData2, setConditionedData2] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const dbQualificationDesayuno = doc(db, "Calificación", "Desayuno");
    const dbQualificationAlmuerzos = doc(db, "Calificación", "Almuerzos");
    const dbQualificationPromociones = doc(db, "Calificación", "Promociones");
    const dbcollection = collection(db, "Desayunos");
    const dbcollection1 = collection(db, "Almuerzos");
    const dbcollection2 = collection(db, "Promociones");
    const ConditionedCollection = collection(db, Collection);
    const ConditionedCollection2 = collection(db, SectionPagePath);
    const ConditionedDocument = doc(db, ProductCollection, ProductId);
    getDoc(dbQualificationAlmuerzos).then((res) =>
      setAlmuerzoQuantity(res.get("Cantidad"))
    );
    getDoc(dbQualificationAlmuerzos).then((res) =>
      setAlmuerzoQuality(res.get("Calidad"))
    );
    getDoc(dbQualificationDesayuno).then((res) =>
      setDesayunoQuantity(res.get("Cantidad"))
    );
    getDoc(dbQualificationDesayuno).then((res) =>
      setDesayunoQuality(res.get("Calidad"))
    );
    getDoc(dbQualificationPromociones).then((res) =>
      setPromocionesQuantity(res.get("Cantidad"))
    );
    getDoc(dbQualificationPromociones).then((res) =>
      setPromocionesQuality(res.get("Calidad"))
    );
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
    if (Collection !== " ") {
      getDocs(ConditionedCollection).then((res) =>
        setConditionedData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
    if (SectionPagePath !== " ") {
      getDocs(ConditionedCollection2).then((res) =>
        setConditionedData2(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
    getDoc(ConditionedDocument).then((res) =>
      setData3({ id: res.id, ...res.data() })
    );
    getDoc(ConditionedDocument).then((res) =>
      setData4(res.get("Acompañamientos"))
    );
  }, [Collection, ProductId, ProductCollection, SectionPagePath]);

  const DesayunoQualification = (DesayunoQuality / DesayunoQuantity).toFixed(2);
  const AlmuerzoQualification = (AlmuerzoQuality / AlmuerzoQuantity).toFixed(2);
  const PromocionesQualification = (
    PromocionesQuality / PromocionesQuantity
  ).toFixed(2);
  const AlldbCollections = data.concat(data1, data2);

  /*SAVED ON LOCALSTORAGE*/

  const [Quealificated, setQuealificated] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("Quealificated_local_storage");
    if (data !== false) setQuealificated(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "Quealificated_local_storage",
      JSON.stringify(Quealificated)
    );
  }, [Quealificated]);

  /*QUALIFIER*/

  const [Calification, setCalification] = useState();

  const SendCalification = () => {
    const db = getFirestore();
    if (sectionName === "Desayunos y meriendas") {
      const NewDoc = {
        Cantidad: DesayunoQuantity + 1,
        Calidad: DesayunoQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Desayuno");
      updateDoc(dbdoc, NewDoc);
      setQuealificated(true);
    } else if (sectionName === "Almuerzos y cenas") {
      const NewDoc1 = {
        Cantidad: AlmuerzoQuantity + 1,
        Calidad: AlmuerzoQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Almuerzos");
      updateDoc(dbdoc, NewDoc1);
      setQuealificated(true);
    } else if (sectionName === "Promociones") {
      const NewDoc2 = {
        Cantidad: PromocionesQuantity + 1,
        Calidad: PromocionesQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Promociones");
      updateDoc(dbdoc, NewDoc2);
      setQuealificated(true);
    }
  };

  /*POPUP*/

  const [OpenPopUp, setOpenPopUp] = useState(false);
  const [OpenPopUp1, setOpenPopUp1] = useState(false);
  const [OpenPopUp2, setOpenPopUp2] = useState(false);
  const [OpenPopUp3, setOpenPopUp3] = useState(false);
  const [OpenPopUp4, setOpenPopUp4] = useState(false);

  useEffect(() => {
    if (OpenPopUp || OpenPopUp1 || OpenPopUp2 || OpenPopUp3 || OpenPopUp4) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [OpenPopUp, OpenPopUp1, OpenPopUp2, OpenPopUp3, OpenPopUp4]);

  console.log(Collection);

  return (
    <AppContext.Provider
      value={{
        ProductId,
        setProductId,
        ProductCollection,
        setProductCollection,
        ProductoTipo,
        setProductoTipo,
        Collection,
        setCollection,
        OpenPopUp4,
        setOpenPopUp4,
        Quealificated,
        setQuealificated,
        sectionName,
        setSectionName,
        DesayunoQualification,
        AlmuerzoQualification,
        PromocionesQualification,
        DesayunoQuantity,
        DesayunoQuality,
        AlmuerzoQuantity,
        AlmuerzoQuality,
        PromocionesQuantity,
        PromocionesQuality,
        Loading,
        setLoading,
        Filtered,
        setFiltered,
        data,
        data1,
        data2,
        data3,
        data4,
        AlldbCollections,
        OpenPopUp,
        setOpenPopUp,
        OpenPopUp1,
        setOpenPopUp1,
        OpenPopUp2,
        setOpenPopUp2,
        ConditionedData,
        Calification,
        setCalification,
        SendCalification,
        setSectionPagePath,
        ConditionedData2,
        OpenPopUp3,
        setOpenPopUp3,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ConstAppContext;
