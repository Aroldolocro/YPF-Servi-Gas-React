import { createContext, useState, useEffect } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";
import Café_con_leche from "../Images/Products photos/Desayunos/Café_con_leche.png";
import Pizza_especial from "../Images/Products photos/Almuerzos/Pizza_especial.png";
import Licuado from "../Images/Products photos/Promociones/Licuado.png";

export const AppContext = createContext();

const ConstAppContext = ({ children }) => {
  /*App With*/

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const Mobile = windowSize.innerWidth < 1024 ? true : false;

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
  const [data5, setData5] = useState([]);
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
    getDoc(ConditionedDocument).then((res) => setData5(res.get("Extras")));
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
  const ExplorerMobileArray = AlldbCollections.filter((x) => x.ExplorerPosition)
    .sort(function (x, y) {
      return x.ExplorerPosition - y.ExplorerPosition;
    })
    .slice(0, 10);
  const ExplorerMobileArrayForLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ExplorerDesktopArrayForLoader = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];

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

  const PopUp3Close = () => {
    document.getElementById("Menu-Shadow").className =
      "Menu-Shadow Menu-Shadow-v1 ";
    document.getElementById("Menu-background").className =
      "Menu-background Menu-background-v1";
    setTimeout(() => {
      setOpenPopUp3(false);
    }, 300);
  };

  const PopUp4Close = () => {
    document.getElementById("Category-Shadow").className =
      "Category-Shadow Category-Shadow-v1 ";
    document.getElementById("Category-B1").className =
      "Category-B1 Category-B1-v1";
    setTimeout(() => {
      setOpenPopUp4(false);
    }, 300);
  };

  const PopUp5Close = () => {
    document.getElementById("Result-content-out").className =
      "Result-content-out Result-content-out-v1";
    document.getElementById("Result-content").className =
      "Result-content Result-content-v1";
    setTimeout(() => {
      setOpenPopUp5(false);
    }, 300);
  };

  /*LOADERS*/

  const [Loaded, setLoaded] = useState(false);
  const [Loaded1, setLoaded1] = useState(false);
  const [Loaded2, setLoaded2] = useState(false);
  const [Loaded3, setLoaded3] = useState(false);
  const [Loaded4, setLoaded4] = useState(false);
  const [Loaded5, setLoaded5] = useState(false);

  const [Loader, setLoader] = useState(true);

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
    if (Filtered.length === 0 && !ResultInitialState) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        setResultFound(false);
      }, 500);
    }
  }, [OpenPopUp5, StateWord, MapImage_3, ResultInitialState, Filtered.length]);

  const [ExplorerMobileImages, setExplorerMobileImages] = useState(false);
  const [ExplorerMobileImages_Array, setExplorerMobileImages_Array] = useState(
    []
  );

  const ExplorerMobileImages_Function = (i) => {
    ExplorerMobileImages_Array.push(i);
    if (
      ExplorerMobileImages_Array.length === ExplorerMobileArrayForLoader.length
    ) {
      setExplorerMobileImages(true);
      setExplorerMobileImages_Array([]);
    }
  };

  const [ExplorerDesktopImages, setExplorerDesktopImages] = useState(false);
  const [ExplorerDesktopImages_Array, setExplorerDesktopImages_Array] =
    useState([]);

  const ExplorerDesktopImages_Function = (i) => {
    ExplorerDesktopImages_Array.push(i);
    if (
      ExplorerDesktopImages_Array.length ===
      ExplorerDesktopArrayForLoader.length
    ) {
      setExplorerDesktopImages(true);
      setExplorerDesktopImages_Array([]);
    }
  };

  const [CategoryImages, setCategoryImages] = useState(false);
  const [CategoryImages_Array, setCategoryImages_Array] = useState([]);

  const CategoryImages_Function = (i) => {
    CategoryImages_Array.push(i);
    if (CategoryImages_Array.length === ExplorerDesktopArrayForLoader.length) {
      setCategoryImages(true);
      setCategoryImages_Array([]);
    }
  };

  /*Harcode Images - 1*/

  const DesayunoImage = Café_con_leche;
  const AlmuerzoImage = Pizza_especial;
  const PromocionesImage = Licuado;

  useEffect(() => {
    if (
      DesayunosLength &&
      AlmuerzosLength &&
      PromocionesLength &&
      DesayunoQualification &&
      AlmuerzoQualification &&
      PromocionesQualification
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
  ]);

  /*Harcode Images - 2*/

  useEffect(() => {
    if (OpenPopUp4 && CategoryImages) {
      setLoaded2(true);
    } else {
      setLoaded2(false);
      setCategoryImages(false);
    }
  }, [OpenPopUp4, CategoryImages]);

  useEffect(() => {
    if (data3 && OpenPopUp) {
      setTimeout(() => {
        setLoaded4(true);
      }, 1000);
    } else {
      setLoaded4(false);
    }
  }, [data3, OpenPopUp]);

  /*SAVED ON LOCALSTORAGE*/

  const [QuealificatedDesayunos, setQuealificatedDesayunos] = useState(false);
  const [QuealificatedAlmuerzos, setQuealificatedAlmuerzos] = useState(false);
  const [QuealificatedPromociones, setQuealificatedPromociones] =
    useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem(
      "QuealificatedDesayunos_local_storage"
    );
    const data1 = window.localStorage.getItem(
      "QuealificatedAlmuerzos_local_storage"
    );
    const data2 = window.localStorage.getItem(
      "QuealificatedPromociones_local_storage"
    );
    if (data !== null) {
      setQuealificatedDesayunos(JSON.parse(data));
    }
    if (data1 !== null) {
      setQuealificatedAlmuerzos(JSON.parse(data1));
    }
    if (data2 !== null) {
      setQuealificatedPromociones(JSON.parse(data2));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "QuealificatedDesayunos_local_storage",
      JSON.stringify(QuealificatedDesayunos)
    );
    window.localStorage.setItem(
      "QuealificatedAlmuerzos_local_storage",
      JSON.stringify(QuealificatedAlmuerzos)
    );
    window.localStorage.setItem(
      "QuealificatedPromociones_local_storage",
      JSON.stringify(QuealificatedPromociones)
    );
  }, [
    QuealificatedDesayunos,
    QuealificatedAlmuerzos,
    QuealificatedPromociones,
  ]);

  /*QUALIFIER*/

  const [Calification, setCalification] = useState();
  const [Qualified, setQualified] = useState(false);

  useEffect(() => {
    if (!OpenPopUp1) {
      setQualified(false);
      setCalification();
    }
  }, [OpenPopUp1]);

  const SendCalification = () => {
    const db = getFirestore();
    if (sectionName === "Desayunos y meriendas") {
      const NewDoc = {
        Cantidad: DesayunoQuantity + 1,
        Calidad: DesayunoQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Desayuno");
      updateDoc(dbdoc, NewDoc);
      setQuealificatedDesayunos(true);
    }
    if (sectionName === "Almuerzos y cenas") {
      const NewDoc1 = {
        Cantidad: AlmuerzoQuantity + 1,
        Calidad: AlmuerzoQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Almuerzos");
      updateDoc(dbdoc, NewDoc1);
      setQuealificatedAlmuerzos(true);
    }
    if (sectionName === "Promociones") {
      const NewDoc2 = {
        Cantidad: PromocionesQuantity + 1,
        Calidad: PromocionesQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Promociones");
      updateDoc(dbdoc, NewDoc2);
      setQuealificatedPromociones(true);
    }
  };

  /*SECTION PAGE*/

  const [Image, setImage] = useState();

  return (
    <AppContext.Provider
      value={{
        Mobile,
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
        QuealificatedDesayunos,
        QuealificatedAlmuerzos,
        QuealificatedPromociones,
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
        data5,
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
        Qualified,
        setQualified,
        PopUp3Close,
        PopUp4Close,
        PopUp5Close,
        ExplorerMobileImages_Function,
        ExplorerDesktopImages_Function,
        CategoryImages_Function,
        ExplorerMobileArray,
        ExplorerMobileArrayForLoader,
        ExplorerDesktopArrayForLoader,
        ExplorerMobileImages,
        ExplorerDesktopImages,
        CategoryImages,
        DesayunoImage,
        AlmuerzoImage,
        PromocionesImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ConstAppContext;
