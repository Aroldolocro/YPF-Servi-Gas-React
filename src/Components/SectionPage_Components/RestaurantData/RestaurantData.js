import "./RestaurantData.css";
import { AppContext } from "../../../AppContext/AppContext";
import { useContext } from "react";

const RestaurantData = () => {
  const { SectionData, setOpenPopUp1 } = useContext(AppContext);
  return (
    <div className="RestaurantData-background">
      <div className="RestaurantData-B1">
        <div className="RestaurantData-B1B1">
          <p className="RestaurantData-txt-1">Preparacion</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="gray"
            viewBox="-1 -1 18 18"
            stroke="gray"
            strokeWidth={0.5}
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
        </div>
        <p className="RestaurantData-txt-2">{SectionData.Time}</p>
      </div>
      <div className="RestaurantData-B1 bluebackground">
        <div className="RestaurantData-B1B1">
          <p className="RestaurantData-txt-1">Items</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="gray"
            viewBox="0 0 16 16"
            stroke="gray"
            strokeWidth={0.5}
          >
            <path
              fillRule="evenodd"
              d="M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <p className="RestaurantData-txt-2 blue">{SectionData.Items}</p>
      </div>
      <div
        className="RestaurantData-B1 pointer"
        onClick={() => setOpenPopUp1(true)}
      >
        <p className="RestaurantData-txt-1">Calificar</p>
        <div className="RestaurantData-B1B1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="#ffae00"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <p className="RestaurantData-txt-2">{SectionData.Qualification}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantData;
