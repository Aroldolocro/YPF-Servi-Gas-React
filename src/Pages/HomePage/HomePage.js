import "./HomePage.css";
import Explorer from "../../Components/HomePage_Components/Explorer/Explorer";
import Image3 from "../../Images/Image3.jpg";
import test2 from "../../Images/test2.jpg";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";

const HomePage = () => {
  const { DesayunoQualification, AlmuerzoQualification } =
    useContext(AppContext);
  return (
    <div className="HomePage-background">
      <div className="HomePage-content">
        <div className="HomePage-C-B1"></div>
        <div className="HomePage-C-B2">
          <div className="HomePage-C-B2B1">
            <div className="HomePage-C-B2B1B1">
              <div className="HomePage-C-B2B1B1B1">
                <p className="HomePage-txt-1">Servi Gas</p>
                <div className="HomePage-C-B2B1B1B1B1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="HomePage-svg-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <p className="HomePage-txt-2">
                    Av Kennedy y Av Mariano Moreno
                  </p>
                </div>
              </div>
            </div>
            <Explorer />
          </div>
          <div className="HomePage-C-B2B2">
            <p className="HomePage-txt-3">Nuestro menú</p>
            <Link to={"/Desayunos"} className="HomePage-C-B2B2B1">
              <div className="HomePage-C-B2B2B1B1">
                <img src={Image3} className="HomePage-img-1" alt="" />
              </div>
              <div className="HomePage-C-B2B2B1B2">
                <div className="HomePage-C-B2B2B1B2B1">
                  <p className="HomePage-txt-3">Desayunos y meriendas</p>
                  <p className="HomePage-txt-4">Ítems (8)</p>
                </div>
                <div className="HomePage-C-B2B2B1B2B2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="HomePage-svg-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <p className="HomePage-txt-5">{DesayunoQualification}</p>
                </div>
              </div>
            </Link>
            <Link to={"/Almuerzos"} className="HomePage-C-B2B2B1">
              <div className="HomePage-C-B2B2B1B1">
                <img src={test2} className="HomePage-img-1" alt="" />
              </div>
              <div className="HomePage-C-B2B2B1B2">
                <div className="HomePage-C-B2B2B1B2B1">
                  <p className="HomePage-txt-3">Almuerzos y cenas</p>
                  <p className="HomePage-txt-4">Ítems (16)</p>
                </div>
                <div className="HomePage-C-B2B2B1B2B2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="HomePage-svg-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <p className="HomePage-txt-5">{AlmuerzoQualification}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
