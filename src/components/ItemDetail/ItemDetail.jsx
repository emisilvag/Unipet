import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (cantidad) => {
    setGoToCart(true);
  };

  return (
    <div>
      <div>
        <img src={data.image} />
        <h3>{data.article}</h3>
        <p>{data.precio}</p>

        {goToCart ? (
          <Link to="/Cart">Terminar compra</Link>
        ) : (
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
