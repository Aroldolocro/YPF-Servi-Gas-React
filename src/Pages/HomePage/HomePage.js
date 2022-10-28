import "./HomePage.css";
import Explorer from "../../Components/HomePage_Components/Explorer/Explorer";
import Image3 from "../../Images/Image3.png";
import Image4 from "../../Images/Image4.png";
import { Link } from "react-router-dom";

const HomePage = () => {
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
            <Link to={"/desayunos"} className="HomePage-C-B2B2B1">
              <div className="HomePage-C-B2B2B1B1">
                <img src={Image3} className="HomePage-img-1" alt="" />
              </div>
              <div className="HomePage-C-B2B2B1B2">
                <div className="HomePage-C-B2B2B1B2B1">
                  <p className="HomePage-txt-3">Desayunos</p>
                  <p className="HomePage-txt-4">Productos (8)</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="HomePage-svg-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
            </Link>
            <Link to={"/platos"} className="HomePage-C-B2B2B1">
              <div className="HomePage-C-B2B2B1B1">
                <img src={Image4} className="HomePage-img-1" alt="" />
              </div>
              <div className="HomePage-C-B2B2B1B2">
                <div className="HomePage-C-B2B2B1B2B1">
                  <p className="HomePage-txt-3">Platos</p>
                  <p className="HomePage-txt-4">Productos (16)</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="HomePage-svg-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
