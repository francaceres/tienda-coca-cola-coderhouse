import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  const removeFromCart = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
  };

  const emptyCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
