import "./Main.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const MainLoader = () => {
  const { MainArray } = useContext(AppContext);
  return (
    <>
      {MainArray.map((x, i) => (
        <div className="MainLoader-background" key={i}>
          <div className="MainLoader-B1"></div>
          <div className="MainLoader-B2">
            <div className="MainLoader-B2B1">
              <div className="MainLoader-B2B1B1"></div>
              <div className="MainLoader-B2B1B2">
                <div className="MainLoader-B2B1B2B1"></div>
                <div className="MainLoader-B2B1B2B2"></div>
              </div>
            </div>
            <div className="MainLoader-B2B2"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainLoader;
