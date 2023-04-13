import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <NavLink to="/">
        <h1>Tienda Coca-Cola</h1>
      </NavLink>
      <div className={styles.menu}>
        <NavLink className={styles.link} to="/category/Gaseosas">
          Gaseosas
        </NavLink>
        <NavLink className={styles.link} to="/category/Jugos">
          Jugos
        </NavLink>
        <NavLink className={styles.link} to="/category/AguasSaborizadas">
          Aguas Saborizadas
        </NavLink>
        <NavLink className={styles.link} to="/category/Aguas">
          Aguas
        </NavLink>
        <NavLink className={styles.link} to="/cart">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
