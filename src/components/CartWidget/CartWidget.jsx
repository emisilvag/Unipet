import React from "react";
import { useCartContext } from "../../Context/CartContext";
import carrito from "./carrito.jpg";

export const CartWidget = () => {
  const { totalArticulos } = useCartContext();
  return (
    <div>
      <img src={carrito} alt="carrito" />
      <span>{totalArticulos() || ""}</span>
    </div>
  );
};

export default CartWidget;
