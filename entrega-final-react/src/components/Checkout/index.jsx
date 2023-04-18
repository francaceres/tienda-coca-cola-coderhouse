import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../../../db/firebase-config";
import { CartContext } from "../../contexts/CartContext";
import styles from "./checkout.module.css";

const Checkout = ({ cart, total }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");

  const { emptyCart } = useContext(CartContext);
  const resetCart = () => {
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setRepeatEmail("");
    setCheckoutDisplay(false);
    emptyCart();
  };

  const sendOrder = async () => {
    const order = {
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      products: cart,
      timestamp: serverTimestamp(),
      total: total,
      state: "Generated",
    };
    const orderRef = await addDoc(collection(db, "orders"), order);
    alert("¡Compra realizada con éxito!\nSu ID de compra es: " + orderRef.id);
    resetCart();
  };

  const checkEmail = (e) => {
    e.preventDefault();
    if (email !== repeatEmail) {
      alert("Las direcciones de email ingresadas no coinciden");
    } else {
      sendOrder();
    }
  };

  let checkout;
  const [checkoutDisplay, setCheckoutDisplay] = useState(false);
  if (checkoutDisplay) {
    checkout = (
      <form onSubmit={(e) => checkEmail(e)} className={styles.form}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Repita email"
          value={repeatEmail}
          onChange={(e) => setRepeatEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="submit"
          value="Completar compra"
          className={styles.input}
        />
      </form>
    );
  } else {
    checkout = (
      <div className={styles.button}>
        <button
          onClick={() => setCheckoutDisplay(true)}
          className={styles.button}
        >
          Comprar
        </button>
      </div>
    );
  }

  return <>{checkout}</>;
};

export default Checkout;
