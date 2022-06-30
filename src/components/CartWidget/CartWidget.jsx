import React from "react";
import carrito from "./carrito.jpg";

export const CartWidget = () => {
  return (
    <div>
      <img src={carrito} alt="carrito" />
    </div>
  );
};

export default CartWidget;
