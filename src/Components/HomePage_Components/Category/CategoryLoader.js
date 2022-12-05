import "./Category.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const CategoryLoader = () => {
  const { ExplorerDesktopArrayForLoader } = useContext(AppContext);
  return (
    <>
      {ExplorerDesktopArrayForLoader.map((x, i) => (
        <div key={i} className="CategoryLoader-background">
          <div className="CategoryLoader-B1"></div>
          <div className="CategoryLoader-B2"></div>
        </div>
      ))}
    </>
  );
};

export default CategoryLoader;
