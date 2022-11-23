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

  const [SearcherOn, setSearcherOn] = useState(false);
  const [Filtered, setFiltered] = useState([]);
  const [StateWord, setStateWord] = useState("");
  const [ResultInitialState, setResultInitialState] = useState(true);
  const [ResultFound, setResultFound] = useState(false);

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
  const DesayunosLength = data.length;
  const AlmuerzosLength = data1.length;
  const PromocionesLength = data2.length;

  /* Condiftion For Mapping */

  const ConditionForMapping =
    ProductoTipo === "Menor A Mayor Precio"
      ? AlldbCollections.sort(function (x, y) {
          return x.Precio - y.Precio;
        })
      : ProductoTipo === "Nuestros favoritos"
      ? AlldbCollections.filter((res) => res.Favorito === true)
      : ConditionedData.filter((res) => res.Tipo === ProductoTipo);

  /*POPUP*/

  const [OpenPopUp, setOpenPopUp] = useState(false);
  const [OpenPopUp1, setOpenPopUp1] = useState(false);
  const [OpenPopUp2, setOpenPopUp2] = useState(false);
  const [OpenPopUp3, setOpenPopUp3] = useState(false);
  const [OpenPopUp4, setOpenPopUp4] = useState(false);
  const [OpenPopUp5, setOpenPopUp5] = useState(false);

  useEffect(() => {
    if (
      OpenPopUp ||
      OpenPopUp1 ||
      OpenPopUp2 ||
      OpenPopUp3 ||
      OpenPopUp4 ||
      OpenPopUp5
    ) {
      document.getElementById("root").className = "NoScroll";
      document.body.className = "NoScroll";
    } else {
      document.getElementById("root").className = undefined;
      document.body.className = undefined;
    }
  }, [OpenPopUp, OpenPopUp1, OpenPopUp2, OpenPopUp3, OpenPopUp4, OpenPopUp5]);

  /*LOADERS*/

  const [Loaded, setLoaded] = useState(false);
  const [Loaded1, setLoaded1] = useState(false);
  const [Loaded2, setLoaded2] = useState(false);
  const [Loaded3, setLoaded3] = useState(false);
  const [Loaded4, setLoaded4] = useState(false);
  const [Loaded5, setLoaded5] = useState(false);

  const [Loader, setLoader] = useState(true);

  /*LOADERS - Hardcode Images*/

  const [LoadedImg1, setLoadedImg1] = useState(false);
  const [LoadedImg2, setLoadedImg2] = useState(false);
  const [LoadedImg3, setLoadedImg3] = useState(false);
  const [LoadedImg4, setLoadedImg4] = useState(false);
  const [LoadedImg5, setLoadedImg5] = useState(false);
  const [LoadedImg6, setLoadedImg6] = useState(false);
  const [LoadedImg7, setLoadedImg7] = useState(false);
  const [LoadedImg8, setLoadedImg8] = useState(false);
  const [LoadedImg9, setLoadedImg9] = useState(false);
  const [LoadedImg10, setLoadedImg10] = useState(false);
  const [LoadedImg11, setLoadedImg11] = useState(false);
  const [LoadedImg12, setLoadedImg12] = useState(false);
  const [LoadedImg13, setLoadedImg13] = useState(false);
  const [LoadedImg14, setLoadedImg14] = useState(false);
  const [LoadedImg15, setLoadedImg15] = useState(false);
  const [LoadedImg16, setLoadedImg16] = useState(false);
  const [LoadedImg17, setLoadedImg17] = useState(false);
  const [LoadedImg18, setLoadedImg18] = useState(false);
  const [LoadedImg19, setLoadedImg19] = useState(false);
  const [LoadedImg20, setLoadedImg20] = useState(false);
  const [LoadedImg21, setLoadedImg21] = useState(false);
  const [LoadedImg22, setLoadedImg22] = useState(false);
  const [LoadedImg23, setLoadedImg23] = useState(false);
  const [LoadedImg24, setLoadedImg24] = useState(false);
  const [LoadedImg25, setLoadedImg25] = useState(false);
  const [LoadedImg26, setLoadedImg26] = useState(false);
  const [LoadedImg28, setLoadedImg28] = useState(false);
  const [LoadedImg29, setLoadedImg29] = useState(false);
  const [LoadedImg30, setLoadedImg30] = useState(false);
  const [LoadedImg31, setLoadedImg31] = useState(false);

  useEffect(() => {
    if (AlldbCollections.length > 0) {
      setSearcherOn(true);
    } else {
      setSearcherOn(false);
    }
  }, [AlldbCollections.length]);

  /*LOADERS - Map Images*/

  /*Map Images - 1*/

  useEffect(() => {
    if (sectionName) {
      setLoaded3(false);
    }
  }, [sectionName]);

  const [MapImage_1, setMapImage_1] = useState(false);
  const [MapImage_1_ArrayLength, setMapImage_1_ArrayLength] = useState(0);
  const MapImage_1_Array = [];

  const MapImage_1_Function = (i) => {
    MapImage_1_Array.push(i);
    if (MapImage_1_Array.length === ConditionedData2.length) {
      setMapImage_1(true);
      setMapImage_1_ArrayLength(MapImage_1_Array.length);
    }
  };

  useEffect(() => {
    if (
      DesayunoQualification > 0 &&
      AlmuerzoQualification > 0 &&
      PromocionesQualification > 0 &&
      LoadedImg28 &&
      MapImage_1 &&
      MapImage_1_ArrayLength === ConditionedData2.length
    ) {
      setTimeout(() => {
        setLoaded3(true);
      }, 1000);
    } else {
      setLoaded3(false);
    }
  }, [
    AlmuerzoQualification,
    DesayunoQualification,
    PromocionesQualification,
    LoadedImg28,
    MapImage_1,
    ConditionedData2.length,
    MapImage_1_ArrayLength,
  ]);

  /*Map Images - 2*/

  const [MapImage_2, setMapImage_2] = useState(false);
  const [MapImage_2_ArrayLength2, setMapImage_2_ArrayLength2] = useState(0);
  const [MapImage_2_Array, setMapImage_2_Array] = useState([]);

  const MapImage_2_Function = (i) => {
    MapImage_2_Array.push(i);
    if (MapImage_2_Array.length === ConditionForMapping.length) {
      setMapImage_2(true);
      setMapImage_2_ArrayLength2(MapImage_2_Array.length);
      setMapImage_2_Array([]);
    }
  };

  useEffect(() => {
    if (MapImage_2 && MapImage_2_ArrayLength2 === ConditionForMapping.length) {
      setTimeout(() => {
        setLoaded1(true);
      }, 1000);
    } else {
      setLoaded1(false);
    }
  }, [MapImage_2, ConditionForMapping.length, MapImage_2_ArrayLength2]);

  /*Map Images - 3*/

  const [MapImage_3, setMapImage_3] = useState(false);
  const [MapImage_3_Array, setMapImage_3_Array] = useState([]);

  const MapImage_3_Function = (i) => {
    MapImage_3_Array.push(i);
    if (MapImage_3_Array.length === 5) {
      setMapImage_3(true);
    }
  };

  useEffect(() => {
    /*Step1*/
    if (OpenPopUp5 && StateWord === "") {
      setResultInitialState(true);
    } else if (OpenPopUp5 && StateWord !== "") {
      setResultInitialState(false);
      setMapImage_3_Array([]);
    }
    /*Step2*/
    if (MapImage_3 && OpenPopUp5 && ResultInitialState) {
      setTimeout(() => {
        setLoaded5(true);
      }, 1000);
    } else {
      setLoaded5(false);
    }
    /*Step3*/
    if (Filtered.length > 0 && !ResultInitialState) {
      setLoader(false);
      setResultFound(true);
    }
    if (Filtered.length === 0 && !ResultInitialState && LoadedImg31) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        setResultFound(false);
      }, 500);
    }
  }, [
    OpenPopUp5,
    StateWord,
    MapImage_3,
    ResultInitialState,
    Filtered.length,
    LoadedImg31,
  ]);

  /*Harcode Images - 1*/

  useEffect(() => {
    if (
      DesayunosLength &&
      AlmuerzosLength &&
      PromocionesLength &&
      DesayunoQualification &&
      AlmuerzoQualification &&
      PromocionesQualification &&
      LoadedImg1 &&
      LoadedImg2 &&
      LoadedImg3 &&
      LoadedImg4 &&
      LoadedImg5 &&
      LoadedImg6 &&
      LoadedImg7 &&
      LoadedImg8
    ) {
      setLoaded(true);
    }
  }, [
    DesayunosLength,
    AlmuerzosLength,
    PromocionesLength,
    DesayunoQualification,
    AlmuerzoQualification,
    PromocionesQualification,
    LoadedImg1,
    LoadedImg2,
    LoadedImg3,
    LoadedImg4,
    LoadedImg5,
    LoadedImg6,
    LoadedImg7,
    LoadedImg8,
  ]);

  /*Harcode Images - 2*/

  useEffect(() => {
    if (
      OpenPopUp4 &&
      LoadedImg10 &&
      LoadedImg11 &&
      LoadedImg12 &&
      LoadedImg13 &&
      LoadedImg14 &&
      LoadedImg15 &&
      LoadedImg16 &&
      LoadedImg17 &&
      LoadedImg18 &&
      LoadedImg19 &&
      LoadedImg20 &&
      LoadedImg21 &&
      LoadedImg22 &&
      LoadedImg23 &&
      LoadedImg24 &&
      LoadedImg25 &&
      LoadedImg26
    ) {
      setLoaded2(true);
    } else {
      setLoaded2(false);
    }
  }, [
    LoadedImg10,
    LoadedImg11,
    LoadedImg12,
    LoadedImg13,
    LoadedImg14,
    LoadedImg15,
    LoadedImg16,
    LoadedImg17,
    LoadedImg18,
    LoadedImg19,
    LoadedImg20,
    LoadedImg21,
    LoadedImg22,
    LoadedImg23,
    LoadedImg24,
    LoadedImg25,
    LoadedImg26,
    OpenPopUp4,
  ]);

  useEffect(() => {
    if (LoadedImg30 && data3 && OpenPopUp) {
      setTimeout(() => {
        setLoaded4(true);
      }, 1000);
    } else {
      setLoaded4(false);
      setLoadedImg30(false);
    }
  }, [LoadedImg30, data3, OpenPopUp]);

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

  /*SECTION PAGE*/

  const [Image, setImage] = useState();

  return (
    <AppContext.Provider
      value={{
        data1,
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
        Filtered,
        setFiltered,
        DesayunosLength,
        AlmuerzosLength,
        PromocionesLength,
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
        setLoadedImg1,
        setLoadedImg2,
        setLoadedImg3,
        setLoadedImg4,
        setLoadedImg5,
        setLoadedImg6,
        setLoadedImg7,
        setLoadedImg8,
        LoadedImg9,
        setLoadedImg9,
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
        setLoadedImg28,
        LoadedImg29,
        setLoadedImg29,
        setLoadedImg30,
        Loaded,
        Loaded1,
        Loaded2,
        Image,
        Loaded3,
        Loaded4,
        Loaded5,
        OpenPopUp5,
        setImage,
        setOpenPopUp5,
        StateWord,
        setStateWord,
        ResultInitialState,
        MapImage_1_Function,
        MapImage_2_Function,
        MapImage_3_Function,
        ConditionForMapping,
        ResultFound,
        Loader,
        SearcherOn,
        setLoadedImg31,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ConstAppContext;
