import "./Filter.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const FilterLoader = () => {
  const { FilterArrayForLoader } = useContext(AppContext);
  return (
    <>
      {FilterArrayForLoader.map((x, i) => (
        <div key={i} className="FilterLoader-background">
          <div className="FilterLoader-B1">
            <div className="FilterLoader-B1B1"></div>
            <div className="FilterLoader-B1B2"></div>
            <div className="FilterLoader-B1B3"></div>
            <div className="FilterLoader-B1B4"></div>
          </div>
          <div className="FilterLoader-B2"></div>
        </div>
      ))}
    </>
  );
};

export default FilterLoader;
