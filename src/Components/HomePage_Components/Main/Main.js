import "./Main.css";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import MainLoader from "./MainLoader";

const Main = () => {
  const { MainArray, MainImages_Function, HomePageLoaded } =
    useContext(AppContext);

  const RenderOfMainArray = MainArray.map((x, i) => (
    <div className={HomePageLoaded ? "Main-B1B1" : "NotDisplayed"} key={i}>
      <img
        src={x.Image}
        className="Main-img-1"
        alt=""
        onLoad={() => MainImages_Function(i)}
      />
      <div className="Main-B1B1B1">
        <div className="Main-B1B1B1B1">
          <img src={x.Logo} className="Main-logo-1" alt="" />
          <div className="Main-B1B1B1B1B1">
            <p className="Main-txt-2">{x.Section}</p>
            <div className="Main-B1B1B1B1B1B1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="#404040"
                stroke="#404040"
                strokeWidth={0.8}
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              <p className="Main-txt-3">{x.Time}</p>
              <p className="Main-txt-3">•</p>
              <p className="Main-txt-4">Items ( {x.Items} )</p>
            </div>
          </div>
        </div>
        <div className="Main-B1B1B1B2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="#ffae00"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <p className="Main-txt-5">{x.Qualification}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="Main-background">
      {HomePageLoaded ? (
        <p className="Main-txt-1">Nuestro menú</p>
      ) : (
        <div className="Main-txt-1-Loader"></div>
      )}
      <div className="Main-B1">
        {!HomePageLoaded && <MainLoader />}
        {RenderOfMainArray}
      </div>
    </div>
  );
};

export default Main;
