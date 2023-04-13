import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartCard from "../CartCard";
import Checkout from "../Checkout";
import styles from "./cartvisualizer.module.css";

const CartVisualizer = () => {
  const { cart } = useContext(CartContext);

  let total = 0;
  cart.map((prod) => {
    total += prod.quantity * prod.price;
  });

  if (cart.length == 0) {
    return (
      <h2 className={styles.noProducts}>
        No hay ningún producto en el carrito aún
      </h2>
    );
  } else {
    return (
      <div>
        {cart.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
        <h2 className={styles.total}>Total: $ {total}</h2>
        <Checkout cart={cart} total={total} />
      </div>
    );
  }
};

export default CartVisualizer;
