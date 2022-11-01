import "./Explorer.css";
import Image3 from "../../../Images/Image3.png";
import Image4 from "../../../Images/Image4.png";
import test1 from "../../../Images/test1.jpg";
import test2 from "../../../Images/test2.jpg";
import test3 from "../../../Images/test3.jpg";
import test4 from "../../../Images/test4.jpg";
import test5 from "../../../Images/test5.jpg";

const Explorer = () => {
  return (
    <div className="Explorer-background">
      <div className="Explorer-content">
        <div className="Explorer-C-B1">
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={test1} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Hamburguesa</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={test2} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Pizza</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={test3} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Milanesas</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={test4} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Lomitos</p>
          </div>
          <div className="Explorer-C-B1B1">
            <div className="Explorer-C-B1B1B1">
              <img src={test5} className="Explorer-img-1" alt="" />
            </div>
            <p className="Explorer-txt-1">Tartas</p>
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
