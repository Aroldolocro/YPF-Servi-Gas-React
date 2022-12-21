import "./Products.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

export const ProductsLoader = () => {
  const { ProductsArrayForLoader } = useContext(AppContext);
  return (
    <div className="Products-background">
      {ProductsArrayForLoader.map((x, i) => (
        <div key={i} className="Product-background">
          <div className="Product-B1">
            <div className="Product-B1B1"></div>
            <div className="Product-B1B1 Product-B1B1-v1"></div>
            <div className="Product-B1B1 Product-B1B1-v2"></div>
          </div>
          <div className="Product-B2"></div>
        </div>
      ))}
    </div>
  );
};
