import "../Explorer.css";
import { AppContext } from "../../../../AppContext/AppContext";
import { useContext } from "react";

export const ExplorerMobileLoader = () => {
  const { ExplorerMobileArrayForLoader } = useContext(AppContext);

  return (
    <>
      {ExplorerMobileArrayForLoader.map((x, i) => (
        <div className="ExplorerLoader-background" key={i}>
          <div className="ExplorerLoader-B1"></div>
          <div className="ExplorerLoader-B2"></div>
        </div>
      ))}
    </>
  );
};

export const ExplorerDesktopLoader = () => {
  const { ExplorerDesktopArrayForLoader } = useContext(AppContext);
  return (
    <>
      {ExplorerDesktopArrayForLoader.map((x, i) => (
        <div className="ExplorerLoader-background" key={i}>
          <div className="ExplorerLoader-B1"></div>
          <div className="ExplorerLoader-B2"></div>
        </div>
      ))}
    </>
  );
};