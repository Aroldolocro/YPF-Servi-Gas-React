import "./Explorer.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import ExplorerMobile from "./Components/ExplorerMobile";
import ExplorerDesktop from "./Components/ExplorerDesktop";

const Explorer = () => {
  const {
    ProductoTipo,
    setProductoTipo,
    setCollection,
    setOpenPopUp4,
    Loaded,
    Mobile,
  } = useContext(AppContext);

  return (
    <div className="Explorer-background">
      <div className="Explorer-B1">
        {Mobile ? <ExplorerMobile /> : <ExplorerDesktop />}
      </div>
    </div>
  );
};

export default Explorer;
