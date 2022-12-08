import ItemDetail from "../ItemDetail/ItemDetail";
import Qualifier from "../SectionPage_Components/Qualifier/Qualifier";
import Information from "../SectionPage_Components/Information/Information";
import Menu from "../Navbar/Components/Menu/Menu";
import Category from "../HomePage_Components/Category/Category";
import Result from "../Navbar/Components/Result/Result";
import { AppContext } from "../../AppContext/AppContext";
import { useContext } from "react";

const Popup = () => {
  const {
    OpenPopUp,
    OpenPopUp1,
    OpenPopUp2,
    OpenPopUp3,
    OpenPopUp4,
    OpenPopUp5,
  } = useContext(AppContext);

  return (
    <>
      {OpenPopUp && <ItemDetail />}
      {OpenPopUp1 && <Qualifier />}
      {OpenPopUp2 && <Information />}
      {OpenPopUp3 && <Menu />}
      {OpenPopUp4 && <Category />}
      {OpenPopUp5 && <Result />}
    </>
  );
};

export default Popup;
