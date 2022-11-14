import "./Scroll.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import { SectionPageLoader4 } from "../SectionPageLoader/SectionPageLoader";

const Scroll = () => {
  const { setOpenPopUp2, sectionName, Image, LoadedImg29, setLoadedImg29 } =
    useContext(AppContext);
  return (
    <div className="Scroll-background">
      <div className="Scroll-B1">
        {!LoadedImg29 && <SectionPageLoader4 />}
        <img
          src={Image}
          className={LoadedImg29 ? "Scroll-img" : "NotDisplayed"}
          alt=""
          onLoad={() => setLoadedImg29(true)}
        />
        <div className="Scroll-B1B1">
          <div className="Scroll-B1B1B1">
            <Link to={"/"} className="Scroll-B1B1B1B1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="Scroll-svg-1"
                viewBox="1 0 16 16"
                stroke="black"
                strokeWidth={1.5}
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </Link>
            <p className="Scroll-txt-1">Servi Gas Menú</p>
          </div>
          <div className="Scroll-B1B1B2" onClick={() => setOpenPopUp2(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="currentColor"
              className="Scroll-svg-2"
              viewBox="0 0 16 16"
              stroke="white"
              strokeWidth={0.5}
            >
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="Scroll-B2">
        <div className="Scroll-B2B1">
          <p className="Scroll-txt-2" onClick={() => window.scrollTo(0, 0)}>
            {sectionName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
