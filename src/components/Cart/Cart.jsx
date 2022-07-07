import { addDoc, collection, getFirestore } from "@firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      Nombre: "Emiliano",
      Apellido: "Silva",
      Email: "emisilvag@gmail.com",
      Telefono: "0987654321",
      Direccion: "Santa Cruz, California",
    },
    articulos: cart.map((articulo) => ({
      id: articulo.id,
      articulo: articulo.article,
      precio: articulo.precio,
      cantidad: articulo.cantidad,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

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
      <button onClick={handleClick}>Generar orden de compra</button>
    </>
  );
};

export default Cart;
