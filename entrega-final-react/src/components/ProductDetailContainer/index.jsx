import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-config";
import { CartContext } from "../../contexts/CartContext";
import styles from "./productdetailcontainer.module.css";

const ProductDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const getProduct = async () => {
    const prodRef = doc(db, "products", id);
    const docSnap = await getDoc(prodRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());
    } else {
      setProduct(0);
    }
    setLoading(false);
  };

  const addToCartWQuantity = async () => {
    if (quantity) {
      addToCart({ ...product, quantity: quantity });
      setQuantity(0);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : product ? (
        <div className={styles.productDetailContainer}>
          <img src={product.image} alt={product.title} />
          <h2 className={styles.info}>{product.title}</h2>
          <h4 className={styles.info}>{product.category}</h4>
          <p className={styles.info}>{product.description}</p>
          <h3 className={styles.info}>$ {product.price}</h3>
          <input
            type="number"
            min="1"
            max="100"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className={styles.info}
          ></input>
          <button onClick={addToCartWQuantity} className={styles.info}>
            Add to cart
          </button>
        </div>
      ) : (
        <h2>No se ha encontrado ese producto</h2>
      )}
    </div>
  );
};

export default ProductDetailContainer;
