import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay articulos en el carrito</p>
        <Link to="/">Hacer Compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((articulo) => (
        <ItemCart key={articulo.id} articulo={articulo} />
      ))}
      <p>Total: {totalPrice()}</p>
    </>
  );
};

export default Cart;
