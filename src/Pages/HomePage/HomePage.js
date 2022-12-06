import "./HomePage.css";
import Explorer from "../../Components/HomePage_Components/Explorer/Explorer";
// import Main from "../../Components/HomePage_Components/Main/Main";
import Filter from "../../Components/HomePage_Components/Filter/Filter";
// import { AppContext } from "../../AppContext/AppContext";
// import { useContext } from "react";

const HomePage = () => {
  // const { ProductoTipo } = useContext(AppContext);

  return (
    <div className="HomePage-background">
      <div className="HomePage-B1">
        <p className="HomePage-txt-1">Servi Gas</p>
        <div className="HomePage-B1B1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="#303030"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <p className="HomePage-txt-2">Av Kennedy y Av Mariano Moreno</p>
        </div>
      </div>
      <Explorer />
      {/* <Main /> */}
      <Filter />
    </div>
  );
};

export default HomePage;
