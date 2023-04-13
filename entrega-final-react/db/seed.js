import { addDoc, collection } from "firebase/firestore";
import products from "../products.js";
import db from "./firebase-config.js";

const productsCollectionRef = collection(db, "products");

const promises = products.map((product) =>
  addDoc(productsCollectionRef, product)
);

Promise.all(promises).then(() => {
  console.log("Done!");
  process.exit(0);
});
