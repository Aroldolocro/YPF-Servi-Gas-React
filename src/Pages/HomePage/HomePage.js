import "./HomePage.css";
import Image1 from "../../Images/Image1.jpeg";
import Image3 from "../../Images/Image3.png";
import Image4 from "../../Images/Image4.png";

const HomePage = () => {
  return (
    <div className="HomePage-background">
      <div className="HomePage-content">
        <div className="HomePage-C-B1"></div>
        <div className="HomePage-C-B2">
          <div className="HomePage-C-B2B1">
            <div className="HomePage-C-B2B1B1">
              <img src={Image1} className="HomePage-img-1" alt="" />
            </div>
            <div className="HomePage-C-B2B1B2">
              <p className="HomePage-txt-1">Servi Gas Menú</p>
              <div className="HomePage-C-B2B1B2B1">
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
                <p className="HomePage-txt-2">Av Kennedy y Av Mariano Moreno</p>
              </div>
            </div>
          </div>
          <div className="HomePage-C-B2B2">
            <div className="HomePage-C-B2B2B1">
              <img src={Image3} className="HomePage-img-3" alt="" />
            </div>
            <div className="HomePage-C-B2B2B2">
              <div className="HomePage-C-B2B2B2B1">
                <p className="HomePage-txt-3">Desayunos</p>
                <p className="HomePage-txt-4">Productos (8)</p>
              </div>
              <p className="HomePage-txt-5">😍</p>
            </div>
          </div>
          <div className="HomePage-C-B2B2">
            <div className="HomePage-C-B2B2B1">
              <img src={Image4} className="HomePage-img-4" alt="" />
            </div>
            <div className="HomePage-C-B2B2B2">
              <div className="HomePage-C-B2B2B2B1">
                <p className="HomePage-txt-3">Platos</p>
                <p className="HomePage-txt-4">Productos (12)</p>
              </div>
              <p className="HomePage-txt-5">🤩</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
