import { createContext, useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const AppContext = createContext();

const ConstAppContext = ({ children }) => {
  /*CONTROLERS*/

  const [Controler1, setControler1] = useState(false);
  const [Controler2, setControler2] = useState(false);
  const [Controler3, setControler3] = useState();
  const [Controler4, setControler4] = useState();
  const [Controler5, setControler5] = useState();
  const [Controler6, setControler6] = useState();
  const [Controler7, setControler7] = useState(false);

  /*CONDITIONAL DATA*/

  const [sectionName, setSectionName] = useState();

  /*LOADER ON CONTEXT*/

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (!Loading) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }, [Loading]);

  /*QUALIFICATION DATA*/

  const [DesayunoQuantity, setDesayunoQuantity] = useState({});
  const [DesayunoQuality, setDesayunoQuality] = useState({});
  const [AlmuerzoQuantity, setAlmuerzoQuantity] = useState({});
  const [AlmuerzoQuality, setAlmuerzoQuality] = useState({});
  const [PromocionesQuantity, setPromocionesQuantity] = useState({});
  const [PromocionesQuality, setPromocionesQuality] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const dbQualificationDesayuno = doc(db, "Calificación", "Desayuno");
    const dbQualificationAlmuerzos = doc(db, "Calificación", "Almuerzos");
    const dbQualificationPromociones = doc(db, "Calificación", "Promociones");
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
  }, []);

  const DesayunoQualification = (DesayunoQuality / DesayunoQuantity).toFixed(2);
  const AlmuerzoQualification = (AlmuerzoQuality / AlmuerzoQuantity).toFixed(2);
  const PromocionesQualification = (
    PromocionesQuality / PromocionesQuantity
  ).toFixed(2);

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

  return (
    <AppContext.Provider
      value={{
        Controler1,
        setControler1,
        Controler2,
        setControler2,
        Controler3,
        setControler3,
        Controler4,
        setControler4,
        Controler5,
        setControler5,
        Controler6,
        setControler6,
        Controler7,
        setControler7,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ConstAppContext;
