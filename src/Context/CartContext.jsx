import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((article) => article.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((article) => article.id !== id));

  const addProduct = (item, cantidad) => {
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

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
