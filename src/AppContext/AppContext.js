import { createContext, useState, useEffect } from "react";
import React from "react";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";
import Desayunos_Image from "../Images/Desayunos.png";
import Almuerzos_Image from "../Images/Almuerzos.png";
import Promociones_Image from "../Images/Promociones.png";
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

  /*App Scroll*/

  const [Scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*App location*/

  const [AppLocation, setAppLocation] = useState();

  /*Product controllers*/

  const [ProductId, setProductId] = useState(" ");
  const [ProductCollection, setProductCollection] = useState(" ");
  const [ProductoTipo, setProductoTipo] = useState();

  /*Section data*/

  const [SectionPagePath, setSectionPagePath] = useState(" ");
  const [SectionData, setSectionData] = useState({});

  /*Searcher data*/

  const [SearcherOn, setSearcherOn] = useState(false);
  const [Filtered, setFiltered] = useState([]);
  const [StateWord, setStateWord] = useState("");
  const [ResultInitialState, setResultInitialState] = useState(true);
  const [ResultFound, setResultFound] = useState(false);

  /*Firebase data*/

  const [DesayunoQuantity, setDesayunoQuantity] = useState("");
  const [DesayunoQuality, setDesayunoQuality] = useState({});
  const [AlmuerzoQuantity, setAlmuerzoQuantity] = useState("");
  const [AlmuerzoQuality, setAlmuerzoQuality] = useState({});
  const [PromocionesQuantity, setPromocionesQuantity] = useState("");
  const [PromocionesQuality, setPromocionesQuality] = useState({});
  const [Desayunos, setDesayunos] = useState([]);
  const [Almuerzos, setAlmuerzos] = useState([]);
  const [Promociones, setPromociones] = useState([]);
  const [SelectedProduct, setSelectedProduct] = useState({});
  const [Acompañamientos, setAcompañamientos] = useState([]);
  const [Extras, setExtras] = useState([]);
  const [ProductsBySectionPath, setProductsBySectionPath] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const dbQualificationDesayuno = doc(db, "Calificación", "Desayuno");
    const dbQualificationAlmuerzos = doc(db, "Calificación", "Almuerzos");
    const dbQualificationPromociones = doc(db, "Calificación", "Promociones");
    const dbDesayunosCollection = collection(db, "Desayunos");
    const dbAlmuerzosCollection = collection(db, "Almuerzos");
    const dbPromocionesCollection = collection(db, "Promociones");
    const dbSelectedProduct = doc(db, ProductCollection, ProductId);
    const dbProductsBySectionPathCollection = collection(db, SectionPagePath);
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
    if (SectionPagePath !== " ") {
      getDocs(dbProductsBySectionPathCollection).then((res) =>
        setProductsBySectionPath(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [ProductId, ProductCollection, SectionPagePath]);

  const DesayunoQualification = (DesayunoQuality / DesayunoQuantity).toFixed(1);
  const AlmuerzoQualification = (AlmuerzoQuality / AlmuerzoQuantity).toFixed(1);
  const PromocionesQualification = (
    PromocionesQuality / PromocionesQuantity
  ).toFixed(1);
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
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ];
  const FilterArrayForLoader = [1, 2, 3, 4, 5];
  const DesayunoImage = Desayunos_Image;
  const AlmuerzoImage = Almuerzos_Image;
  const PromocionesImage = Promociones_Image;
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

  useEffect(() => {
    const NewArr = [
      {
        Logo: ServiGasLogo1,
        Restaurant: "Servi Gas",
        Location: "Av Kennedy y Av Mariano Moreno",
        Image: DesayunoImage,
        Section: "Desayunos y meriendas",
        Time: "10 - 15 min",
        Items: DesayunosLength,
        Qualification: DesayunoQualification,
        QualificationQuantity: DesayunoQuantity,
        Hours: "8:00 - 00:00",
      },
      {
        Logo: ServiGasLogo1,
        Restaurant: "Servi Gas",
        Location: "Av Kennedy y Av Mariano Moreno",
        Image: AlmuerzoImage,
        Section: "Almuerzos y cenas",
        Time: "20 - 25 min",
        Items: AlmuerzosLength,
        Qualification: AlmuerzoQualification,
        QualificationQuantity: AlmuerzoQuantity,
        Hours: "8:00 - 00:00",
      },
      {
        Logo: ServiGasLogo1,
        Restaurant: "Servi Gas",
        Location: "Av Kennedy y Av Mariano Moreno",
        Image: PromocionesImage,
        Section: "Promociones",
        Time: "10 - 25 min",
        Items: PromocionesLength,
        Qualification: PromocionesQualification,
        QualificationQuantity: PromocionesQuantity,
        Hours: "8:00 - 00:00",
      },
    ];
    if (SectionPagePath === "Desayunos") {
      setSectionData(NewArr[0]);
    } else if (SectionPagePath === "Almuerzos") {
      setSectionData(NewArr[1]);
    } else if (SectionPagePath === "Promociones") {
      setSectionData(NewArr[2]);
    }
  }, [
    SectionPagePath,
    DesayunoImage,
    AlmuerzoImage,
    PromocionesImage,
    DesayunoQualification,
    AlmuerzoQualification,
    PromocionesQualification,
    DesayunoQuantity,
    AlmuerzoQuantity,
    PromocionesQuantity,
    DesayunosLength,
    AlmuerzosLength,
    PromocionesLength,
    ServiGasLogo1,
  ]);

  /* Condition For Mapping */

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

  /*Popups*/

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
      "ItemDetail-shadow ItemDetail-shadow-v1";
    document.getElementById("ItemDetail-content").className =
      "ItemDetail-content ItemDetail-content-v1";
    setTimeout(() => {
      setOpenPopUp(false);
    }, 300);
  };

  const PopUp1Close = () => {
    const Element1 = document.getElementById("Qualifier-shadow");
    Element1.classList.add("Qualifier-shadow-v1");
    const Element2 = document.getElementById("Qualifier-content");
    Element2.classList.add("Qualifier-content-v1");
    setTimeout(() => {
      setOpenPopUp1(false);
    }, 300);
  };

  const PopUp2Close = () => {
    document.getElementById("Information-shadow").className =
      "Information-shadow Information-shadow-v1";
    document.getElementById("Information-content").className =
      "Information-content Information-content-v1";
    setTimeout(() => {
      setOpenPopUp2(false);
    }, 300);
  };

  const PopUp3Close = () => {
    document.getElementById("Menu-Shadow").className =
      "Menu-Shadow Menu-Shadow-v1";
    document.getElementById("Menu-content").className =
      "Menu-content Menu-content-v1";
    setTimeout(() => {
      setOpenPopUp3(false);
    }, 300);
  };

  const PopUp4Close = () => {
    document.getElementById("Category-Shadow").className =
      "Category-Shadow Category-Shadow-v1";
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

  /*Loaders*/

  useEffect(() => {
    if (AlldbCollections.length > 0) {
      setSearcherOn(true);
    } else {
      setSearcherOn(false);
    }
  }, [AlldbCollections.length]);

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

  const [CategoryLoaded, setCategoryLoaded] = useState(false);

  useEffect(() => {
    if (CategoryImages && OpenPopUp4) {
      setCategoryLoaded(true);
    } else {
      setCategoryLoaded(false);
      setCategoryImages(false);
    }
  }, [OpenPopUp4, CategoryImages]);

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
      AppLocation === "/" &&
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
    } else {
      setHomePageLoaded(false);
      setExplorerMobileImages(false);
      setExplorerDesktopImages(false);
    }
  }, [
    AppLocation,
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

  const [QualifierLoaded, setQualifierLoaded] = useState(false);

  useEffect(() => {
    if (
      OpenPopUp1 &&
      SectionData.Logo &&
      SectionData.Qualification &&
      SectionData.QualificationQuantity
    ) {
      setQualifierLoaded(true);
    } else {
      setQualifierLoaded(false);
    }
  }, [
    OpenPopUp1,
    SectionData.Logo,
    SectionData.Qualification,
    SectionData.QualificationQuantity,
  ]);

  /*Up to here all approved*/

  const [Loaded5, setLoaded5] = useState(false);
  const [Loader, setLoader] = useState(true);
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

  /*Save on localstorage*/

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

  /*Qualifier logic*/

  const [Calification, setCalification] = useState();

  const SendCalification = () => {
    const db = getFirestore();
    if (SectionData.Section === "Desayunos y meriendas") {
      const NewDoc = {
        Cantidad: DesayunoQuantity + 1,
        Calidad: DesayunoQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Desayuno");
      updateDoc(dbdoc, NewDoc);
      setQuealificatedDesayunos(true);
      setCalification();
    }
    if (SectionData.Section === "Almuerzos y cenas") {
      const NewDoc1 = {
        Cantidad: AlmuerzoQuantity + 1,
        Calidad: AlmuerzoQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Almuerzos");
      updateDoc(dbdoc, NewDoc1);
      setQuealificatedAlmuerzos(true);
      setCalification();
    }
    if (SectionData.Section === "Promociones") {
      const NewDoc2 = {
        Cantidad: PromocionesQuantity + 1,
        Calidad: PromocionesQuality + Calification,
      };
      const dbdoc = doc(db, "Calificación", "Promociones");
      updateDoc(dbdoc, NewDoc2);
      setQuealificatedPromociones(true);
      setCalification();
    }
  };

  /*Section - ScrollToRef*/

  const refs = ProductsBySectionPath.reduce((acc, value) => {
    acc[value.Titulo] = React.createRef();
    return acc;
  }, {});

  const handleClick = (titulo) => {
    var element = refs[titulo].current;
    var headerOffset = 184;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <AppContext.Provider
      value={{
        setAppLocation,
        Scroll,
        handleClick,
        refs,
        SectionData,
        setItemDetailImage,
        ItemDetailLoaded,
        QualifierLoaded,
        HomePageLoaded,
        Mobile,
        ProductId,
        setProductId,
        ProductCollection,
        setProductCollection,
        ProductoTipo,
        setProductoTipo,
        OpenPopUp4,
        setOpenPopUp4,
        QuealificatedDesayunos,
        QuealificatedAlmuerzos,
        QuealificatedPromociones,
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
        Calification,
        setCalification,
        SendCalification,
        SectionPagePath,
        setSectionPagePath,
        ProductsBySectionPath,
        OpenPopUp3,
        setOpenPopUp3,
        CategoryLoaded,
        Loaded5,
        OpenPopUp5,
        setOpenPopUp5,
        StateWord,
        setStateWord,
        ResultInitialState,
        MapImage_3_Function,
        ConditionForMapping,
        ResultFound,
        Loader,
        SearcherOn,
        PopUpClose,
        PopUp1Close,
        PopUp2Close,
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
