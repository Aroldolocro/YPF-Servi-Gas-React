import "./SectionPage.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { SectionPageLoader1 } from "../../Components/SectionPage_Components/SectionPageLoader/SectionPageLoader";
import { ProductsLoader } from "../../Components/SectionPage_Components/Products/ProductsLoader";
import RestaurantData from "../../Components/SectionPage_Components/RestaurantData/RestaurantData";
import Products from "../../Components/SectionPage_Components/Products/Products";

const SectionPage = () => {
  const { Path1 } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    setSectionPagePath,
    SectionData,
    ProductsBySectionPath,
    handleClick,
    Scroll,
    Mobile,
    setOpenPopUp2,
    setAppLocation,
    SectionPageLoaded,
  } = useContext(AppContext);

  useEffect(() => {
    setSectionPagePath(Path1);
    setAppLocation(location.pathname);
    window.scrollTo(0, 0);
  }, [setSectionPagePath, Path1, setAppLocation, location.pathname]);

  useEffect(() => {
    const element1 = document.getElementById("SectionPage-B1");
    const element2 = document.getElementById("SectionPage-B1B1");
    const element3 = document.getElementById("SectionPage-txt-0");
    const element4 = document.getElementById("SectionPage-B3");
    if (Scroll > 144 && Mobile) {
      element1.classList.add("SectionPage-B1-Scroll");
      element2.classList.add("SectionPage-B1B1-Scroll");
      element3.classList.remove("NotDisplayed");
      element3.classList.add("SectionPage-txt-0");
      element4.classList.add("SectionPage-B3-Scroll");
    } else if (Scroll < 1 && Mobile) {
      element1.classList.remove("SectionPage-B1-Scroll");
      element2.classList.remove("SectionPage-B1B1-Scroll");
      element3.classList.add("NotDisplayed");
    } else if (!Mobile) {
      element1.classList.remove("SectionPage-B1-Scroll");
      element2.classList.remove("SectionPage-B1B1-Scroll");
      element3.classList.add("NotDisplayed");
      element3.classList.remove("SectionPage-txt-0");
      element4.classList.remove("SectionPage-B3-Scroll");
    }
  }, [Scroll, Mobile]);

  const TitulosArray = ProductsBySectionPath.filter((x) => x.Titulo).map(
    (x, i) => (
      <div
        key={i}
        onClick={() => handleClick(x.Titulo)}
        className="TitulosArray-background"
      >
        <p className="TitulosArray-txt-1">{x.Titulo}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="9"
          fill="black"
          viewBox="0 0 16 16"
          className="TitulosArray-svg-1"
          stroke="black"
          strokeWidth={0.5}
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    )
  );

  return (
    <div className="SectionPage-background">
      <div className="SectionPage-B1" id="SectionPage-B1">
        <img src={SectionData.Image} className="SectionPage-img-1" alt="" />
        <div className="SectionPage-B1B1" id="SectionPage-B1B1">
          <div className="SectionPage-B1B1B1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="black"
              className="SectionPage-svg-1"
              viewBox="0 0 16 16"
              stroke="black"
              strokeWidth={1.5}
              onClick={() => navigate("/")}
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <p className="NotDisplayed" id="SectionPage-txt-0">
              Servi Gas
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="black"
            className="SectionPage-svg-2"
            viewBox="0 0 16 16"
            onClick={() => setOpenPopUp2(true)}
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        </div>
      </div>
      <div className="SectionPage-B2">
        <img src={SectionData.Logo} className="SectionPage-img-2" alt="" />
        <div className="SectionPage-B2B1">
          <p className="SectionPage-txt-1">{SectionData.Restaurant}</p>
          <p className="SectionPage-txt-2">{SectionData.Location}</p>
          <p className="SectionPage-txt-2">{SectionData.Section}</p>
        </div>
      </div>
      <RestaurantData />
      <div className="SectionPage-B3" id="SectionPage-B3">
        {SectionPageLoaded ? TitulosArray : <SectionPageLoader1 />}
      </div>
      <div className="SectionPage-B4">
        <div className="SectionPage-B4B1">
          <p
            className="SectionPage-txt-3 pointer"
            onClick={() => navigate("/")}
          >
            Servi Gas
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="13"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <p className="SectionPage-txt-3">{SectionData.Section}</p>
        </div>
        {SectionPageLoaded ? <Products /> : <ProductsLoader />}
      </div>
    </div>
  );
};

export default SectionPage;
