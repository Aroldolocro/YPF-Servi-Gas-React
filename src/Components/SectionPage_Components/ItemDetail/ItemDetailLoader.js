import "./ItemDetail.css";

export const ItemDetailLoader1 = () => {
  return <div className="ItemDetailLoader1-background"></div>;
};

export const ItemDetailLoader2 = () => {
  return (
    <div className="ItemDetailLoader2-background">
      <div className="ItemDetailLoader2-B1"></div>
      <div className="ItemDetailLoader2-B2">
        <div className="ItemDetailLoader2-B2B1"></div>
        <div className="ItemDetailLoader2-B2B2"></div>
      </div>
      <div className="ItemDetailLoader2-B3"></div>
    </div>
  );
};
