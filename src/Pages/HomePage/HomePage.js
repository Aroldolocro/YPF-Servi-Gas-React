import "./HomePage.css";
import Explorer from "../../Components/Explorer/Explorer";

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
          <div className="HomePage-C-B2B2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
