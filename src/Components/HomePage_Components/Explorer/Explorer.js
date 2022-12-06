import "./Explorer.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";
import ExplorerMobile from "./Components/ExplorerMobile";
import ExplorerDesktop from "./Components/ExplorerDesktop";
import SecondExplorer from "./Components/SecondExplorer";
import { SecondExplorerLoader } from "./Components/ExplorerLoader";

const Explorer = () => {
  const { Mobile, HomePageLoaded } = useContext(AppContext);

  return (
    <div className="Explorer-background">
      <div className="Explorer-B1">
        {Mobile ? <ExplorerMobile /> : <ExplorerDesktop />}
      </div>
      <div className="Explorer-B2">
        {HomePageLoaded ? <SecondExplorer /> : <SecondExplorerLoader />}
      </div>
    </div>
  );
};

export default Explorer;
