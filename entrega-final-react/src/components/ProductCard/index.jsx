import { Link } from "react-router-dom";
import styles from "./productcard.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <Link to={`product/${product.id}`}>
        <img src={product.image} alt={product.title} className={styles.img} />
        <h3>{product.title}</h3>
      </Link>
      <p>$ {product.price}</p>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
