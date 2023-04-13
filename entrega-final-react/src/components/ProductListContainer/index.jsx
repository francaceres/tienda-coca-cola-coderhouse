import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import styles from "./productlistcontainer.module.css";

const ProductListContainer = ({ products }) => {
  const { categoryId } = useParams();
  if (categoryId) {
    products = products.filter((product) => product.category == categoryId);
  }

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListContainer;
