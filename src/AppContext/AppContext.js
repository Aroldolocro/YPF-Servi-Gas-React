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
import Logo1 from "../Images/Logo1.png";

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

  const [Desayunos, setDesayunos] = useState([]);
  const [Almuerzos, setAlmuerzos] = useState([]);
  const [Promociones, setPromociones] = useState([]);
  const [SelectedProduct, setSelectedProduct] = useState({});
  const [Acompañamientos, setAcompañamientos] = useState([]);
  const [Extras, setExtras] = useState([]);
  const [ConditionedData, setConditionedData] = useState([]);
  const [ConditionedData2, setConditionedData2] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const dbQualificationDesayuno = doc(db, "Calificación", "Desayuno");
    const dbQualificationAlmuerzos = doc(db, "Calificación", "Almuerzos");
    const dbQualificationPromociones = doc(db, "Calificación", "Promociones");
    const dbDesayunosCollection = collection(db, "Desayunos");
    const dbAlmuerzosCollection = collection(db, "Almuerzos");
    const dbPromocionesCollection = collection(db, "Promociones");
    const dbSelectedProduct = doc(db, ProductCollection, ProductId);

    const ConditionedCollection = collection(db, Collection);
    const ConditionedCollection2 = collection(db, SectionPagePath);
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
    getDocs(dbDesayunosCollection).then((res) =>
      setDesayunos(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
    getDocs(dbAlmuerzosCollection).then((res) =>
      setAlmuerzos(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
    getDocs(dbPromocionesCollection).then((res) =>
      setPromociones(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );
    getDoc(dbSelectedProduct).then((res) =>
      setSelectedProduct({ id: res.id, ...res.data() })
    );
    getDoc(dbSelectedProduct).then((res) =>
      setAcompañamientos(res.get("Acompañamientos"))
    );
    getDoc(dbSelectedProduct).then((res) => setExtras(res.get("Extras")));

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
  }, [Collection, ProductId, ProductCollection, SectionPagePath]);

  const DesayunoQualification = (DesayunoQuality / DesayunoQuantity).toFixed(2);
  const AlmuerzoQualification = (AlmuerzoQuality / AlmuerzoQuantity).toFixed(2);
  const PromocionesQualification = (
    PromocionesQuality / PromocionesQuantity
  ).toFixed(2);
  const AlldbCollections = Desayunos.concat(Almuerzos, Promociones);
  const DesayunosLength = Desayunos.length;
  const AlmuerzosLength = Almuerzos.length;
  const PromocionesLength = Promociones.length;
  const ExplorerMobileArray = AlldbCollections.filter((x) => x.ExplorerPosition)
    .sort(function (x, y) {
      return x.ExplorerPosition - y.ExplorerPosition;
    })
    .slice(0, 10);
  const ExplorerMobileArrayForLoader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ExplorerDesktopArrayForLoader = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];
  const FilterArrayForLoader = [1, 2, 3, 4, 5];

  const DesayunoImage = Café_con_leche;
  const AlmuerzoImage = Pizza_especial;
  const PromocionesImage = Licuado;
  const ServiGasLogo1 = Logo1;

  const MainArray = [
    {
      Logo: ServiGasLogo1,
      Image: DesayunoImage,
      Section: "Desayunos y meriendas",
      Time: "10 - 15 min",
      Items: DesayunosLength,
      Qualification: DesayunoQualification,
      Url: "Desayunos",
    },
    {
      Logo: ServiGasLogo1,
      Image: AlmuerzoImage,
      Section: "Almuerzos y cenas",
      Time: "20 - 25 min",
      Items: AlmuerzosLength,
      Qualification: AlmuerzoQualification,
      Url: "Almuerzos",
    },
    {
      Logo: ServiGasLogo1,
      Image: PromocionesImage,
      Section: "Promociones",
      Time: "10 - 25 min",
      Items: PromocionesLength,
      Qualification: PromocionesQualification,
      Url: "Promociones",
    },
  ];

  /* Condiftion For Mapping */

  const ConditionForMapping =
    ProductoTipo === "Menor A Mayor Precio"
      ? AlldbCollections.sort(function (x, y) {
          return x.Precio - y.Precio;
        })
      : ProductoTipo === "Nuestros favoritos"
      ? AlldbCollections.filter((res) => res.Favorito === true)
      : ProductoTipo === "Promociones"
      ? Promociones
      : AlldbCollections.filter((x) => x.Tipo === ProductoTipo);

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

  const PopUpClose = () => {
    document.getElementById("ItemDetail-shadow").className =
      "ItemDetail-shadow ItemDetail-shadow-v1 ";
    document.getElementById("ItemDetail-content").className =
      "ItemDetail-content ItemDetail-content-v1";
    setTimeout(() => {
      setOpenPopUp(false);
    }, 300);
  };

  const PopUp3Close = () => {
    document.getElementById("Menu-Shadow").className =
      "Menu-Shadow Menu-Shadow-v1 ";
    document.getElementById("Menu-content").className =
      "Menu-content Menu-content-v1";
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

  const [MainImages, setMainImages] = useState(false);
  const [MainImages_Array, setMainImages_Array] = useState([]);

  const MainImages_Function = (i) => {
    MainImages_Array.push(i);
    if (MainImages_Array.length === MainArray.length) {
      setMainImages(true);
      setMainImages_Array([]);
    }
  };

  const [FilterImages, setFilterImages] = useState(false);
  const [FilterImages_Array, setFilterImages_Array] = useState([]);

  function FilterImages_Function(i) {
    FilterImages_Array.push(i);
    if (FilterImages_Array.length === ConditionForMapping.length) {
      setFilterImages(true);
      setFilterImages_Array([]);
    }
  }

  const [HomePageLoaded, setHomePageLoaded] = useState(false);

  useEffect(() => {
    if (
      (ExplorerMobileImages || ExplorerDesktopImages) &&
      MainImages &&
      DesayunosLength &&
      AlmuerzosLength &&
      PromocionesLength &&
      DesayunoQualification &&
      AlmuerzoQualification &&
      PromocionesQualification
    ) {
      setHomePageLoaded(true);
    }
  }, [
    ExplorerMobileImages,
    ExplorerDesktopImages,
    MainImages,
    DesayunosLength,
    AlmuerzosLength,
    PromocionesLength,
    DesayunoQualification,
    AlmuerzoQualification,
    PromocionesQualification,
  ]);

  const [ItemDetailLoaded, setItemDetailLoaded] = useState(false);
  const [ItemDetailImage, setItemDetailImage] = useState(false);

  useEffect(() => {
    if (ItemDetailImage && OpenPopUp) {
      setTimeout(() => {
        setItemDetailLoaded(true);
      }, 1000);
    } else {
      setItemDetailImage(false);
      setItemDetailLoaded(false);
    }
  }, [ItemDetailImage, OpenPopUp]);

  const [Loaded1, setLoaded1] = useState(false);
  const [Loaded2, setLoaded2] = useState(false);
  const [Loaded3, setLoaded3] = useState(false);
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

  /*Harcode Images - 2*/

  useEffect(() => {
    if (OpenPopUp4 && CategoryImages) {
      setLoaded2(true);
    } else {
      setLoaded2(false);
      setCategoryImages(false);
    }
  }, [OpenPopUp4, CategoryImages]);

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
        setItemDetailImage,
        ItemDetailLoaded,
        HomePageLoaded,
        Mobile,
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
        SelectedProduct,
        Acompañamientos,
        Extras,
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
        Loaded1,
        Loaded2,
        Image,
        Loaded3,
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
        PopUpClose,
        PopUp3Close,
        PopUp4Close,
        PopUp5Close,
        ExplorerMobileImages_Function,
        ExplorerDesktopImages_Function,
        CategoryImages_Function,
        MainImages_Function,
        FilterImages_Function,
        ExplorerMobileArray,
        ExplorerMobileArrayForLoader,
        ExplorerDesktopArrayForLoader,
        FilterArrayForLoader,
        ExplorerMobileImages,
        ExplorerDesktopImages,
        FilterImages,
        CategoryImages,
        DesayunoImage,
        AlmuerzoImage,
        PromocionesImage,
        MainArray,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ConstAppContext;
