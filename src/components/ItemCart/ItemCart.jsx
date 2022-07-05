import React from "react";
import { useCartContext } from "../../Context/CartContext";

const ItemCart = ({ articulo }) => {
  const { removeArticle } = useCartContext();
  return (
    <div>
      <img src={articulo.image} alt={articulo.article} />
      <div>
        <p>Articulo: {articulo.article}</p>
        <p>Cantidad: {articulo.cantidad}</p>
        <p>Precio Unidad.: {articulo.precio}</p>
        <p>Subtotal: ${articulo.cantidad * articulo.precio}</p>
        <button onClick={() => removeArticle(articulo.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
