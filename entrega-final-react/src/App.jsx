import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductListContainer from "./components/ProductListContainer";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../db/firebase-config";
import ProductDetailContainer from "./components/ProductDetailContainer";
import CartVisualizer from "./components/CartVisualizer";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [products, setProducts] = useState([]);
  const productsRef = collection(db, "products");

  const getProducts = async () => {
    const productsCollection = await getDocs(productsRef);
    const products = productsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ProductListContainer products={products} />}
        />
        <Route
          path="/category/:categoryId"
          element={<ProductListContainer products={products} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetailContainer products={products} />}
        />
        <Route
          path="/category/:categoryId/product/:id"
          element={<ProductDetailContainer />}
        />
        <Route path="/cart" element={<CartVisualizer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h3>Error 404: Page not found</h3>} />
      </Routes>
    </div>
  );
}

export default App;
