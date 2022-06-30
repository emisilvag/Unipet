import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(data, cantidad);
  };

  return (
    <div>
      <div>
        <img src={data.image} />
        <h3>{data.article}</h3>
        <p>{data.precio}</p>
        {goToCart ? (
          <Link to="/Cart">Ir al Carrito</Link>
        ) : (
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
