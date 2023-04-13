import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import styles from "./cartcard.module.css";

const CartCard = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <Link to={`product/${product.id}`}>
          <h3>{product.title}</h3>
        </Link>
        <p>
          $ {product.price * product.quantity} (${product.price} x unidad)
        </p>
        <p>Cantidad: {product.quantity}</p>
      </div>
      <button onClick={() => removeFromCart(product.id)}>
        Remover del carrito
      </button>
    </div>
  );
};

export default CartCard;
