import "./Explorer.css";
import Image3 from "../../../Images/Image3.png";
import Image4 from "../../../Images/Image4.png";

const Explorer = () => {
  return (
    <div className="Explorer-background">
      <div className="Explorer-content">
        <div className="Explorer-C-B1">
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={Image3} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Pizza</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={Image4} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Hamburguesa</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={Image3} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Pizza</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={Image4} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Pizza</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={Image3} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Pizza</p>
          </div>
        </div>
        <div className="Explorer-C-B2">
          <div className="Explorer-C-B2B1">
            <p className="Explorer-txt-2">🤑</p>
            <p className="Explorer-txt-2">Promociones</p>
          </div>
          <div className="Explorer-C-B2B1">
            <p className="Explorer-txt-2">🤑</p>
            <p className="Explorer-txt-2">Promociones</p>
          </div>
          <div className="Explorer-C-B2B1">
            <p className="Explorer-txt-2">🤑</p>
            <p className="Explorer-txt-2">Promociones</p>
          </div>
          <div className="Explorer-C-B2B1">
            <p className="Explorer-txt-2">🤑</p>
            <p className="Explorer-txt-2">Promociones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
