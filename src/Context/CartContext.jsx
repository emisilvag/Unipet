import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((article) => article.id === id) ? true : false;

  const removeArticle = (id) =>
    setCart(cart.filter((article) => article.id !== id));

  const addArticle = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((articulo) => {
          return articulo.id === item.id
            ? { ...articulo, cantidad: articulo.cantidad + cantidad }
            : articulo;
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  console.log("Carrito", cart);

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  };

  const totalArticulos = () =>
    cart.reduce(
      (acumulador, articuloActual) => acumulador + articuloActual.cantidad,
      0
    );

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeArticle,
        addArticle,
        totalPrice,
        totalArticulos,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
